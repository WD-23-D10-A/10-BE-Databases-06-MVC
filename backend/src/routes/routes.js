const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articlesController");

// Get all articles
router.get("/", articlesController.getArticles);

// Create a new article (Optional)
router.post("/", articlesController.createArticle);

// articles by id
router.get("/:id", articlesController.getArticleById);

// delete article by id

router.delete("/:id", articlesController.deleteArticle);

module.exports = router;
