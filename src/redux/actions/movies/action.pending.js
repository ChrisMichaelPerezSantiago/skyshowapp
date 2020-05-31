import {FETCH_MOVIES_PENDING} from '../../types.js';

const fetchMoviesPending = () =>{
  return{
    type: FETCH_MOVIES_PENDING
  }   
}

export default fetchMoviesPending;