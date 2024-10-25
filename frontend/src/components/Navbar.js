import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>PGO App</h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/book-pg">booking</Link></li>
                <li><Link to="/leave-review">Review</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/owner/dashboard">OwnerDashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
