import { ICadasterUserModel, ICadasterUserModelData } from "../model/ICadasterUserModel";

import { Database } from "../data/database/Database";

export class CadasterUserRepository extends Database implements ICadasterUserModel {
  private TABLE_NAME = "Cadaster";

  async cadaster ( data: ICadasterUserModelData ) {
    await Database.connectionDatabase(this.TABLE_NAME).insert(data);
  };

  async existUser ( email: string ) {
    const [ emailUser ] = await Database.connectionDatabase(this.TABLE_NAME)
    .where("email",  email);

    return  !!emailUser;
  };
};