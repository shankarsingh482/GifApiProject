import React, { Component } from 'react';
import ViewContainer from "./components/ViewContainer";



class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
   		<div>
      	<ViewContainer
      		store = {this.props.store}
      		action = {this.props.action}
      	/>
    	</div>
    );
  }
}

export default App;
