import axios from 'axios';





export default axios.create({
    baseURL: 'https://movie-database-alternative.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        'X-RapidAPI-Key': '58e070e126mshab6ff02611d105cp104777jsnac2a1846cff1'
      }
});