import React from "react";
import {Link} from "react-router-dom";
import AlternateEmailSharpIcon from '@material-ui/icons/AlternateEmailSharp';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";



const Header = () => {
    const [isOpen, setOpen] = React.useState(null);

    const handleClick = e => {
        setOpen(e.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px auto'
    };
        return (
            <Container
                style={containerStyle}
                maxWidth='md'>
                <Link to='/'>
                    <AlternateEmailSharpIcon color='primary' fontSize='large'/>
                </Link>
                <Box>
                    <Button aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}>
                        Open Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={isOpen}
                        keepMounted
                        open={Boolean(isOpen)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link}
                                  to='/'
                                  onClick={handleClose}>Home</MenuItem>
                        <MenuItem component={Link}
                                  to='/login'
                                  onClick={handleClose}>Sign in</MenuItem>
                        <MenuItem component={Link}
                                  to='/register'
                                  onClick={handleClose}>Sign up</MenuItem>
                    </Menu>
                </Box>
            </Container>
            // <nav className="navbar navbar-light">
            //     <div className="container">
            //         <a className="navbar-brand" href="index.html">conduit</a>
            //         <ul className="nav navbar-nav pull-xs-right">
            //             <li className="nav-item">
            //                 <a className="nav-link" href="">Home</a>
            //             </li>
            //             {/*<li className="nav-item">*/}
            //             {/*    <a className="nav-link" href="">*/}
            //             {/*        <i className="ion-compose"></i>&nbsp;New Post*/}
            //             {/*    </a>*/}
            //             {/*</li>*/}
            //             {/*<li className="nav-item">*/}
            //             {/*    <a className="nav-link" href="">*/}
            //             {/*        <i className="ion-gear-a"></i>&nbsp;Settings*/}
            //             {/*    </a>*/}
            //             {/*</li>*/}
            //             <li className="nav-item">
            //                 <Link className="nav-link active" to="/login">Sign in</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link className="nav-link" to='/login'>Sign up</Link>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>
        )
};

export default Header;