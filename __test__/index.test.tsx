import App from '../src/pages/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
describe('home', () => {
  it('renders the app component', () => {
    const initialState = { output: 10 };
    let store = initialState;
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const heading = screen.getByRole('heading', {
      name: /''/,
    });
    expect(heading).toBeInTheDocument();
  });
});



