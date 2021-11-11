import FirebaseContainer from "../../containers/FirebaseContainer";

class CartsFirebaseDAO {
  constructor() {
    this.container = new FirebaseContainer("carts");
  }

  async getAll() {
    return await this.container.getAll();
  }

  async getById(id) {
    return await this.container.getById(id);
  }

  async save(cart) {
    return await this.container.save(cart);
  }

  async deleteById(id) {
    await this.container.deleteById(id);
  }

  async update(cart) {
    await this.container.update(cart);
  }
}

export default CartsFirebaseDAO;
