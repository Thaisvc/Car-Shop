import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;
  
  constructor(carParameters:IMotorcycle) {
    this.id = carParameters.id;
    this.model = carParameters.model;
    this.year = carParameters.year;
    this.color = carParameters.color;
    this.status = carParameters.status;
    this.buyValue = carParameters.buyValue;
    this.category = carParameters.category;
    this.engineCapacity = carParameters.engineCapacity;
  }
}