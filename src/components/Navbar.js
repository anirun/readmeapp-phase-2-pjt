import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <p></p>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/reviews">All Reviews</Link>
            <br></br>
            <Link to="/reviews/new">Write a Review</Link>
            <p></p>
        </nav>
    )
}

export default Navbar;