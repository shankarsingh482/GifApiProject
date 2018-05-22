import React from "react";
import {  Container, Header, Grid, Image  } from 'semantic-ui-react'
 
const ResultsContainer = props => {
	let pics;
 	if(props.value){
 		pics = props.value.map(function(val, index){
	 		return <Image src={val.images.preview_gif.url} key = {index}/>
 	})} else {
 			pics = [<div></div>]
 		}

	return(
    <Container>
    	<Header as="h1"
    	style={{paddingTop: "2%"}}
    	>
    		Results
  		</Header>
  		<div>
				<Grid 
					columns={3}
				 >
				 {pics.map(function(pic, index){
	 					return <Grid.Column key = {index}>{pic}</Grid.Column>
					})}
				</Grid>
			</div>
    </Container>
  );
}

export default ResultsContainer;