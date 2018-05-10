import 'jsdom-global/register'; //at the top of file , even  , before importing react. Fixed Mount() problem
import React from "react";
import Radio from "../Radio";
import TestRenderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Radio layout complete', () => {
  it('Render correct', () => {
    const component = TestRenderer.create(
      <Radio name="search-by" label="Title" value="title" isChecked={true}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
/*
  it('Check handler', () => {
    const wrapper = mount(<Radio />);
    const radio = wrapper.find('.radio');

    radio.simulate('change');
    expect(changeHandler).toBeCalled();
  })*/
});

