import { Optional } from "sequelize";

export interface UserAttributes {
  userId: number;
  customerId?: number;
  username: string;
  userpassword: string;
  lastSession?: Date;
  isEnabled?: boolean;
}

export interface UserAttributesOutput {
  userId: number;
  customerId: number;
  username: string;
  userpassword: string;
  lastSession: Date;
  isEnabled: boolean;
}

export interface UserAuth {
  username: string;
  userpassword: string;
}

export type UserInput = Optional<UserAttributes, "userId">;
export type UserOutput = Required<UserAttributes>;
