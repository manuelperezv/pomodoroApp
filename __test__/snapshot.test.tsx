import { render } from '@testing-library/react';

import App from '../src/pages/index';

it('renders the app', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

