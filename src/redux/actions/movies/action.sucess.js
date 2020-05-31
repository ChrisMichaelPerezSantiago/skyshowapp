import {FETCH_MOVIES_SUCCESS} from '../../types.js';

const fetchMoviesSucess = (movies) =>{
  return{
    type: FETCH_MOVIES_SUCCESS,
    movies: movies
  }    
}

export default fetchMoviesSucess;