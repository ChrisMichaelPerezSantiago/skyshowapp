import fetchMoviesPending from './action.pending';
import fetchMoviesSuccess from './action.sucess';
import fetchMoviesError from './action.error';

const fetchData = (page) =>{
  return async dispatch =>{
    dispatch(fetchMoviesPending());
    await fetch(`https://cinemanight.chrismichael.now.sh/api/v1/movies/${page}`)
      .then(res => res.json())
      .then(res =>{
        if(res.error){
          throw(res.error)
        }
        dispatch(fetchMoviesSuccess(res.movies));
        return res.movies;
      }).catch(error =>{
        dispatch(fetchMoviesError(error));
      });
  }   
}

export default fetchData;