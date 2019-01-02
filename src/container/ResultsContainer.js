import React from "react";
import {Image  } from 'semantic-ui-react'

import propTypes from 'prop-types';
var scope=
{
    stylingImage:
    {
        height:200,
        width:200
    }
}
const ResultsContainer = props => {
	let pics;
 	if(props.value){
 		pics = props.value.map(function(val, index){
			//  console.log(val);
	 		return <Image src={val.images.preview_gif.url} style={scope.stylingImage } key = {index}/>
 	})} else {
 			pics = [<div></div>]
 		}

	return(
   
  		<div className='container clearfix '>
				
				
				 {pics.map(function(pic, index){
	 					return <div className='col col-4 mb2 mt2 '  key = {index}>{pic}</div>
					})}
			
			</div>
  
  );
}
ResultsContainer.propTypes=
{
    pics:propTypes.object
}

export default ResultsContainer;