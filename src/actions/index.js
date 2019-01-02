import {
	INPUT,
  } from '../constants'

export const updateInputValue = (value) => {
	return {
		type: INPUT,
		payload: value
	};
};