import { categoryService } from "../service/category.js";
import logger from "../../../utils/logger.js";

class CategoryController {
  async createCategory (req, res) {
    try {
      const category = await categoryService.createCategory(req.body);
      logger.info(`Categoría creada: ${category.nombre}`);
      res.status(201).json(category);
    } catch (error) {
      logger.error(`Error al crear categoría: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  async getAllCategories (req, res) {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      logger.error(`Error al obtener categorías: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  }

  async getCategoryById (req, res) {
    try {
      const category = await categoryService.getCategoryById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      logger.error(`Error al obtener categoría: ${error.message}`);
      res.status(404).json({ error: error.message });
    }
  }

  async updateCategory (req, res) {
    try {
      const category = await categoryService.updateCategory(
        req.params.id,
        req.body
      );
      logger.info(`Categoría actualizada: ${category.nombre}`);
      res.status(200).json(category);
    } catch (error) {
      logger.error(`Error al actualizar categoría: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  async deleteCategory (req, res) {
    try {
      await categoryService.deleteCategory(req.params.id);
      logger.info(`Categoría eliminada: ID ${req.params.id}`);
      res.status(204).send();
    } catch (error) {
      logger.error(`Error al eliminar categoría: ${error.message}`);
      res.status(404).json({ error: error.message });
    }
  }
}

const categoryController = new CategoryController();
export default categoryController;
