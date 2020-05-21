import React from 'react';

function MoviesCard({movie}) {
    return (
        <div className="card">
                    <img  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        className="cardImage"
                    />
                    <div className="cardContent">
                        <h3 className="cardTitle">{movie.title}</h3>
                        <p><small>Release Date: {movie.release_date}</small></p>
                        <p><small>Rating: {movie.vote_average}</small></p>
                        <p className="cardDesc">{movie.overview}</p>
                    </div>
        </div>
    )
}

export default MoviesCard;