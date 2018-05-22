export const updateInputValue = (value) => {
	console.log("actionvalue: ");
	console.log(value);
	return {
		type: "INPUT",
		payload: value
	};
};