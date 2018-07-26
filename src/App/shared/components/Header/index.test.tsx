import * as React from 'react';
import Header from './index';

import * as renderer from 'react-test-renderer';

it('renders Header without crashing', () => {
  const rendered = renderer.create(<Header />).toJSON();
  expect(rendered).toBeTruthy();
});
