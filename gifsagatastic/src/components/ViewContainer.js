import React, { Component } from 'react';
import SearchHeader from "./SearchHeader";
import ResultsContainer from "./ResultsContainer";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class ViewContainer extends Component {
  constructor(props){
    super(props);
  }

  componentWillUpdate(nextprops, nextstate){
  	console.log(nextprops)
  }

  onValueChange = (event) => {
    let searchInput = event.target.value;
    this.setState({searchQuery: searchInput});
  };

  render() {
    return (
   		<div>
      	<SearchHeader
      		onSearch = {() => this.props.action('SEARCH')}
      		onClear = {() => this.props.action('CLEAR')}
      		onChange = {onValueChange}
      		inputValue = {this.props.menuReducer.input}
      	/>
      	<ResultsContainer
      		store = {this.props.store}
      		value = {this.props.menuReducer}
      	/>
    	</div>
    );
  }
}

function mapStateToProps(state){
  return {
    menuReducer: state.menuReducer
  };
}

export default connect(mapStateToProps)(ViewContainer);