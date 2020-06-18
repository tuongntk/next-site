import { AppProps } from 'next/app';
import NProgress from '@components/nprogress';
import '../styles/font.css';
import '../styles/index.css';
import '../styles/utility.css';
import '../styles/nprogress.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NProgress />
    </>
  );
}
