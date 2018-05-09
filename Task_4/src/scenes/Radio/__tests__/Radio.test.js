import React from "react";
import Radio from "../Radio";
import TestRenderer from 'react-test-renderer';

describe('Radio layout complete', () => {
    test('Render correct', () => {

        const component = TestRenderer.create(
            <Radio name="search-by" label="Title" value="title" isChecked={true}/>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

