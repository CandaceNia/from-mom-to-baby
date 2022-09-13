import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    return(
        <nav id='nav'>
            <button id='logo'>
                <Link to='/' id='home-button'>From Mom To Baby</Link>
            </button>
            <button id='nav-buttons'>
                <Link to='/about' id=''> About </Link>
            </button>
            <button id=''>
                <Link to='/'></Link>
            </button>
            <button id=''>
                <Link to='/'></Link>
            </button>

        </nav>
    )
}
export default NavBar;