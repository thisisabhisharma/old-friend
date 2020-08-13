import React from 'react';
import './stylesheet.css';
import {Link} from 'react-router-dom';

const NavScreen = () =>  {
    return (
        <div className="nav" >
            <Link className="nav-links" to="/">
                <li>Home</li>
            </Link>
            
            <Link className="nav-links" to="/login">
                <li>Login</li>
            </Link>
        </div>

    );
};



export default NavScreen;

