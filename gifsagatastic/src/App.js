import React, { Component } from 'react';
import ViewContainer from "./components/ViewContainer";
import {connect} from "react-redux";
import * as actions from "./actions";
import { bindActionCreators } from 'redux'


class App extends Component {

  constructor(props){
    super(props);
  }

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