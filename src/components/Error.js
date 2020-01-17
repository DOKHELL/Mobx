import React from "react";

const Error = props => {
    const style = {
        margin: '10px',
        fontSize: '15px',
        color: 'red'
    };
    return (
        <div style={style}>
            {props.message}
        </div>
    )
};

export default Error;