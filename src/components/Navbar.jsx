import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
    return (
        <nav className='navbar' id='navbar'>
            <div className="nav-center">
                <Link to="/">
                    <img src={logo} alt="cocktail db logo" className='logo' />
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/" >Home</Link>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;