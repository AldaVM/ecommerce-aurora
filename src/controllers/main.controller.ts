import { Request, Response } from "express";

export function getMainPage(req: Request, res: Response) {
  return res.status(200).json({
    message: "Bienvenido API/GYM",
  });
}

export function getHelpPage(req: Request, res: Response) {
  return res.status(200).json({
    message: "Bienvenido page help",
  });
}

export function getError(req: Request, res: Response) {
  try {
    const test = 2;
    if (test > 1) {
      throw new Error("Just Error");
    }
    res.send();
  } catch (error) {
    throw error;
  }
}
