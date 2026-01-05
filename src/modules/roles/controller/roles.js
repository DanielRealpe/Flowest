import { roleService } from "../service/roles.js";
import logger from "../../../utils/logger.js";

class RoleController {
  async createRole(req, res) {
    try {
      const role = await roleService.createRole(req.body);
      logger.info(`Rol creado: ${role.nombre}`);
      res.status(201).json(role);
    } catch (error) {
      logger.error(`Error al crear rol: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  async getAllRoles(req, res) {
    try {
      const roles = await roleService.getAllRoles();
      res.status(200).json(roles);
    } catch (error) {
      logger.error(`Error al obtener roles: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  }

  async getRoleById(req, res) {
    try {
      const role = await roleService.getRoleById(req.params.id);
      if (!role) {
        res.status(404).json({ error: "Rol no encontrado" });
      } else {
        res.status(200).json(role);
      }
    } catch (error) {
      logger.error(`Error al obtener rol: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  }

  async updateRole(req, res) {
    try {
      const role = await roleService.updateRole(req.params.id, req.body);
      if (!role) {
        res.status(404).json({ error: "Rol no encontrado" });
      } else {
        logger.info(`Rol actualizado: ${role.nombre}`);
        res.status(200).json(role);
      }
    } catch (error) {
      logger.error(`Error al actualizar rol: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  async deleteRole(req, res) {
    try {
      const deleted = await roleService.deleteRole(req.params.id);
      if (!deleted) {
        res.status(404).json({ error: "Rol no encontrado" });
      } else {
        logger.info(`Rol eliminado: ID ${req.params.id}`);
        res.status(204).send();
      }
    } catch (error) {
      logger.error(`Error al eliminar rol: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }
}

const roleController = new RoleController();
export { roleController };
