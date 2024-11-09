// Movies.js
import React from "react";
import moviesData from "./MoviesData";
import '../Allstyles/Movies.css';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={`/images/${movie.image}`} alt={movie.title} className="movie-image" />
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p className="year-duration">{movie.year} • {movie.duration}</p>
                <p className="rating">
                    <span>⭐ {movie.rating}</span> ({movie.reviews})
                </p>
                <span className={`metascore ${movie.metascore >= 75 ? 'high' : 'low'}`}>{movie.metascore}</span>
                <p className="description">{movie.description}</p>
            </div>
        </div>
    );
}

function Movies() {
    return (
        <div className="movies-container">
            {moviesData.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default Movies;
