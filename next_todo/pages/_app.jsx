import GitHeader from './components/Git/Header/GitHeader';
import '../styles/globals.scss';

function NextTodo({ Component, pageProps }) {
  return (
    <>
      <GitHeader />
      <Component {...pageProps} />
    </>
  );
}

export default NextTodo;
