import { CustomError } from "../CustomError";

export class VerifyInformationsRequest extends CustomError {
  constructor () {
    super (
      "Verifique si uma dessas informações não estão faltando: ( name, email, password )!", 
        406
      )
  };
};

export class VerifyEmail extends CustomError {
  constructor ( public email: string ) {
    super (
      `O email passado: ( ${email} ), não segue o padrão correto!. Exemplo: ( usuario@gmail.com ).`, 
        406
      )
  };
};

export class VerifyIfUserExist extends CustomError {
  constructor ( public email: string ) {
    super (
      `Já existe um usuário cadastrado com esse email passado: ( ${email} )!.`, 
        409
      )
  };
};

export class VerifySpacesPassword extends CustomError {
  constructor () {
    super (
      `A senha passada não pode conter espaços em branco!.`, 
        406
      )
  };
};

export class VerifyPasswordQuantityLine extends CustomError {
  constructor ( public password: string ) {
    super (
      `A sua senha não pode ser menor que 8 caracteres. Sua senha possui: ( ${password.length} )!.`, 
        406
      )
  };
};