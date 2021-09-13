import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav>
            <Link to="/">All Reviews</Link>
            <br></br>
            <Link to="/reviews/new">Write a Review</Link>
        </nav>
    )
}

export default Navbar;