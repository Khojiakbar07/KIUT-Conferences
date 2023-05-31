import "./Article.scss";
import ArticleItem from "./ArticleItem/ArticleItem";

const Article = ({sections, articles}) => {
    
    return (
        <section className="article">
            <div className="container">
                <h2 className="article-title line">
                    Tashkent International Pedagogical Forum – Education: A Look
                    Into The Future (TIPF 2023)
                </h2>
                {sections.map((section) => (
                    <div key={section.id} className="article-section">
                        <h5 className="article-section__name">
                            {section.name}
                        </h5>
                        <ol className="article__list">
                            {articles.map(
                                (article, index) =>
                                    article.section === section.id && (
                                        <ArticleItem
                                            key={article.id}
                                            article={article}
                                            index={index}
                                        />
                                    )
                            )}
                        </ol>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Article;
