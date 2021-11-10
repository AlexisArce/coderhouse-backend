import mongoose from "mongoose";
import { asPOJO, renameField, removeField } from "../utils/objectUtils.js";
import persistence from "../config/db";

await mongoose.connect(persistence.mongodb.cnxStr, persistence.mongodb.options);

class MongoDbContainer {
  constructor(modelName, schema) {
    this.collection = mongoose.model(modelName, schema);
  }

  async save(object) {
    try {
      let doc = await this.collection.create(object);
      doc = asPOJO(doc);
      renameField(doc, "_id", "id");
      removeField(doc, "__v");
      return doc;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async update(object) {
    try {
      renameField(object, "id", "_id");
      const { n, nModified } = await this.collection.replaceOne(
        { _id: object._id },
        object
      );
      if (n == 0 || nModified == 0) {
        throw new Error("Error al actualizar: no encontrado");
      } else {
        renameField(object, "_id", "id");
        removeField(object, "__v");
        return asPOJO(object);
      }
    } catch (error) {
      throw new Error(`Error al actualizar: ${error}`);
    }
  }

  async getById(id) {
    try {
      const docs = await this.collection.find({ _id: id }, { __v: 0 });
      if (docs.length == 0) {
        return null;
      } else {
        const result = renameField(asPOJO(docs[0]), "_id", "id");
        return result;
      }
    } catch (error) {
      console.error(`Error al listar por id: ${error}`);
      return null;
    }
  }

  async getAll() {
    try {
      let docs = await this.collection.find({}, { __v: 0 }).lean();
      docs = docs.map(asPOJO);
      docs = docs.map((d) => renameField(d, "_id", "id"));
      return docs;
    } catch (error) {
      throw new Error(`Error al listar todo: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      const { n, nDeleted } = await this.collection.deleteOne({ _id: id });
      if (n == 0 || nDeleted == 0) {
        throw new Error("Error al borrar: no encontrado");
      }
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }

  async deleteAll() {
    try {
      await this.collection.deleteMany({});
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }
}

export default MongoDbContainer;
