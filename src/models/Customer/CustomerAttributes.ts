import { Optional } from "sequelize";

export enum gendersTypes {
  "male" = "male",
  "female" = "female",
}

export interface CustomerAttributes {
  customerId: number;
  customerFirtsName?: string;
  customerLastName?: string;
  customerFullName?: string;
  customerDoc?: string;
  customerPhone?: string;
  customerAge?: number;
  customerGender?: gendersTypes;
  customerEmail?: string;
  customerAddress?: string;
  customerBirthDay?: Date;
}

export interface CustomerAttributesOutput {
  customerId: number;
  customerFirtsName: string;
  customerLastName: string;
  customerFullName: string;
  customerDoc: string;
  customerPhone: string;
  customerAge: number;
  customerGender: gendersTypes;
  customerEmail: string;
  customerAddress: string;
  customerBirthDay: Date;
}

export type CustomerInput = Optional<CustomerAttributes, "customerId">;
export type CustomerOutput = Required<CustomerAttributesOutput>;
