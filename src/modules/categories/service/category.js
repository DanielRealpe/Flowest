import { categoryRepository } from "../repository/category.js";

class CategoryService {
  async createCategory(data) {
    // Validación: nombre requerido
    if (!data.nombre || typeof data.nombre !== "string") {
      throw new Error(
        "El nombre de la categoría es obligatorio y debe ser texto."
      );
    }

    // Validación: nombre único
    const exists = await categoryRepository.findAll();
    if (exists.some((cat) => cat.nombre === data.nombre)) {
      throw new Error("El nombre de la categoría ya existe.");
    }

    return await categoryRepository.create(data);
  }

  async getAllCategories() {
    return await categoryRepository.findAll();
  }

  async getCategoryById(id) {
    if (!id) throw new Error("ID requerido.");
    const category = await categoryRepository.findById(id);
    if (!category) throw new Error("Categoría no encontrada.");
    return category;
  }

  async updateCategory(data) {
    if (!data.id) throw new Error("ID requerido.");
    if (data.nombre) {
      // Validación: nombre único
      const exists = await categoryRepository.findAll();
      if (
        exists.some((cat) => cat.nombre === data.nombre && cat.id !== data.id)
      ) {
        throw new Error("El nombre de la categoría ya existe.");
      }
    }
    const updated = await categoryRepository.update(data.id, data);
    if (!updated) throw new Error("Categoría no encontrada.");
    return updated;
  }

  async deleteCategory(id) {
    if (!id) throw new Error("ID requerido.");
    const deleted = await categoryRepository.delete(id);
    if (!deleted) throw new Error("Categoría no encontrada.");
    return deleted;
  }
}

const categoryService = new CategoryService();
export { categoryService };
