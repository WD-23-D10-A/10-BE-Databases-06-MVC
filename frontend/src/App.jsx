import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ArticlesPage from "./view/ArticlesPage";
import CreateArticle from "./view/CreateArticle";
import ArticleDetail from "./view/ArticleDetail";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/create">Create Article</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/create" element={<CreateArticle />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
};

export default App;
