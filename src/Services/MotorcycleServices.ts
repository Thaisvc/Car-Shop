import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleServices {
  private createDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle); // cria com o medelo da Motorcycle do domain
    }
    return null;
  }

  private Moto = new MotorcycleODM();
    
  public async create(motorcycle: IMotorcycle) {
    const NewCars = await this.Moto.create(motorcycle);
    // return NewCars ou 👇
    return this.createDomain(NewCars);
  }

  public async findALl() {
    const findMoto = await this.Moto.find();
    return findMoto.map((e) => this.createDomain(e));
  }

  public async findIdMoto(id: string) {
    const findId = await this.Moto.findById(id);
    return this.createDomain(findId);
    /*  if (findId) return { status: 200, message: findId };
    
    return { status: 404, message: 'Motorcycle not found' }; */
  }

  public async updateMoto(id: string, body: object) {
    const updateFile = this.Moto.update(id, body);
    const createdObj = this.createDomain(await updateFile);
    return { status: 200, message: createdObj };
  }
}

export default MotorcycleServices;