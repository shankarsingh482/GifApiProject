import { combineReducers } from 'redux';
import {
	SEARCHING ,
	CLEARING ,
	RECEIVEDATA,
	INPUT,
  } from '../constants'

const initialState=
{
	isFetching: false, 
	input: ""
}
const menuReducer = (state = initialState, action) => {
	switch(action.type){
		case SEARCHING:
			return{
				...state,
				isFetching: true,
			}
			
		case CLEARING:
			return {
				...state,
				isFetching: false,
				input: "",
				results: []
			}
			
		case INPUT:
			return {
				...state,
				isFetching: false,
				input: action.payload
			}
			
		case RECEIVEDATA:
			return {
				...state,
				isFetching: false,
				results: action.results
			}
			
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	menuReducer
});

export default rootReducer;