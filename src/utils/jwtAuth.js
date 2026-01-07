import jwt from "jsonwebtoken";
import env from "../config/env.js";

const SECRET_KEY = env.jwt.secret;
const EXPIRES_IN = env.jwt.expiresIn;

export function generateToken (payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
}
