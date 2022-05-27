import './MovieItem.css'
import React from 'react';


const MovieItem = ({movie, onMovieSelect}) => {
     
    return (
    <div onClick={() => onMovieSelect(movie)} className='movie-item item'>
    <img 
     alt= 'Avengers: Endgame' 
     className='ui image' 
     src="https://m.media-amazon.com/
     images/M/
     MV5BNThjZDgwZTYtMjdmYy00ZmUyLTk4NTUtMzdjZmExODQ3ZmY4XkEyXkFqcGdeQXVyMjkzMDgyNTg@._V1_SX300.jpg" />
    <div className='content'>
    <div className='header'>"Avengers: Endgame"</div> 
    </div>
    
    </div>
    )
}



export default MovieItem;