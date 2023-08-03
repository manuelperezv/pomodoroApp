import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ClockComponent from '.';

describe('testing clock component', () => {
  it('show the clock component', () => {
    const { container } = render(<ClockComponent />);

    expect(container).toHaveTextContent('555');
  });
});

