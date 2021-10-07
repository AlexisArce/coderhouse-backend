import express from "express";
import productsRoutes from "./routes/productsRoutes";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/productos", productsRoutes);

app.listen(3004, () => {
  console.log("server is running on port 3004");
});
