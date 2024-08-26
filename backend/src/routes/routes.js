const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articlesController");
// get all articles
router.get("/", articlesController.getArticles);

// create new article
router.post("/", articlesController.createArticle);

// articles by id
router.get("/:id", articlesController.getArticleById);

// delete article by id
router.delete("/:id", articlesController.deleteArticle);

module.exports = router;
