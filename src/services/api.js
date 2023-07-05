import axios from "axios";
// base da url: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=7dc1ef15fcfa583fc8b1d116f41fb568&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;