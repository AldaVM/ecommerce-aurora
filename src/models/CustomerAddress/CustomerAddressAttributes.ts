import { Optional } from "sequelize/types";

export interface CustomerAddressAttributes {
  addressId: number;
  customerId: number;
  addressDescription: string;
  addressReference: string;
  suite: string;
  city: string;
  country: string;
  district: string;
  zipCode: string;
}

export interface CustomerAddressAttributesOutput {
  addressId: number;
  customerId: number;
  addressDescription: string;
  addressReference: string;
  suite: string;
  city: string;
  country: string;
  district: string;
  zipCode: string;
}

export type CustomerAddressInput = Optional<
  CustomerAddressAttributes,
  "addressId"
>;
export type CustomerAddressOutput = Required<CustomerAddressAttributesOutput>;
