import React from "react";
import Footer from "../Footer";
import TestRenderer from 'react-test-renderer';

describe('Footer layout complete', () => {
    test('Render correct', () => {

        const component = TestRenderer.create(
            <Footer />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

