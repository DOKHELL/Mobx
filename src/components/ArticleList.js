import React from "react";
import ArticlePreview from "./ArticlePreview";
import ArticleInfo from "./ArticleInfo";


const ArticleList = props => {

        return (
            <div>
                {props.articles.map((article, index) => {
                    return (
                        <React.Fragment key={index}>
                            <ArticlePreview article={article}/>
                            <ArticleInfo article={article} />
                            <hr style={{marginBottom: '20px'}}/>
                        </React.Fragment>
                    )
                })}
            </div>
        )
}

export default ArticleList;