import { NextFunction, Request, Response } from "express";

export interface IError extends Error {
  status?: number;
}

export function handleErrorGeneric(
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message,
  });
}

export function handleErrorRoutes(
  ftn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return ftn(req, res, next);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const err: IError = new Error(error.message);
        err.status = 500;
        next(err);
      }
      next(error);
    }
  };
}

export function handleNotFoundRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const err: IError = new Error("Route not found go to /v1/api/help");
  err.status = 404;
  next(err);
}
