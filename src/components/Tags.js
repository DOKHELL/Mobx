import React from "react";
import {Link} from "react-router-dom";

const Tags = (props) => {
    const cls = ['tag-pill', 'tag-default'];
    if (props.tags) {
        return (
             <>
                {props.outline ? cls.push('tag-outline') : <p>Popular Tags</p>}
                 <div className="tag-list">
                     {props.tags.map((tag, index) => {
                         return (
                             <Link className={cls.join(' ')} key={index}
                                   to={{
                                       pathname: '/',
                                       search: `?tab=tag&tag=${tag}`
                                   }}>
                                 {tag}
                             </Link>
                         )
                     })}
                 </div>
             </>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
};

export default Tags;