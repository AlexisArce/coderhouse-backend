import MongoDbContainer from "../../containers/MongoDbContainer";
import cartSchema from "../../models/cartSchema";

class CartsMongoDbDAO {
  constructor() {
    this.container = new MongoDbContainer("Cart", cartSchema);
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

export default CartsMongoDbDAO;
