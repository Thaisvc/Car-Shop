/* eslint-disable sonarjs/no-duplicate-string */
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

  public async findAllMoto() {
    try {
      const findMoto = await this.service.findALl();
      return this.res.status(200).json(findMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findId() {
    const { id } = this.req.params;
    /* try {
      const { status, message } = await this.service.findIdMoto(id);
      return this.res.status(status).json(message);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    } */

    try {
      const moto = await this.service.findIdMoto(id);
      if (!moto) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(moto);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateById() {
    const bodyUpdate: IMotorcycle = { ...this.req.body };
    const { id } = this.req.params;
    try {
      const verify = await this.service.findIdMoto(id);
      if (verify) {
        const { message, status } = await this.service.updateMoto(id, bodyUpdate);
      
        return this.res.status(status).json(message);
      }
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async deleteById() {
    const { id } = this.req.params;
    try {
      const motoDel = await this.service.findIdMoto(id);
      if (!motoDel) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json();
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcycleController;