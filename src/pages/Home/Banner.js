import React from "react";
import Box from "@material-ui/core/Box";

const Banner = props => {
    const style = {
        background: '#5cb85c',
        boxShadow: 'inset 0 8px 8px -8px rgba(0,0,0,.3), inset 0 -8px 8px -8px r',
        color: '#fff',
        padding: '32px',
        margin: ' 0 -8px 32px',
        textAlign: 'center'
    };
    if (props.token) {
        return null
    }
    return (
            <Box style={style}>
                <h1 style={{fontSize: '60px', margin: '0'}}>conduit</h1>
                <p style={{fontSize: '20px', margin: '10px 0'}}>A place to share your knowledge.</p>
            </Box>
    )
};

export default Banner