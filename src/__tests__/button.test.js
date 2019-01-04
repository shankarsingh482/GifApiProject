
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/buttonComponent';
import sinon from 'sinon';

//Testing Configuration.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



//Test Cases For button.
describe('Button',()=>
{
    it('Button is defined in search Header Component',() =>
    {
        expect(Button).toBeDefined();
    });
    it('Button  Should Render Correctly',()=>
    {
        const tree = shallow(
            <Button name='button test' />
        );
        expect(tree).toMatchSnapshot();
    });
    /*
    it('should execute the onClick function on click ',()=>
    {
        const spy = sinon.spy();
        const stub = sinon.stub();
        const tree = shallow(
            <Button name='button test' onClick ={stub}/>
        )
        // const instance = tree.instance();
        // const goSpy = sinon.spy(instance,'moc');
        // instance.forceUpdate();
            //  sinon.assert.calledOnce(goSpy);
         tree.simulate('click');
         expect(spy.calledOnce).to.be.equal(true);
       
    })
*/
});