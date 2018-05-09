import React from "react";
import Header from "../Header";
import TestRenderer from 'react-test-renderer';

describe('Header layout complete', () => {
    it('Render correct', () => {

        const component = TestRenderer.create(
            <Header />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

