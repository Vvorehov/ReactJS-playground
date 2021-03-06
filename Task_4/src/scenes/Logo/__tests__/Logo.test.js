import React from "react";
import Logo from "../Logo";
import TestRenderer from 'react-test-renderer';

describe('Logo layout complete', () => {
    test('Render correct', () => {

        const component = TestRenderer.create(
            <Logo className="siteLogo" siteName="netflixroulete" />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

