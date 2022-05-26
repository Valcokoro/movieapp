import {useState, useEffect} from 'react';
import movie from '../apis/movie';



const useMovies = (defaultSearchTerm) => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term =>{
        const response = await movie.get('/', {
            params: {
                s: term, 
                r: 'json', 
                page: '1'
            }
        });
        setMovies(response.data.items);
    };
       return [movies, search]
}


export default useMovies;