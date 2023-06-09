import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({ // crio o schema para o AbstractODM
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'car');
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findId(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }
}

export default CarODM;
