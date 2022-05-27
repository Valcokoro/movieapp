import React from 'react';


const MovieDetail = () =>{

   /* if (!movie){
        return <div>Loading...</div>
    }
    */
    

    const movieSrc = 'https://www.youtube.com/embed/TcMBFSGVi1c/'

    return (
    <div>
        <div className='ui embed'>
        <iframe  title='movie player' src={movieSrc}/>
        </div>
        <div className='ui segment'>
        <h4 className='ui header'>Avengers: Endgame</h4>
        <p>2019</p>
        </div>
        
    
    </div>
    )
};




export default MovieDetail;