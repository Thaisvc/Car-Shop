import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';
// CRIO A CLASS CAR PARA QUE POSSO CRIAR INSTACIAS DELA 

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(carParameters:ICar) {
    super(carParameters);
    this.doorsQty = carParameters.doorsQty;
    this.seatsQty = carParameters.seatsQty;
  }
}