import {FETCH_SERIES_ERROR} from '../../types.js';

const fetchSeriesError = (error) =>{
  return {
    type: FETCH_SERIES_ERROR,
    error: error
  }
}


export default fetchSeriesError;