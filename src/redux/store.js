import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import SeriesReducer from './reducers/series/index';
import MoviesReducer from './reducers/movies/index';

const middlewares  = [thunk , logger];

const reducers = combineReducers({
  ... SeriesReducer,
  ... MoviesReducer
});

const store = createStore(reducers , applyMiddleware(... middlewares));

export default store;