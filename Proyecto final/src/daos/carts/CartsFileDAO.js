import { v4 as uuidv4 } from "uuid";
import FileContainer from "../../containers/FileContainer";
import persistence from "../../config/db";

class CartsFileDAO {
  constructor() {
    //Todo: dependency injection
    this.container = new FileContainer(persistence.fileSystem.cartsPath);
  }

  async getAll() {
    return await this.container.getAll();
  }

  async getById(id) {
    return await this.container.getById(id);
  }

  async save(cart) {
    cart.id = cart.id || uuidv4();
    await this.container.save(cart);
  }

  async deleteById(id) {
    await this.container.deleteById(id);
  }

  async updateCart(cart) {
    await this.container.updateCart(cart);
  }
}

export default CartsFileDAO;
