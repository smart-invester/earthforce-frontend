import React from 'react';
import About from './About.js';
import renderer from 'react-test-renderer';
it('About renders correctly', () => {
    const tree = renderer
        .create(<About />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});