import 'jsdom-global/register'; //at the top of file , even  , before importing react. Fixed Mount() problem
import React from 'react';
import Search from '../Search';
import TestRenderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Search layout complete', () => {
  it('Render correct', () => {

    const component = TestRenderer.create(
      <Search />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Check prevent default', () => {
    const spy = jest.fn();
    const wrapper = mount(<Search />);
    const formSearch = wrapper.find('.search');

    formSearch.simulate('submit', { preventDefault() {} });
    expect(spy).not.toHaveBeenCalled();
  })
});
