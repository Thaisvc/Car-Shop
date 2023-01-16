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
}

export default MotorcycleServices;