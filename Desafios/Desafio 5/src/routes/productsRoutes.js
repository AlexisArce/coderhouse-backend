import express from "express";
import productsApi from "../apis/products";

const { Router } = express;
const productsRoutes = new Router();

productsRoutes.get("/", async (req, res) => {
  try {
    const response = await productsApi.get("/");
    res.render("index", { products: response.data });
  } catch (error) {
    console.log(error);
    res.render("index", { products: [] });
  }
});

export default productsRoutes;
