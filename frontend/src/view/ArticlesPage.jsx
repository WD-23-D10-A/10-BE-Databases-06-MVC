import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;
  //   const craurl= process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    // fetch(`${url}/api/articles`)
    //   .then((res) => {
    //     console.log(res);
    //     res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setArticles(data);
    //   })
    //   .catch((err) => console.log(err));

    (async function () {
      try {
        const response = await fetch(`${url}/api/articles`);
        const result = await response.json();
        console.log(result);
        setArticles(result);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h1>ArticlesPage</h1>

      <ul>
        {articles &&
          articles.map((article) => (
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
};

export default ArticlesPage;
