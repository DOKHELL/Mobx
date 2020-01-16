import React, {Component} from "react";
import {Link} from "react-router-dom";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Box from "@material-ui/core/Box";



class Header extends Component {
    render() {
        return (
            <Box maxWidth='90%' margin='20px auto' justifyContent='space-between' display="flex">
                <Link to='/'>
                    <AcUnitIcon fontSize={'large'}/>
                </Link>
                <Box justifyContent='space-between' display="flex" maxWidth='150px' width='100%'>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Sign in</Link>
                    <Link to='/register'>Sign up</Link>
                </Box>
            </Box>
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
    }
}

export default Header;