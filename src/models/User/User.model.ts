import moment from "moment";
import Sequelize, { DataTypes, Model } from "sequelize";

import sequelizeConnection from "../../db";
import { hashPassword } from "../../utils/validations/password";
import { UserAttributes, UserInput } from "./UserAttributes";

export class User
  extends Model<UserAttributes, UserInput>
  implements UserAttributes
{
  public userId!: number;
  public customerId!: number;
  public username!: string;
  public userpassword!: string;
  public lastSession!: Date;
  public isEnabled!: boolean;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerId: {
      type: Sequelize.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    userpassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    lastSession: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("lastSession")).format(
          "YYYY-MM-DD h:mm:ss"
        );
      },
      defaultValue: moment(),
    },
  },
  {
    timestamps: false,
    sequelize: sequelizeConnection,
    modelName: "users",
    paranoid: true,
  }
);

User.beforeCreate("Users", async (user: User) => {
  const currentPassword: string = user.userpassword;

  const hashedPassword = await hashPassword(currentPassword);

  if (hashedPassword.isHash) {
    user.userpassword = hashedPassword.password;
  }
});

export default User;
