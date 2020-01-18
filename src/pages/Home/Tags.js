import React from "react";

const Tags = (props) => {
    if (props.tags) {
        return (
            <div>
                {props.tags.map((tag, index) => {
                    return (
                        <div key={index} style={{display: 'inline-block',padding: '5px', backgroundColor: 'rgba( 0, 0, 0, .3)', margin: '3px', color: 'red'}}>
                            {tag}
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
};

export default Tags;