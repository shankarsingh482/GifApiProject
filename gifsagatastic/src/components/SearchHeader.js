import React from "react";
import {  Header, Menu, Button, Input  } from 'semantic-ui-react'
 
const SearchHeader = props => {
	return(
    <div>
      <Menu borderless>
      	<Menu.Item>
	      	<Header
	      	color="grey"
	      	size="large"
	      	>
	      	GifTastic, Now in React!</Header>
      	</Menu.Item>
      	<Menu.Menu position="right">
	      	<Menu.Item>
	      		<Input 
		      		className='icon' 
		      		icon='search' 
		      		placeholder='Search...' 
              value={props.inputValue}
              onChange={e => props.onChange(e)}
	      		/>
	      	</Menu.Item>
	      	<Menu.Item>
	      		<Button primary
		      		onClick={props.onSearch} >
		      		Search
	      		</Button>
	      	</Menu.Item>
	      	<Menu.Item>
	      		<Button
		      		onClick={props.onClear} >
		      		Clear
	      		</Button>
	      	</Menu.Item>
      	</Menu.Menu>
      </Menu>
    </div>
  );
}

export default SearchHeader;