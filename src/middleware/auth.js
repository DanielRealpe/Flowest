import jwt from "jsonwebtoken";
import env from "../config/env.js";
import { rolePermissionService } from "../modules/rolePermission/service/rolePermission.js";

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

export function verifyPermission (requiredPermission) {
  // authenticateToken;
  return async (req, res, next) => {
    const userRoleId = req.user.role;
    try {
      const rolePermissions = await rolePermissionService.getPermissionsByRole(userRoleId);
      const userPermissions = rolePermissions.map(rp => rp.name);
      if (!userPermissions.includes(requiredPermission)) {
        return res.status(403).json({ message: "Permiso denegado" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Error al verificar permisos" });
    }

    next();
  };
}
