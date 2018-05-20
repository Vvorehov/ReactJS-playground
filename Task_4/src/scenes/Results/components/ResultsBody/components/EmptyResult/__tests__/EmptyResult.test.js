import React from "react";
import EmptyResult from "../EmptyResult";
import TestRenderer from 'react-test-renderer';

describe('EmptyResult layout complete', () => {

    it('ResultsBody Render correct EmptyResult', () => {

        const component = TestRenderer.create(
            <EmptyResult />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

