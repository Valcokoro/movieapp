import React from 'react';


const MovieDetail = ({ movie }) =>{

    if (!movie){
        return <div>Loading...</div>
    }

    const movieSrc = `https://www.imdb.com/${movie.title}/${movie.imdbID}`

    return (
    <div>
        <div className='ui embed'>
        <iframe  title='movie player' src={movieSrc} />
        </div>
        <div className='ui segment'>
        <h4 className='ui header'>{movie.title}</h4>
        <p>{movie.year}</p>
        </div>
        
    
    </div>
    )
};




export default MovieDetail;