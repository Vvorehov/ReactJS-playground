import React from "react";
import FilmPage from "../FilmPage";
import TestRenderer from 'react-test-renderer';
import "isomorphic-fetch";

describe('FilmPage layout complete', () => {
  it('Render correct', () => {

    const component = TestRenderer.create(
      <FilmPage />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

