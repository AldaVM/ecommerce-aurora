import dotenv from "dotenv";

dotenv.config();

export default {
  appSettings: {
    port: (process.env.PORT as string) || 8002,
    env: (process.env.NODE_ENV as string) || "development",
  },
  db: {
    username: (process.env.DB_USERNAME as string) || "postgres",
    password: (process.env.DB_PASSWORD as string) || "postgres",
    database: (process.env.DB_NAME as string) || "test",
    host: (process.env.DB_HOSTNAME as string) || "127.0.0.1",
    port: 5432,
    logging: false,
  },
  encrypt: {
    rounds: 10,
  },
  auth: {
    jwtSecret: process.env.SECRET_AUTH as string,
  },
};
