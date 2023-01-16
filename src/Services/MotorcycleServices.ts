import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleServices {
  private createDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle); // cria com o medelo da Motorcycle
    }
    return null;
  }
    
  public async create(motorcycle: IMotorcycle) {
    const Moto = new MotorcycleODM();
    const NewCars = await Moto.create(motorcycle);
    // return NewCars ou 👇
    return this.createDomain(NewCars);
  }

  public async findALl() {
    const Moto = new MotorcycleODM();
    const findMoto = await Moto.find();
    return findMoto;
  }

  public async findIdMoto(id: string) {
    const Moto = new MotorcycleODM();
    const findId = await Moto.findById(id);
    console.log(findId);
    if (findId) return { status: 200, message: findId };
    
    return { status: 404, message: 'Motorcycle not found' };
  }
}

export default MotorcycleServices;