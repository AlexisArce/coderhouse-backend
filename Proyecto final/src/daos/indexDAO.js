import constants from "../config/constants";
import CartsFileDAO from "./carts/CartsFileDAO";
import ProductsFileDAO from "./products/ProductsFileDAO";

let cartsDAO;
let productsDAO;

switch (constants.persistenceMethod) {
  case "json":
    cartsDAO = new CartsFileDAO();
    productsDAO = new ProductsFileDAO();
    break;
  case "mongodb":
    cartsDAO = {};
    productsDAO = {};
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
