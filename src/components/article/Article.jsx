import { useLocation, useNavigate } from "react-router-dom";
import "./Article.scss";
import ArticleItem from "./ArticleItem/ArticleItem";

const Article = ({ sections, articles, title }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSelectChange = (e) => {
    navigate(`${pathname}?section=${e.target.value}`);
  };

  return (
    <section className="article">
      <div className="container">
        <h2 className="article-title">{title}</h2>
        <select onChange={handleSelectChange} className="article-select">
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.name}
            </option>
          ))}
        </select>

        <ol className="article__list">
          {articles.length ? (
            articles.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))
          ) : (
            <li className="article-item__name">No Articles</li>
          )}
        </ol>
      </div>
    </section>
  );
};

export default Article;
