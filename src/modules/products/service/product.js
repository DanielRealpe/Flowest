import { productRepository } from "../repository/product.js";

class ProductService {
  async findAll () {
    return await productRepository.findAll();
  }

  async findById (id) {
    return await productRepository.findById(id);
  }

  async create (data) {
    return await productRepository.create(data);
  }

  async update (id, data) {
    return await productRepository.update(id, data);
  }

  async delete (id) {
    return await productRepository.delete(id);
  }
}

export const productService = new ProductService();
