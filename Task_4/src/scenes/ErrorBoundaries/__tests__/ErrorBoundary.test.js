import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import renderer from 'react-test-renderer';
import { Logo } from "../../Logo";

describe('Error component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <ErrorBoundary>
        <Logo />
      </ErrorBoundary>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});