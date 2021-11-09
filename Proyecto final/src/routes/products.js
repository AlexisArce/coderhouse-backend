import express from "express";
import { productsDAO } from "../daos/indexDAO";
import constants from "../config/constants";

const { Router } = express;
const router = new Router();

router.get("/", async (req, res) => {
  const products = await productsDAO.getAll();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await productsDAO.getById(req.params.id);
  if (product) res.send(product);
  else res.status(404).json({ error: "producto no encontrado" });
});

router.post("/", async (req, res) => {
  if (!constants.isAdmin) {
    return res.status(403).send({ error: "No autorizado" });
  }

  if (req.body.title) {
    const data = { ...req.body };
    const createdProduct = await productsDAO.save(data);

    res.status(201).send(createdProduct);
  } else res.status(400).send({ error: "debe indicar el nombre del producto" });
});

router.put("/:id", async (req, res) => {
  if (!constants.isAdmin) {
    return res.status(403).send({ error: "No autorizado" });
  }

  const product = await productsDAO.getById(req.params.id);
  if (!product) res.status(404).json({ error: "producto no encontrado" });

  product.title = req.body.title;
  product.price = req.body.price;

  await productsDAO.update(product);

  res.send("producto actualizado");
});

router.delete("/:id", async (req, res) => {
  if (!constants.isAdmin) {
    return res.status(403).send({ error: "No autorizado" });
  }

  const product = await productsDAO.getById(req.params.id);

  if (!product) res.status(404).json({ error: "producto no encontrado" });

  productsDAO.deleteById(product.id);

  res.send("producto eliminado");
});

export default router;
