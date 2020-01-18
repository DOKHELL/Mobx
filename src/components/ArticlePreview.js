import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../css/article.css';
import {inject, observer} from "mobx-react";

@inject('articleStore')
@observer

class ArticlePreview extends Component {
    render() {
        const article = this.props.article;

        return (
            <div className="article-meta">
                <Link to={`/@${article.author.username}`}>
                    <img src={article.author.image} alt="" />
                </Link>

                <div className="info">
                    <Link to={`/@${article.author.username}`} className="author">
                        {article.author.username}
                    </Link>
                    <span className="date">
                  {new Date(article.createdAt).toDateString()}
                </span>
                </div>
            </div>
        )
    }
};

export default ArticlePreview;