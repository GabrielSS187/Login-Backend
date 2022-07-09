import { ICadasterUserModel } from "../model/ICadasterUserModel";

import { generateId } from "../utils/generate-Id";
import { validateEmail } from "../utils/validate-email";
import { checkSpace } from "../utils/check-space";

import { 
  VerifyInformationsRequest,
  VerifyIfUserExist,
  VerifyEmail,
  VerifyPasswordQuantityLine,
  VerifySpacesPassword
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

    if ( !validateEmail(email) ) throw new VerifyEmail(email);

    if ( checkSpace(password) ) throw new VerifySpacesPassword();

    if ( password.length < 8 ) {
      throw new VerifyPasswordQuantityLine(password);
    };

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