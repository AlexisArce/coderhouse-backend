import constants from "../config/constants";
import CartsFileDAO from "./carts/CartsFileDAO";
import CartsMongoDbDAO from "./carts/CartsMongoDbDAO";
import ProductsFileDAO from "./products/ProductsFileDAO";
import ProductsMongoDbDAO from "./products/ProductsMongoDbDAO";

let cartsDAO;
let productsDAO;

switch (constants.persistenceMethod) {
  case "json":
    cartsDAO = new CartsFileDAO();
    productsDAO = new ProductsFileDAO();
    break;

  case "mongodb":
    cartsDAO = new CartsMongoDbDAO();
    productsDAO = ProductsMongoDbDAO();
    break;

  case "firebase":
    cartsDAO = {};
    productsDAO = {};
    break;

  default:
    cartsDAO = new CartsFileDAO();
    productsDAO = new ProductsFileDAO();
    break;
}

export { cartsDAO, productsDAO };
