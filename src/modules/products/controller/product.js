import { productService } from "../service/product.js";

class ProductController {
  async findAll (req, res) {
    const products = await productService.findAll();
    res.json(products);
  }

  async findById (req, res) {
    const { id } = req.params;
    const product = await productService.findById(id);
    res.json(product);
  }

  async create (req, res) {
    const { body } = req;
    const product = await productService.create(body);
    res.json(product);
  }

  async update (req, res) {
    const { body } = req;
    const { id } = req.params;
    const product = await productService.update(id, body);
    res.json(product);
  }

  async delete (req, res) {
    const { id } = req.params;
    const product = await productService.delete(id);
    res.json(product);
  }
}

export const productController = new ProductController();
