import jwt from "jsonwebtoken";
import env from "../config/env.js";

const SECRET = env.jwt.secret;

export function authenticateToken (req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Espera formato "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Token requerido" });
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });
    req.user = user;
    next();
  });
}
