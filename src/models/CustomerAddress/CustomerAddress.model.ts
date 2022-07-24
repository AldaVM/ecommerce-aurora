import Sequelize, { DataTypes, Model } from "sequelize";

import sequelizeConnection from "../../db";
import {
  CustomerAddressAttributes,
  CustomerAddressInput,
} from "./CustomerAddressAttributes";

export class CustomerAddress
  extends Model<CustomerAddressAttributes, CustomerAddressInput>
  implements CustomerAddressAttributes
{
  public addressId!: number;
  public customerId!: number;
  public addressDescription!: string;
  public addressReference!: string;
  public suite!: string;
  public city!: string;
  public country!: string;
  public district!: string;
  public zipCode!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

CustomerAddress.init(
  {
    addressId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerId: {
      type: Sequelize.INTEGER,
    },
    addressDescription: {
      type: DataTypes.STRING,
    },
    addressReference: {
      type: DataTypes.STRING,
    },
    suite: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    district: {
      type: DataTypes.STRING,
    },
    zipCode: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export default CustomerAddress;
