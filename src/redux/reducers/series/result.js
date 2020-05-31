import { 
  FETCH_SERIES_ERROR,
  FETCH_SERIES_PENDING,
  FETCH_SERIES_SUCCESS
} from '../../types.js';

const defaultState = {
  pending: true,
  series: [],
  error: null
}

const reducer = (state = defaultState, action) =>{
  switch(action.type){
    case FETCH_SERIES_PENDING:
      return{
        ... state,
        pending: true
      }
    case FETCH_SERIES_SUCCESS:
      return{
        ... state,
        pending: false,
        series: action.series
      }
    case FETCH_SERIES_ERROR:
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