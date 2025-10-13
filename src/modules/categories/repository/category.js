import Category from "../model/category.js";

class CategoryRepository {
  async create (data) {
    return await Category.create(data);
  }

  async findAll () {
    return await Category.findAll();
  }

  async findById (id) {
    return await Category.findByPk(id);
  }

  async update (id, data) {
    const category = await Category.findByPk(id);
    if (!category) return null;
    return await category.update(data);
  }

  async delete (id) {
    const category = await Category.findByPk(id);
    if (!category) return null;
    await category.destroy();
    return category;
  }
}

const categoryRepository = new CategoryRepository();
export { categoryRepository };
