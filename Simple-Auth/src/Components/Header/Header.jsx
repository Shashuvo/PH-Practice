import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <ul className='flex gap-2 '>
                <NavLink to="/" className="active:underline">Home</NavLink>
                <NavLink to="/login" className="active:underline">Login</NavLink>
                <NavLink to="/login2" className="active:underline">Login2</NavLink>
                <NavLink to="/register" className="active:underline">Register</NavLink>
            </ul>
        </nav>
    );
};

export default Header;