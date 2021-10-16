import express from "express";

const { Router } = express;
const indexRouter = new Router();

indexRouter.get("/", async (req, res) => {
  res.render("main", {});
});

export default indexRouter;
