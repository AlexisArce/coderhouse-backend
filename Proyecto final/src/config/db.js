import * as path from "path";

export default {
  fileSystem: {
    productsPath: path.resolve(__dirname, "../data", "products.json"),
    cartsPath: path.resolve(__dirname, "../data", "carts.json"),
  },
  mongodb: {
    cnxStr:
      "mongodb+srv://admin:09122018carp@clustercoderhouse.vludd.mongodb.net/ecommerceCoderhouse?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
};
