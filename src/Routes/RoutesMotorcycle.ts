import { Router } from 'express';
import ControllerMotorcycles from '../Controllers/MotorcycleControlle';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new ControllerMotorcycles(req, res, next).createdMotorcycle(),
);

routes.get(
  '/',
  (req, res, next) => new ControllerMotorcycles(req, res, next).findAllMoto(),
);

routes.get(
  '/:id',
  (req, res, next) => new ControllerMotorcycles(req, res, next).findId(),
);

routes.put(
  '/:id',
  (req, res, next) => new ControllerMotorcycles(req, res, next).updateById(),
);

routes.delete(
  '/:id',
  (req, res, next) => new ControllerMotorcycles(req, res, next).deleteById(),
);

export default routes;
