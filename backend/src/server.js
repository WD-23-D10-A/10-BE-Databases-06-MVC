const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/routes");
const cors = require("cors");

const server = express();

server.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/articlesdb");

server.use(express.json());

server.use("/api/articles", articleRouter);

server.listen(3001, () => {
  console.log("server is running on port 3001");
});
