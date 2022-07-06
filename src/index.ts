import { app } from "./server";

import { Request, Response, NextFunction } from "express";
import 'express-async-errors'; // https://www.npmjs.com/package/express-async-errors

import { CustomError } from "./errors/CustomError";

import { userRoutes } from "./routes/userRoutes.ts";

app.use("/user", userRoutes);


//* Get errors
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  return error instanceof CustomError 
  ?
  res.status(error.statusCode).send(error.message)
  :
  res.status(500).send(error.message || error.sqlMessage)
});