import React from 'react';
import {shallow} from 'enzyme';
import Input from '../components/inputComponent';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Input',()=>
{
    it('Input For Search Component should be defined',()=>{
        expect(Input).toBeDefined();
    })
    it('Input component should render Correctly ',()=>
    {
        const tree= shallow(
                    <Input name='input test'/>
        );
        expect(tree).toMatchSnapshot();
    })
});