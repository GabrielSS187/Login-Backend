import { Request, Response } from "express";

import {  CadasterUserRepository } from "../repositories/CadasterUserRepository";
import { CadasterUserCasesModule } from "./CadasterUserCasesModule";

export const CadasterUserControllersModule = async ( req: Request, res: Response ): Promise<{}> => {
  const { name, email, password, role } = req.body;

  const cadasterUserRepository = new CadasterUserRepository();

  const cadasterUserCasesModule = new CadasterUserCasesModule(
    cadasterUserRepository
  );

  await cadasterUserCasesModule.cadasterUser({
    name,
    email,
    password,
    role
  });

  return res.status(201).json({ message: `Usuário: ${name}. Cadastrado com sucesso.` });
};