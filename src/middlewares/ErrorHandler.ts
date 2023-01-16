/* import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(error: Error, _req: Request, res: Response,next: NextFunction,
    
  ) {
    res.status(500).json({ message: error.message });
    next();
  }
}

export default ErrorHandler; */
// para usar na camada de service um objeto com message e status
import { NextFunction, Request, Response } from 'express';
import HttpException from '../Util/http.exception';

class ErrorHandler {
  public static handle(err: Error, _req: Request, res: Response, _next: NextFunction) {
    const { status, message } = err as HttpException;
    if (status) {
      return res.status(status || 500).json({ message });
    }
  }
}

export default ErrorHandler;