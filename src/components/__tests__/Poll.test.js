import React from 'react';
import renderer from 'react-test-renderer';
import Poll from "../Poll";

it('renders correctly', () => {
    const tree = renderer
        .create(<Poll />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});