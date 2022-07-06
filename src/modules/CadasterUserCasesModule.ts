import { ICadasterUserModel } from "../model/ICadasterUserModel";

import { generateId } from "../services/generate-Id";

import { 
  VerifyInformationsRequest,
  VerifyIfUserExist
 } from "../errors/UserErros/CadasterUserErrors";

enum Role {
  NORMAL = "normal",
  ADMIN = "admin"
};

interface ICadasterUserRequestData {
  name: string;
  email: string;
  password: string;
  role?:  Role;
};

export class CadasterUserCasesModule {
  constructor (
    private readonly cadasterUserModel: ICadasterUserModel
  ) {};

  async cadasterUser ( request: ICadasterUserRequestData ) {
    let { name, email, password, role } = request;

    //* Errors ==================================================
    if ( !name || !email || !password ) throw new VerifyInformationsRequest();

    if ( !role ) role = Role.NORMAL;

    const user = await this.cadasterUserModel.existUser(email);

    if ( user ) throw new VerifyIfUserExist(email);
    //* =========================================================

    const id = generateId();

    await this.cadasterUserModel.cadaster({
      id,
      name,
      email,
      password,
      role
    });
  };
};