import persistence from "../../config/db";
import FileContainer from "../../containers/FileContainer";

class ProductsFileDAO {
  container = new FileContainer(persistence.fileSystem.productsPath);

  async getAll() {
    return await this.container.getAll();
  }

  async getById(id) {
    return await this.container.getById(id);
  }

  async save(product) {
    await this.container.save(product);
  }

  async deleteById(id) {
    await this.container.deleteById(id);
  }

  async updateCart(product) {
    await this.container.updateCart(product);
  }
}

export default ProductsFileDAO;
