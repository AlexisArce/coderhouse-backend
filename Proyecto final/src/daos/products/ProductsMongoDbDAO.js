import MongoDbContainer from "../../containers/MongoDbContainer";
import productSchema from "../../models/productSchema";

class ProductsMongoDbDAO {
  constructor() {
    this.container = new MongoDbContainer("Product", productSchema);
  }

  async getAll() {
    return await this.container.getAll();
  }

  async getById(id) {
    return await this.container.getById(id);
  }

  async save(cart) {
    await this.container.save(cart);
  }

  async deleteById(id) {
    await this.container.deleteById(id);
  }

  async updateCart(cart) {
    await this.container.update(cart);
  }
}

export default ProductsMongoDbDAO;
