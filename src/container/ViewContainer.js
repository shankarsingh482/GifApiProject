import React, { Component } from 'react';
import SearchHeader from "../components/SearchHeader";
import ResultsContainer from "./ResultsContainer";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateInputValue} from "../actions/index";
import { getInput ,getOutput} from './inputStateSelector';


class ViewContainer extends Component {


  onValueChange = (event) => {
    let searchInput = event.target.value;
    this.props.dispatch(updateInputValue(searchInput));
  };

  render() {
    return (
   		<div>
      	<SearchHeader
      		onSearch = {() => this.props.action('SEARCH')}
      		onClear = {() => this.props.action('CLEAR')}
      		onChange = {this.onValueChange}
      		inputValue = {this.props.inputState}
      	/>
      	<ResultsContainer
      		value = {this.props.resultsState}
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
    inputState: getInput(state),
    resultsState: getOutput(state)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
