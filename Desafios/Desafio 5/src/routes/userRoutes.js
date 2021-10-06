import express from "express";

const { Router } = express;
const userRoutes = new Router();

userRoutes.get("/", (req, res) => {
  res.render("index", {});
});

export default userRoutes;
