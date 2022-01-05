import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <p className="brand">Blog Posts</p>
            <div className="links">
                <Link className="link" to="/">All Posts</Link>
                <Link className="link" to="/liked">Liked Posts</Link>
                <Link className="link" to="/add_new">Add New</Link>
            </div>
        </div>
    )
}

export default Header;