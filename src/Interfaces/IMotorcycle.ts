import IVehicle from './IVehicle';

/* enum Category {
  STREET = 'Street',
  CUSTOM = 'Custom',
  TRIAL = 'Trail',
} */

export default interface IMotorcycle extends IVehicle {
  category: string,
  engineCapacity: number
}
