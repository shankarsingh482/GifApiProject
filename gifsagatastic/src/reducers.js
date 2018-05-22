import { combineReducers } from 'redux';

const menuReducer = (state = { 
	isFetching: false, 
	input: ""	
	}, action) => {
	switch(action.type){
		case "SEARCHING":
			return{
				...state,
				isFetching: true,
			}
			break;
		case "CLEARING":
			return {
				...state,
				isFetching: false,
				input: "",
				results: []
			}
			break;
		case "INPUT":
			return {
				...state,
				isFetching: false,
				input: action.payload
			}
			break;
		case "RECEIVEDATA":
			return {
				...state,
				isFetching: false,
				results: action.results
			}
			break;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	menuReducer
});

export default rootReducer;