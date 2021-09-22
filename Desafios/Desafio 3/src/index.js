const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ name: "El pity", surname: "Martinez" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
