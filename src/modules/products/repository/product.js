import Product from "../model/product.js";

class ProductRepository {
  async findAll () {
    return await Product.findAll();
  }

  async findById (id) {
    return await Product.findByPk(id);
  }

  async create (data) {
    return await Product.create(data);
  }

  async update (id, data) {
    const product = await Product.findByPk(id);
    if (!product) return null;
    return await product.update(data);
  }

  async delete (id) {
    const product = await Product.findByPk(id);
    if (!product) return null;
    await product.destroy();
    return product;
  }

  async deleteByCategory (categoryId) {
    return await Product.destroy({ where: { categoryId } });
  }
}

export const productRepository = new ProductRepository();
