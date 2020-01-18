import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import ArticleMeta from "./ArticleMeta";

@inject('articleStore')
@observer

class Article extends Component {
    componentDidMount() {
        this.props.articleStore.getArticle();
    }

    render() {
        return (
            <div>
                {this.props.articleStore.articles.map((article, index) => {
                    return (
                            <ArticleMeta key={index} article={article}/>
                        )
                })}
            </div>
        )
    }
}

export default Article;