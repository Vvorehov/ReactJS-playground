import React from 'react';
import Search from '../Search';
import TestRenderer from 'react-test-renderer';

describe('Search layout complete', () => {
  it('Render correct', () => {

    const component = TestRenderer.create(
      <Search />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
