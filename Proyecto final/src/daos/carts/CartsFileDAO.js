import { v4 as uuidv4 } from "uuid";
import * as path from "path";
import FileContainer from "../../containers/FileContainer";

class CartsFileDAO {
  container = new FileContainer(
    path.resolve(__dirname, "../data", "carts.json")
  );

  async getAll() {
    return await this.container.getAll();
  }

  async getById(id) {
    return await this.container.getById(id);
  }

  async save(cart) {
    cart.id = cart.id || uuidv4();
    await container.save(cart);
  }

  async deleteById(id) {
    await container.deleteById(id);
  }

  async updateCart(cart) {
    await container.updateCart(cart);
  }
}

export default CartsFileDAO;
