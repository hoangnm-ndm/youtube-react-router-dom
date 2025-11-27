export enum RoleEnum {
  SUPER_ADMIN = "superAdmin",
  ADMIN = "admin",
  CLIENT = "client",
}

export interface User {
  id: string;
  fullname: string;
  email: string;
  role: RoleEnum;
}
