import React from "react";
import ResultsSort from "../ResultsSort";
import TestRenderer from 'react-test-renderer';

describe('ResultsSort layout complete', () => {
    test('Render correct', () => {

        const component = TestRenderer.create(
            <ResultsSort />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

