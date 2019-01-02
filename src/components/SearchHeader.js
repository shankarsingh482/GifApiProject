import React from "react";
import Button from './buttonComponent';
import Input from './inputComponent';
const SearchHeader = props => {
	return(

		<div className='container clearfix'>
	      <div className="main-heading clearfix">
 				 <div className="col col-12 center mt2"><h1 className="animated  shake delay-2s fontH1">Giffy</h1></div>
			</div>	  
			<div className="col col-12 center mt1"><h3 className="subtitle ml2">(All Gifs In One Place)</h3></div>
			
 				 <div className='main-content mt4 clearfix '>
				 		<div className='col col-8  clearfix'>
						 <Input type='text' className="block col-12  field" placeholder='Search...' valueInput={props.inputValue}
						 onChangeFunc={e => props.onChange(e)}
						 />
						 <i id='filtersubmit'className="fa fa-search" aria-hidden="true"></i>

						
						</div>
					<div className='col col-2  clearfix'>
					<Button className="btn btn-primary mb1 bg-orange px2 ml3" funconClick={props.onSearch} name='Search'></Button>
					</div>
					<div className='col col-2  clearfix'>
					<Button className="btn btn-primary px3 mxn3 black bg-silver" funconClick={props.onClear} name='clear'></Button>
					</div>	
							
						
				
		</div>
   
		</div>
  			
			

			

				
				
  );
}

export default SearchHeader;