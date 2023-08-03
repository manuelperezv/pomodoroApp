import App from '../src/pages/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
describe('home', () => {
  it.skip('renders the app component', () => {
    const initialState = { output: 10 };
    render(
      <Provider store={store()}>
        <App />
      </Provider>,
    );
    const heading = screen.getByRole('heading', {
      name: /''/,
    });
    expect(heading).toBeInTheDocument();
  });
});





