export enum RoleEnum {
  SUPER_ADMIN = "superAdmin",
  ADMIN = "admin",
  CLIENT = "client",
}

export interface User {
  id: string;
  fullname: string;
  email: string;
  password: string;
  role?: RoleEnum;
}

export type UserCreatePayload = Omit<User, "id">;

export type UserUpdatePayload = Partial<Omit<UserCreatePayload, "id">>;

export interface UserLoginPayload {
  email: string;
  password: string;
}
