import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../src/pages/index';
import { store } from '../src/store/store';

it.skip('renders the app', () => {
  const { container } = render(
    <Provider store={store()}>
      <App />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});





