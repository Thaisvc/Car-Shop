import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleServices from '../../../src/Services/MotorcycleServices';
import Motorcycle from '../../../src/Domains/Motorcycle';

const arrayOutput = [{
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 900f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
},
  
{
  id: '6348513f34c397abcad040b5',
  model: 'Honda Cb 800f Hornet',
  year: 2010,
  color: 'black',
  status: true,
  buyValue: 50.000,
  category: 'Custom',
  engineCapacity: 1000,
}];

describe('Testa a camada Service', function () {
  it('Cria um novo objeto de Motorcycle com Sucesso', async function () {
    const inputMoto = {
      model: 'Honda Cb 500f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
      
    const outputMoto: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,

    };
    sinon.stub(Model, 'create').resolves(outputMoto);
    const service = new MotorcycleServices();
    const result = await service.create(inputMoto);

    expect(result).to.deep.equal(outputMoto);
  });

  it('Busca todos as motos cadastrados', async function () {
    sinon.stub(Model, 'find').resolves(arrayOutput);
      
    const service = new MotorcycleServices();
    const result = await service.findALl();
    
    expect(result).to.be.deep.equal(arrayOutput);
  });

  it('Testa se encontra uma moto pelo id', async function () {
    const outputMoto: Motorcycle = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'findById').resolves(outputMoto);

    const service = new MotorcycleServices();
    const result = await service.findIdMoto('633ec9fa3df977e30e993492');

    expect(result).to.be.deep.equal(outputMoto);
  });

  afterEach(function () {
    sinon.restore();
  });
});