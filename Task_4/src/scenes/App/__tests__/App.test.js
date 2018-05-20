import React from "react";
import App from "../App";
import TestRenderer from 'react-test-renderer';
import "isomorphic-fetch";

describe('App layout complete', () => {
  it('Render correct', () => {

    const component = TestRenderer.create(
      <App />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

