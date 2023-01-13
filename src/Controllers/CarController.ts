import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import ServiceCar from '../Services/CarServices';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ServiceCar;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ServiceCar();
  }
  
  public async CreateCar() {
    const body: ICar = { ...this.req.body };

    try {
      const newCar = await this.service.create(body);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
} 

export default CarController;