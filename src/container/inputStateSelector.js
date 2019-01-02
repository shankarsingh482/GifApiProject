import { createSelector } from  'reselect';


//For input field
const selector =(state) => state.menuReducer.input


//For getting images from api
const showData = (state) =>state.menuReducer.results


export const getInput = createSelector(selector, getDataFromInput => getDataFromInput)
export const getOutput = createSelector(showData, getDataFromApi => getDataFromApi)