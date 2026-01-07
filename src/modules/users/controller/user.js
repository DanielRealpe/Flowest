import { userService } from "../service/user.js";
import logger from "../../../utils/logger.js";

class UserController {
  async createUser (req, res) {
    try {
      const user = await userService.createUser(req.body);
      logger.info(`Usuario creado: ${user.nombre}`);
      res.status(201).json(user);
    } catch (error) {
      logger.error(`Error al crear usuario: ${error}`);
      res.status(400).json({ error: error.message });
    }
  }

  async getAllUsers (req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      logger.error(`Error al obtener usuarios: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById (req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      logger.error(`Error al obtener usuario: ${error.message}`);
      res.status(404).json({ error: error.message });
    }
  }

  async updateUser (req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      logger.info(`Usuario actualizado: ${user.name}`);
      res.status(200).json(user);
    } catch (error) {
      logger.error(`Error al actualizar usuario: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser (req, res) {
    try {
      const user = await userService.deleteUser(req.params.id);
      logger.info(`Usuario eliminado: ${user?.name}`);
      res.status(200).json(user);
    } catch (error) {
      logger.error(`Error al eliminar usuario: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  async login (req, res) {
    try {
      const user = await userService.login(req.body);
      res.status(200).json(user);
    } catch (error) {
      logger.error(`Error al iniciar sesión: ${error.message}`);
      res.status(401).json({ error: error.message });
    }
  }
}

const userController = new UserController();
export { userController };
