import express from 'express';
import carRouter from './RoutesCar';
import motoRouter from './RoutesMotorcycle';

const routes = express.Router();

routes.use('/cars', carRouter);
routes.use('/motorcycles', motoRouter);

export default routes;