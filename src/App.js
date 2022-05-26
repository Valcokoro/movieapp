import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import useMovies from './hooks/useMovies';



const App = () => {
  const [selectedMovie, setSelectedMovie]= useState(null);
  const [movies, search] = useMovies('Avengers: Endgame');
  return (
    <div className='ui container' style={{marginTop: '20px'}}> 
        <SearchBar onFormSubmit ={search} />
        <div className='ui grid'>
           <div className='ui row'>
           <div className='eleven wide column'>
                <MovieDetail movie={selectedMovie} />
                  </div>
              <div className='five wide column'>
        <MovieList 
        onMovieSelect={setSelectedMovie} 
        movies={movies}/>
        </div>
        </div>
        </div>
   </div>
        );
}

export default App;
