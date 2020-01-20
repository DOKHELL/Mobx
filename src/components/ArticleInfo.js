import React from "react";
import Tags from "./Tags";
import {Link} from "react-router-dom";

const ArticleInfo = props => {
    return (
        <Link href="" className="preview-link">
            <h1>{props.article.title}</h1>
            <p>{props.article.description}</p>
            <span>Read more...</span>
            <ul className="tag-list">
                <Tags outline={true} tags={props.article.tagList}/>
            </ul>
        </Link>
    )
};

export default ArticleInfo