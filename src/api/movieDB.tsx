import axios from 'axios';

const movieDB = axios.create({
    baseURL: ' https://api.themoviedb.org/3/movie',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGI4ZTAxN2MwYWYxYTVhZjM1MmI4MGQxZTcwYTg3NSIsInN1YiI6IjY1NDQ2NmIwNzcxOWQ3MDBmZjhjODMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f42taECN-GguxEY-KOfvn3EgbeNUXq-p9ESaGdYWh6o',
    },
    params: {
        language: 'es-ES',
    },
});

export default movieDB;

