// app.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const articlesRouter = require("./routes/routes");
const app = express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/articlesdb");

app.use(express.json());

app.use("/api/articles", articlesRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
