import {expect} from 'chai';
import {updateInputValue} from '../actions/index';
import {INPUT} from '../constants'

describe('Checking Action  for app',()=>
{
        describe('updateInputValue',()=>
        {
            it('should return the proper object',()=>
            {
                const output = updateInputValue();
                expect(output.type).to.be.equal(INPUT);
        });
    });
});