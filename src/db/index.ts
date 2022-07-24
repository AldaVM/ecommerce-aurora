import { Sequelize } from "sequelize";

import config from "../config";

const sequelizeConnection = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    dialect: "postgres",
    host: config.db.host,
    port: config.db.port,
    logging: config.db.logging,
  }
);

export default sequelizeConnection;
