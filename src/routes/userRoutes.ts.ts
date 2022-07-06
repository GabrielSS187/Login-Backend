import express from "express";

import { CadasterUserControllersModule } from "../modules/CadasterUserControllersModule";

export const userRoutes = express.Router();

userRoutes.post("/cadaster", CadasterUserControllersModule);