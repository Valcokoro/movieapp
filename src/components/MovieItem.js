import './MovieItem.css'
import React from 'react';


const MovieItem = ({movie, onMovieSelect}) => {
     
    return (
    <div onClick={() => onMovieSelect(movie)} className='movie-item item'>
    <img 
     alt= {movie.title} 
     className='ui image' 
     src={movie.poster} />
    <div className='content'>
    <div className='header'>{movie.title}</div> 
    </div>
    
    </div>
    )
}



export default MovieItem;