import fs from "fs";
import _ from "lodash";
import express from "express";
import Contenedor from "./contenedor";

const app = express();
const contenedor = new Contenedor();

app.get("/productos", async (req, res) => {
  const all = JSON.parse(await contenedor.getAll());

  res.status(200).json(all);
});

app.get("/productoRandom", async (req, res) => {
  const all = JSON.parse(await contenedor.getAll());
  let product;

  if (all) {
    const idRandom = _.random(1, all.length);
    product = all.filter((p) => p.id === idRandom);
  }

  res.status(200).json(product);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
