import React from "react";
import Results from "../Results";
import TestRenderer from 'react-test-renderer';
import "isomorphic-fetch";

describe('Results layout complete', () => {

  it('Results rendered', () => {
    const component = TestRenderer.create(
      <Results />
    );

  });

});

