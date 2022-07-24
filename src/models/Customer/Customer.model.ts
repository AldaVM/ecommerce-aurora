import Sequelize, { DataTypes, Model } from "sequelize";

import sequelizeConnection from "../../db";
import {
  CustomerAttributes,
  CustomerInput,
  gendersTypes,
} from "./CustomerAttributes";

export class Customer
  extends Model<CustomerAttributes, CustomerInput>
  implements CustomerAttributes
{
  public customerId!: number;
  public customerFirtsName!: string;
  public customerLastName!: string;
  public customerFullName!: string;
  public customerDoc!: string;
  public customerPhone!: string;
  public customerAge!: number;
  public customerGender!: gendersTypes;
  public customerEmail!: string;
  public customerAddress!: string;
  public customerBirthDay!: Date;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Customer.init(
  {
    customerId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerFirtsName: {
      type: DataTypes.STRING,
    },
    customerLastName: {
      type: DataTypes.STRING,
    },
    customerFullName: {
      type: DataTypes.STRING,
    },
    customerDoc: {
      type: DataTypes.STRING,
    },
    customerPhone: {
      type: DataTypes.STRING,
    },
    customerAge: {
      type: DataTypes.INTEGER,
    },
    customerGender: {
      type: DataTypes.STRING,
    },
    customerEmail: {
      type: DataTypes.STRING,
    },
    customerAddress: {
      type: DataTypes.STRING,
    },
    customerBirthDay: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    sequelize: sequelizeConnection,
    modelName: "customers",
    paranoid: true,
  }
);

export default Customer;
