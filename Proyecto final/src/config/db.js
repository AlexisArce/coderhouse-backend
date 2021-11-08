import * as path from "path";

export default {
  fileSystem: {
    path: path.resolve(__dirname, "../data", "products.json"),
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
