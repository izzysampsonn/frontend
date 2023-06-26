import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/data">Data</Link></li>
        </ul>
    );
}

export default Navbar;