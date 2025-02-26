/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
// @ts-expect-error TS(2307): Cannot find module '../App' or its corresponding t... Remove this comment to see the full error message
import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
