import {FETCH_MOVIES_ERROR} from '../../types.js';

const fetchMoviesError = (error) =>{
  return{
    type: FETCH_MOVIES_ERROR,
    error: error
  }
}

export default fetchMoviesError;