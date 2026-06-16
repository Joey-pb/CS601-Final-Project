import styles from "./Article.module.css";
import type {IArticle, IArticlesData} from "../../data/articles.data.ts";

function Article({articles}: { articles: IArticlesData[string] }) {

    return (
        <>
            {articles.map((article: IArticle) => (
                <div className="container container-sm" key={article.id}>
                    <div className={styles['section-heading']}>
                        <div className={styles.frame} style={{ backgroundImage: `url(${import.meta.env.BASE_URL}svg/frames/heading-frame.svg)` }}>
                            <h2>{article.heading}</h2>
                        </div>
                    </div>

                    <p>{article.text}</p>
                </div>


            ))}
        </>
    );
}

export default Article;
