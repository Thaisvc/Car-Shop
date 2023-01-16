import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarServices from '../../../src/Services/CarServices';
import Car from '../../../src/Domains/Car';

const arrayOutput = [{
  id: '633ec9fa3df977e30e993495',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
},
  
{
  id: '633ec9fa3df977e30e993492',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
}];

describe('Testa a camada Service', function () {
  it('Cria um novo objeto de Carros com Sucesso', async function () {
    const inputCar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
      
    const outputCar: ICar = {
      id: '633ec9fa3df977e30e993492',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(outputCar);
    const service = new CarServices();
    const result = await service.create(inputCar);

    expect(result).to.deep.equal(outputCar);
  });

  it('Busca todos os carros cadastrados', async function () {
    sinon.stub(Model, 'find').resolves(arrayOutput);
      
    const service = new CarServices();
    const result = await service.findAllCars();
    
    expect(result).to.be.deep.equal(arrayOutput);
  });

  it('Testa se encontra um carros pelo id', async function () {
    const outputCar: Car = new Car({
      id: '633ec9fa3df977e30e993492',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'findById').resolves(outputCar);

    const service = new CarServices();
    const result = await service.findById('633ec9fa3df977e30e993492');

    expect(result).to.be.deep.equal(outputCar);
  });
});