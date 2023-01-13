import { Router } from 'express';
import ControllerCar from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new ControllerCar(req, res, next).CreateCar(),
);

export default routes;