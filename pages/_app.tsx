import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import '/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
