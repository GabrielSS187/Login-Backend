enum Role {
  NORMAL = "normal",
  ADMIN = "admin"
};

export interface ICadasterUserModelData {
  id: string
  name: string;
  email: string;
  password: string;
  role: Role;
};

export  interface ICadasterUserModel {
  cadaster: ( data: ICadasterUserModelData ) => Promise<void>;
  existUser: ( email: string ) => Promise<boolean>;
};