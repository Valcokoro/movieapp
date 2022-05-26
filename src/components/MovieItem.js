import './MovieItem.css'
import React from 'react';


const MovieItem = ({movie, onMovieSelect}) => {
     
    return (
    <div onClick={() => onMovieSelect(movie)} className='movie-item item'>
    <img 
     alt= {movie.Title} 
     className='ui image' 
     src={movie.Poster} />
    <div className='content'>
    <div className='header'>{movie.Title}</div> 
    </div>
    
    </div>
    )
}



export default MovieItem;