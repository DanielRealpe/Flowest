import env from "../src/config/env.js";
import { connectDB } from "../src/config/db.js";
import app from "./app.js";
import logger from "../src/utils/logger.js";

await connectDB();

app.listen(env.port, () => {
  logger.info(`🚀 Server running on port ${env.port}`);
});
