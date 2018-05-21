import React from "react";
import {  Container, Header  } from 'semantic-ui-react'
 
const ResultsContainer = props => {
	return(
    <Container>
    	<Header as="h1"
    	style={{paddingTop: "2%"}}
    	>
    		Results
  		</Header>
  		<div>
  		{Object.keys(props.value).map(function(key) {
  			if(props.value[key]){
	    		return <div key={key}>Key: {key}, Value: {props.value[key].toString()}</div>;}
			})}		
			</div>
    </Container>
  );
}

export default ResultsContainer;