import React from "react";

const ArticleInfo = props => {
    return (
            <div style={{marginBottom: '30px' }} className='article-info'>
                <h2 style={{margin: '0 0 5px'}}>{props.article.title}</h2>
                <p style={{margin: '0 0 15px', color: '#bbb'}}>{props.article.description}</p>
                <span style={{margin: '0 0 15px', color: '#bbb'}}>Read more</span>
            </div>
    )
};

export default ArticleInfo