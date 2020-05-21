import React, {useState} from 'react';
import MoviesCard from "./MoviesCard.js"


function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
    e.preventDefault();
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=722794eadb8351ced9465ab3563f025c&language=en-US&query=${query}&page=1&include_adult=false`;

    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
    } catch(err) {
        console.error(err);
    }

    }

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label" >Movie Name: </label>
            <input className="input" type="text" name="query" placeholder="Search a movie" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit" className="button">Search</button>
        </form>
        <div className="cardList">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MoviesCard movie={movie} key={movie.id} />
            ))}
        </div>
        </>
    )
}

export default SearchMovies;