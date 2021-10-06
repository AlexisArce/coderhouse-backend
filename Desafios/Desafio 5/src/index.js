import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/api", userRoutes);

app.listen(3004, () => {
  console.log("server is running on port 3004");
});
