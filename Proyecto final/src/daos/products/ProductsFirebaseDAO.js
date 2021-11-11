import FirebaseContainer from "../../containers/FirebaseContainer";

class ProductsFirebaseDAO {
  constructor() {
    this.container = new FirebaseContainer("products");
  }

  async getAll() {
    return await this.container.getAll();
  }

  async getById(id) {
    return await this.container.getById(id);
  }

  async save(product) {
    return await this.container.save(product);
  }

  async deleteById(id) {
    await this.container.deleteById(id);
  }

  async update(product) {
    await this.container.update(product);
  }
}

export default ProductsFirebaseDAO;
