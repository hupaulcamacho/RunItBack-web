import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='main-nav'>
            <span>Run It Back</span>
            <Link to='/' className='nav-links'>Home</Link>
            <Link to='/users' className='nav-links'>Users</Link>
            <Link to='/signup' className='nav-links'>Signup</Link>

            {/* <Link to='/events' className='nav-links'>Events</Link> */}
        </div>
    )
}

export default NavBar;