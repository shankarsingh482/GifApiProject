import React, { Component } from 'react';
import SearchHeader from "./SearchHeader";
import ResultsContainer from "./ResultsContainer";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateInputValue} from "../actions";


class ViewContainer extends Component {
  constructor(props){
    super(props);
  }

  componentWillUpdate(nextprops, nextstate){
  	console.log(nextprops)
  }

  onValueChange = (event) => {
    let searchInput = event.target.value;
    console.log(searchInput);
    this.props.dispatch(updateInputValue(searchInput));
  };

  render() {
    return (
   		<div>
      	<SearchHeader
      		onSearch = {() => this.props.action('SEARCH')}
      		onClear = {() => this.props.action('CLEAR')}
      		onChange = {this.onValueChange}
      		inputValue = {this.props.menuReducer.input}
      	/>
      	<ResultsContainer
      		value = {this.props.menuReducer}
      	/>
    	</div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  let actions = bindActionCreators({ updateInputValue });
  return { ...actions, dispatch };
}

function mapStateToProps(state){
  return {
    menuReducer: state.menuReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);