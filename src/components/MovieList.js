import React from 'react';
import MovieItem from './MovieItem';


const MovieList = ({movies, onMovieSelect}) =>{
   const renderedList= movies.map((movie) => {
        return <MovieItem key='tt4154796' onMovieSelect={onMovieSelect} movie={movie}/>;
    });

    return <div className='ui relaxed divided list'>{renderedList}</div>;
}



export default MovieList;