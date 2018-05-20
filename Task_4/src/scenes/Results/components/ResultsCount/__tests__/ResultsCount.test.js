import React from "react";
import ResultsCount from "../ResultsCount";
import TestRenderer from 'react-test-renderer';

describe('ResultsCount layout complete', () => {
    test('Render correct', () => {

        const component = TestRenderer.create(
            <ResultsCount items="7" />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

