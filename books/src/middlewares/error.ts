import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/httpException';

const httpErrorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  // console.log("httpErrorMiddleware")
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;