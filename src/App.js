import React, { Component } from 'react';
import './styles/bass.css';
import ViewContainer from './container/ViewContainer';
import {connect} from "react-redux";
import * as actions from "./actions/index";


class App extends Component {

  render() {
    return (
   		<div>
      	<ViewContainer
      		action = {this.props.action}
      	/>
    	</div>
    );
  }
}

//export default App;

const mapStateToProps = state => {
	return{
	};
};
export default connect(mapStateToProps, actions)(App);