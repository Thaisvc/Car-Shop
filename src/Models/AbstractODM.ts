import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema); // se nao encontrar a model  models[this.modelName] eu a crio model(this.modelName, this.schema)
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async update(_id: string, objCar: Partial<T>): Promise<T | null> { // Partial -> segue uma parete do contrato 
    if (!isValidObjectId(_id)) throw Error('Invalid Mongo id');
  
    return this.model.findByIdAndUpdate( // https://mongoosejs.com/docs/api.html#model_Model-findByIdAndUpdate
      { _id },
      { ...objCar } as UpdateQuery<T>,
      { new: true },
    );
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error('Invalid Mongo id');
    return this.model.findByIdAndDelete(id);
  }
}
  
export default AbstractODM;