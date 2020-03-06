import React from 'react';
import Relief from './Relief.js';
import renderer from 'react-test-renderer';
it('Relief renders correctly', () => {
  const tree = renderer
    .create(<Relief />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});