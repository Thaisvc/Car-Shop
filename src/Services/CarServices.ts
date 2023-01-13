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
}
export default CarServices;