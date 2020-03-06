import React from 'react';
import Favorites from './Favorites.js';
import renderer from 'react-test-renderer';
it('Favorites renders correctly', () => {
  const tree = renderer
    .create(<Favorites />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});