import React, {Component} from 'react';
import Page from './page.js';
import fetchSeriesAction from '../../redux/actions/series/action.fetch';
import fetchMoviesAction from '../../redux/actions/movies/action.fetch';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'


class Home extends Component {
  componentDidMount() {
    const page = 1;
    this.props.fetchSeries(page);
    this.props.fetchMovies(page);
  }

  render(){
    /**
     * series: {series: [] , pending: bool , error: payload}
     * movies: {movies: [] , pending: bool , error: payload}
     **/
    const {series, movies} = this.props; 
    //const nav = this.props.navigation
    return(
      <Page 
        series={series}  
        movies={movies}  
        //nav={nav}
      />
    )
  }
}

const mapStateToProps = (state) =>{
  console.log('state: ' , state)
  return{
    series: state.resultSeriesReducer,
    movies: state.resultMoviesReducer
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSeries: fetchSeriesAction,
  fetchMovies: fetchMoviesAction
}, dispatch)


export default connect(mapStateToProps , mapDispatchToProps)(Home);