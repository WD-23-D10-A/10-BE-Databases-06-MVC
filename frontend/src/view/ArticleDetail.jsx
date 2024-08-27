import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${url}/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`${url}/api/articles/${id}`, {
        method: "DELETE",
      });

      navigate("/");
    }
  };

  if (!article) return <div className="container">Loading...</div>;
  return (
    <div className="container">
      <h1>{article?.title}</h1>
      <p>{article?.content}</p>
      <p>
        <strong>Author: {article?.author}</strong>
      </p>
      <p>
        <em>{new Date(article?.date).toLocaleDateString()}</em>
      </p>
      <button onClick={handleDelete} style={{ background: "red" }}>
        Delete Article
      </button>
    </div>
  );
};

export default ArticleDetail;
