import {
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCESS
} from '../../types';

const defaultState = {
  pending: true,
  movies: [],
  error: null
}

const reducer = (state = defaultState , action) =>{
  switch(action.type){
    case FETCH_MOVIES_PENDING:
      return{
        ... state,
        pending: true
      }
    case FETCH_MOVIES_SUCCESS:
      return{
        ... state,
        pending: false,
        movies: action.movies
      }
    case FETCH_MOVIES_ERROR:
      return{
        ... state,
        pending: false,
        error: action.error
      }
    
    default:
      return state;
  }
}

export default reducer;