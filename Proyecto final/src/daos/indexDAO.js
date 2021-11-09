import constants from "../config/constants";
import CartsFileDAO from "./carts/CartsFileDAO";

let productsDAO;
let cartsDAO;

console.log(constants);

switch (constants.persistenceMethod) {
  case "json":
    cartsDAO = new CartsFileDAO();
}

export { productsDAO, cartsDAO };
