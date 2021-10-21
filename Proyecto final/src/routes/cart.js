import express from "express";
import Container from "../dataAccess/container";
import * as path from "path";

const { Router } = express;
const router = new Router();
const container = new Container(
  path.resolve(__dirname, "../data", "carts.json")
);

router.get("/", async (req, res) => {
  const carts = await container.getAll();
  res.json(carts);
});

router.get("/:id", async (req, res) => {
  const cart = await container.getById(req.params.id);
  if (cart) res.send(cart);
  else res.status(404).json({ error: "carrito no encontrado" });
});

router.post("/", async (req, res) => {
  const data = { ...req.body };
  const createdCart = await container.save(data);

  res.status(201).send(createdCart);
});

router.delete("/:id", async (req, res) => {
  const cart = await container.getById(req.params.id);

  if (!cart) res.status(404).json({ error: "carrito no encontrado" });

  container.deleteById(cart.id);

  res.send("carrito eliminado");
});

router.post("/:id/productos", async (req, res) => {
  const cart = await container.getById(req.params.id);

  if (!cart) res.status(404).json({ error: "carrito no encontrado" });

  cart.products = req.body.products;
  await container.updateCart(cart);

  res.status(201);
});

router.delete("/:id/productos/:id_prod", async (req, res) => {
  const cart = await container.getById(req.params.id);
  if (!cart) res.status(404).json({ error: "carrito no encontrado" });

  const product = cart.products.find((p) => p.id == req.params.id_prod);
  if (!product) {
    res.status(404).json({ error: "producto no encontrado en el carrito" });
  }

  const filteredProducts = cart.products.filter(
    (p) => p.id != req.params.id_prod
  );
  cart.products = filteredProducts;

  await container.updateCart(data);

  res.send("producto eliminado del carrito");
});

export default router;
