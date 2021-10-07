import express from "express";
import productsApi from "../apis/products";

const { Router } = express;
const productsRoutes = new Router();

productsRoutes.get("/", async (req, res) => {
  const response = await productsApi.get("/");

  res.render("index", { products: response.data });
});

export default productsRoutes;
