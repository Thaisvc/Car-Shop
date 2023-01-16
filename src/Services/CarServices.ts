import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarServices {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  
  public async create(car: ICar) {
    const carsODM = new CarODM();
    const NewCars = await carsODM.create(car);
    return this.createCarDomain(NewCars);
  }

  public async findAllCars() {
    const carsODM = new CarODM();
    const NewCars = await carsODM.findAll();
    const carsArray = NewCars.map((cars) =>
      this.createCarDomain(cars));
    return carsArray;
  }

  public async findById(car:string) {
    const carsODM = new CarODM();
    const Cars = await carsODM.findId(car);
   
    return this.createCarDomain(Cars);
  }
}
export default CarServices;