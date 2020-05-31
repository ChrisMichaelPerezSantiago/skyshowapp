import {FETCH_SERIES_SUCCESS} from '../../types.js';

const fetchSeriesSuccess = (series) =>{
  return {
    type: FETCH_SERIES_SUCCESS,
    series: series
  }
}

export default fetchSeriesSuccess;