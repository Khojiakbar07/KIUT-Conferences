import pdfIcon from "../../../assets/ui-icons/adobe-pdf-icon.png";
import "./ArticleItem.scss";

const ArticleItem = ({
    article: { name, author, article_pdf, work_place },
    index,
}) => {
    return (
        <li className="article-item">
            <div className="article-item__index">{index + 1}</div>
            <div className="article-item__info">
                <p className="article-item__name">{name}</p>
                <p className="article-item__author">{author}</p>
                <p className="article-item__workplace">{work_place}</p>
            </div>
            <div className="article-item__link">
                <a download href={article_pdf} target="_blank" rel="noreferrer">
                    <img src={pdfIcon} alt={name} />
                </a>
            </div>
        </li>
    );
};

export default ArticleItem;
