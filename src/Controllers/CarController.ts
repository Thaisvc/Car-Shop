import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import ServiceCar from '../Services/CarServices';
import { INVALID_MONGO_ID, CAR_NOT_FOUND } from '../Util/http.exception';

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

  public async findCar() {
    try {
      const cars = await this.service.findAllCars();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async idFindCar() {
    const { id } = this.req.params;

    try {
      const Car = await this.service.findById(id);
      if (!Car) return this.res.status(404).json({ message: CAR_NOT_FOUND });
      return this.res.status(200).json(Car);
    } catch (error) {
      return this.res.status(422).json({ message: INVALID_MONGO_ID });
    }
  }

  public async updateCar() {
    const bodyUpdate: ICar = { ...this.req.body };
    const { id } = this.req.params;
    try {
      const Car = await this.service.findById(id);
      if (Car) {
        const { message, status } = await this.service.updateCarId(id, bodyUpdate);
      
        return this.res.status(status).json(message);
      }
      return this.res.status(404).json({ message: CAR_NOT_FOUND });
    } catch (error) {
      return this.res.status(422).json({ message: INVALID_MONGO_ID });
    }
  }

  public async deleteById() {
    const { id } = this.req.params;

    try {
      const CarDel = await this.service.findById(id);
      if (!CarDel) return this.res.status(404).json({ message: CAR_NOT_FOUND });
      return this.res.status(200).json();
    } catch (error) {
      return this.res.status(422).json({ message: INVALID_MONGO_ID });
    }
  }
} 

export default CarController;