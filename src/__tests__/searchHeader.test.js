import React from 'react';
import { shallow } from 'enzyme';
import SearchHeader from '../components/SearchHeader';
import sinon from 'sinon';

//Testing Configuration.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('SearchHeader',()=>
{
        it('should return SearchHeader Component',()=>
        {
           expect('SearchHeader').toBeDefined();
        });
});