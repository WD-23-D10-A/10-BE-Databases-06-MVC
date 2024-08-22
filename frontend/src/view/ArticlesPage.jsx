import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    fetch(`${url}/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="container">
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h2>{article.title}</h2>
            <p>{article.content.substring(0, 100)}...</p>
            <p>
              <strong>Author:</strong> {article.author}
            </p>
            <Link to={`/article/${article._id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesPage;
