import { CustomError } from "../CustomError";

export class VerifyInformationsRequest extends CustomError {
  constructor () {
    super (
      "Verifique si não estar faltando algúma dessas informações: ( email, password )!.", 
      406
      );
  };
};

export class VerifyIfExistUser extends CustomError {
  constructor ( public email: string ) {
    super (
      `Nenhum usuário com esse email: ( ${email} ), foi encontrado!.`, 
      404
      );
  };
};

export class VerifyIfPasswordUserIsTrue extends CustomError {
  constructor () {
    super (
      `Senha incorreta!.`, 
      406
      );
  };
};