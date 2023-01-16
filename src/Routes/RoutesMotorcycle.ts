import { Router } from 'express';
import ControllerMotorcycles from '../Controllers/MotorcycleControlle';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new ControllerMotorcycles(req, res, next).createdMotorcycle(),
);

export default routes;
