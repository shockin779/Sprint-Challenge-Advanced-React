import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('successfully mounts', () => {
  const wrapper = rtl.render(<App />);
  console.log(wrapper.debug())
});
