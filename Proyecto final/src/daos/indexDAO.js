import constants from "../config/constants";

let cartsDAO;
let productsDAO;

switch (constants.persistenceMethod) {
  case "json":
    const { default: CartsFileDAO } = await import("./carts/CartsFileDAO");
    const { default: ProductsFileDAO } = await import(
      "./products/ProductsFileDAO"
    );

    cartsDAO = new CartsFileDAO();
    productsDAO = new ProductsFileDAO();

    break;

  case "mongodb":
    const { default: CartsMongoDbDAO } = await import(
      "./carts/CartsMongoDbDAO"
    );
    const { default: ProductsMongoDbDAO } = await import(
      "./products/ProductsMongoDbDAO"
    );

    cartsDAO = new CartsMongoDbDAO();
    productsDAO = new ProductsMongoDbDAO();

    break;

  case "firebase":
    const { default: CartsFirebaseDAO } = await import(
      "./carts/CartsFirebaseDAO"
    );
    const { default: ProductsFirebaseDAO } = await import(
      "./products/ProductsFirebaseDAO"
    );

    cartsDAO = new CartsFirebaseDAO();
    productsDAO = new ProductsFirebaseDAO();

    break;

  default:
    cartsDAO = new CartsFileDAO();
    productsDAO = new ProductsFileDAO();

    break;
}

export { cartsDAO, productsDAO };
