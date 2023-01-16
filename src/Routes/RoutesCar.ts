import { Router } from 'express';
import ControllerCar from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new ControllerCar(req, res, next).CreateCar(),
);

routes.get(
  '/',
  (req, res, next) => new ControllerCar(req, res, next).findCar(),
);

routes.get(
  '/:id',
  (req, res, next) => new ControllerCar(req, res, next).idFindCar(),
);

routes.put(
  '/:id',
  (req, res, next) => new ControllerCar(req, res, next).updateCar(),
);

export default routes;