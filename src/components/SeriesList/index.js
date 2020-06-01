import React, {Component} from 'react';
import Page from './page';
import fetchSeriesAction from '../../redux/actions/series/action.fetch';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class SeriesList extends Component{
  constructor(props){
    super(props)
    this.page = 1;
  }

  componentDidMount(){
    this.props.fetchSeries(this.page);
  }

  render(){
    const {series} = this.props;
    return(
      <Page series={series} page={this.page}/>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    series: state.resultSeriesReducer
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSeries: fetchSeriesAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SeriesList);