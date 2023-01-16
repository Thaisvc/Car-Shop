import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ServiceMotorcycle from '../Services/MotorcycleServices';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ServiceMotorcycle;
    
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ServiceMotorcycle();
  }

  public async createdMotorcycle() {
    const body : IMotorcycle = { ...this.req.body };
    try {
      const createdNew = await this.service.create(body);
      return this.res.status(201).json(createdNew);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;