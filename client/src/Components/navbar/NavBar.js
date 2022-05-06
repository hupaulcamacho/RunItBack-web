import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='main-nav'>
            <Link to='/' className='nav-links'>Home</Link>
            <Link to='/users' className='nav-links'>Users</Link>
        </div>
    )
}

export default NavBar;