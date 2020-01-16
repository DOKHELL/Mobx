import React from "react";

const Error = ({ touched, message }) => {
    if (!touched) {
        return <div className="form-message invalid">&nbsp;</div>;
    }
    if (message) {
        return <div style={{color: 'red'}} className="form-message invalid">{message}</div>;
    }
    return <div style={{color: 'darkseagreen'}} className="form-message valid">Right</div>;
};

export default Error;