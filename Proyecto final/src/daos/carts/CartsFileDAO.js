import { v4 as uuidv4 } from "uuid";
import FileContainer from "../../containers/FileContainer";
import persistence from "../../config/db";

class CartsFileDAO {
  constructor() {
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
    return await this.container.save(cart);
  }

  async deleteById(id) {
    await this.container.deleteById(id);
  }

  async update(cart) {
    await this.container.update(cart);
  }
}

export default CartsFileDAO;
