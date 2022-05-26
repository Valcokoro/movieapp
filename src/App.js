import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import useMovies from './hooks/useMovies';



const App = () => {
  const [selectedMovie, setSelectedMovie]= useState(null);
  const [movies, search] = useMovies('');
  return (
    <div className='ui container' style={{marginTop: '20px'}}> 
        <SearchBar onFormSubmit ={search} />
        <div className='ui grid'>
           <div className='ui row'>
            
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
