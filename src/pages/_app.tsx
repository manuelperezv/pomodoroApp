import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { store, wrapper } from '../store/store';
import { Provider } from 'react-redux';
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(App);

