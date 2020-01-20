import React from "react";
import ArticlePreview from "./ArticlePreview";
import ArticleInfo from "./ArticleInfo";


const ArticleList = props => {

        return (
            <div>
                {props.articles.map((article, index) => {
                    return (
                        <div className='article-preview' key={index}>
                            <ArticlePreview article={article}/>
                            <ArticleInfo article={article} />
                        </div>
                    )
                })}
            </div>
        )
};

export default ArticleList;