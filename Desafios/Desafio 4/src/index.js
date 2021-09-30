const express = require("express");
const { Router } = express;

const app = express();
const router = Router();

router.get("/productos", (req, res) => {
  res.send("get ok");
});

router.get("/productos/:id", (req, res) => {
  res.send("get by id ok");
});

router.post("/productos", (req, res) => {
  res.send("post ok");
});

router.put("/productos/:id", (req, res) => {
  res.send("put ok");
});

router.delete("/productos/:id", (req, res) => {
  res.send("delete ok");
});

app.use("/api", router);

app.listen(8080);
