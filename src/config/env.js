import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT || "mysql"
  },
  jwt: {
    secret: process.env.JWT_SECRET || "tu_clave_secreta",
    expiresIn: process.env.JWT_EXPIRES_IN || "1h"
  }
};
