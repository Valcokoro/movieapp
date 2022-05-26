import React from 'react';
import SearchBar from './components/SearchBar';
import useMovies from './hooks/useMovies';
import Container from '@mui/material/Container';


const App = () => {
  const [movies, search] = useMovies('');
  return (
    <div className='search-movie'>
     <Container fixed>
      <div className='search'>
      <SearchBar onFormSubmit={search}
        movies={movies}
      />
     </div>
     </Container>
    </div>
  );
}

export default App;
