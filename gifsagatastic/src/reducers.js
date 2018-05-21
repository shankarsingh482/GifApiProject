import { combineReducers } from 'redux';

const menuReducer = (state = { 
	isFetching: false, 
	input: ""	
	}, action) => {
	switch(action.type){
		case "SEARCHING":
			console.log(action.type);
			console.log(action.payload);
			return{
				...state,
				isFetching: true,
				input: action.payload
			}
		case "CLEARING":
			return {
				...state,
				isFetching: false,
				input: ""
			}
		case "INPUT":
			console.log(action.value)
			return {
				...state,
				isFetching: false,
				input: action.value
			}
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	menuReducer
});

export default rootReducer;