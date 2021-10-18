import '../styles/global/globals.scss';
import type { AppProps } from 'next/app';
import Header from '../components/Todo/Header/Header';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default wrapper.withRedux(MyApp);
