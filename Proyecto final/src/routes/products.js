import express from "express";
import Container from "../containers/FileContainer";
import isAdmin from "../config/constants";
import persistence from "../config/db";

const { Router } = express;
const router = new Router();
const container = new Container(persistence.fileSystem.path);

router.get("/", async (req, res) => {
  const products = await container.getAll();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await container.getById(req.params.id);
  if (product) res.send(product);
  else res.status(404).json({ error: "producto no encontrado" });
});

router.post("/", async (req, res) => {
  if (!isAdmin) {
    return res.status(403).send({ error: "No autorizado" });
  }

  if (req.body.title) {
    const data = { ...req.body };
    const createdProduct = await container.save(data);

    res.status(201).send(createdProduct);
  } else res.status(400).send({ error: "debe indicar el nombre del producto" });
});

router.put("/:id", async (req, res) => {
  if (!isAdmin) {
    return res.status(403).send({ error: "No autorizado" });
  }

  const product = await container.getById(req.params.id);
  if (!product) res.status(404).json({ error: "producto no encontrado" });

  product.title = req.body.title;
  product.price = req.body.price;

  await container.update(product);

  res.send("producto actualizado");
});

router.delete("/:id", async (req, res) => {
  if (!isAdmin) {
    return res.status(403).send({ error: "No autorizado" });
  }

  const product = await container.getById(req.params.id);

  if (!product) res.status(404).json({ error: "producto no encontrado" });

  container.deleteById(product.id);

  res.send("producto eliminado");
});

export default router;
