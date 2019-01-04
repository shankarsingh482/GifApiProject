import {rootReducer} from '../reducers/index'
import {fromJS} from 'immutable';
describe('rootReducer',()=>
{
    let state;
    beforeEach(()=>
    {
        state=fromJS({
                isFetching: false, 
	            input: ""
        })
    })
    it('should return the initial state',()=>
    {
        const expectedState= state;
        expect(rootReducer.menuReducer(state,{})).to.be.equal(expectedState);
    })
})