import React from 'react';

function SearchMovies() {
    return (
        <form className="form">
            <label htmlFor="query" className="label">Movie Name: </label>
            <input className="input" type="text" name="query" placeholder="Search a movie"/>
            <button type="submit" className="button">Search</button>
        </form>
    )
}

export default SearchMovies;