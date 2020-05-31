import fetchSeriesPending from './action.pending.js';
import fetchSeriesSuccess from './action.sucess.js';
import fetchSeriesError from './action.error.js';
//const nSQL = require('@nano-sql/core').nSQL;

//nSQL().useDatabase('skyshowdb');

const fetchData = (page) =>{
  return async dispatch => {
    dispatch(fetchSeriesPending());
    await fetch(`https://cinemanight.chrismichael.now.sh/api/v1/series/${page}`)
      .then(res => res.json())
      .then(res => {
        if(res.error) {
            throw(res.error);
        }
       // nSQL('series')
       //   .query('upsert' , res.series)
       //   .exec()
       //   .then(doc =>{
       //     dispatch(fetchSeriesSuccess(doc));          
       //   })
       dispatch(fetchSeriesSuccess(res.series));
       return res.series;   
      })
      .catch(error => {
        dispatch(fetchSeriesError(error));
      })
  }
}

export default fetchData;