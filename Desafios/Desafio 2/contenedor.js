import fs from "fs";
import _ from "lodash";

class Contenedor {
  save = async (object) => {
    try {
      const all = JSON.parse((await this.getAll()) || "[]");
      const lastObjectAdded = _.maxBy(all, "id");

      let newId = 1;
      if (lastObjectAdded) newId = (lastObjectAdded.id || 0) + 1;

      object.id = newId;
      all.push(object);
      const info = JSON.stringify(all, null, 2);

      await fs.promises.writeFile("./productos.txt", info, "utf-8");

      return newId;
    } catch (error) {
      console.error(error);
    }
  };

  getById = async (id) => {
    const all = JSON.parse(await this.getAll());

    return all.find((o) => o.id == id);
  };

  getAll = async () => {
    try {
      return await fs.promises.readFile("./productos.txt", "utf-8");
    } catch (error) {
      console.error(error);
    }
  };

  deleteById = async (id) => {
    try {
      const all = JSON.parse((await this.getAll()) || "[]"); 
      const filteredProducts = all.filter(p => p.id != id);
      const info = JSON.stringify(filteredProducts, null, 2);

      await fs.promises.writeFile("./productos.txt", info, "utf-8");

    } catch (error) {
      console.error(error);
    }
  }

  deleteAll = async () => {
    try {
      const info = JSON.stringify([]);
      await fs.promises.writeFile("./productos.txt", info, "utf-8");
    } catch (error) {
      console.error(error);
    }
  }
}

export default Contenedor;
