import { Sequelize } from "sequelize";
import env from "./env.js";
import logger from "../utils/logger.js";

const sequelize = new Sequelize(env.db.name, env.db.user, env.db.password, {
  host: env.db.host,
  dialect: env.db.dialect,
  logging: (msg) => logger.debug(msg) // redirige logs de SQL a winston
});

sequelize.sync({ force: true }); // opcional

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info("✅ Database connected successfully");
  } catch (error) {
    logger.error(`❌ Database connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default sequelize;
