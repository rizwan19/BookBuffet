import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const Navbar=(props)=>{
    return(
        <div>
            <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo" style={{marginLeft:20}}>BookBuffet</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="sass.html">Categories</Link></li>
                <li><Link to="badges.html">Top Books</Link></li>
                <li><Link to="collapsible.html">About</Link></li>
                </ul>
            </div>
            </nav>
        </div>
    );
};
export default Navbar;