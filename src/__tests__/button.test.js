
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/buttonComponent';
import sinon from 'sinon';

//Testing Configuration.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


//const mockFn =()=>('hey')

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
    it('Button is clickable in Search Header Component',()=>
    {
        const onButtonClick = sinon.spy();

        const tree = shallow(
            <Button name='button test' onClick ={onButtonClick}/>
        )
        // const instance = tree.instance();
        // const goSpy = sinon.spy(instance,'moc');
        // instance.forceUpdate();
            //  sinon.assert.calledOnce(goSpy);
         tree.simulate('click');
         expect(onButtonClick).toBeCalled();
       
    })
});