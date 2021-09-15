import React from 'react';

function SearchBar({reviews}) {
    return (
        <div>
        <p />
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search book reviews </span>
            </label>
            <input 
                type="text"
                id="header-search"
                placeholder="Search book reviews"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
        <p />
        </div>
    )
}

export default SearchBar;