import admin from "firebase-admin";
import persistence from "../config/db";

admin.initializeApp({
  credential: admin.credential.cert(persistence.firebase),
});

const db = admin.firestore();

class FirebaseContainer {
  constructor(collectionName) {
    this.collection = db.collection(collectionName);
  }

  async save(object) {
    try {
      const savedObject = await this.collection.add(object);
      return { ...object, id: savedObject.id };
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async update(object) {
    try {
      const updatedObject = await this.collection.doc(object.id).set(object);
      return updatedObject;
    } catch (error) {
      throw new Error(`Error al actualizar: ${error}`);
    }
  }

  async getById(id) {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        return null;
      } else {
        const data = doc.data();
        return { ...data, id };
      }
    } catch (error) {
      throw new Error(`Error al listar por id: ${error}`);
    }
  }

  async getAll() {
    try {
      const result = [];
      const snapshot = await this.collection.get();
      snapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      return result;
    } catch (error) {
      throw new Error(`Error al listar todo: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      const item = await this.collection.doc(id).delete();
      return item;
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }

  async deleteAll() {
    try {
      this.collection
        .get()
        .toPromise()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }
}

export default FirebaseContainer;
