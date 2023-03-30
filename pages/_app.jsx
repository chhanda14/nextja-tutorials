import MainLayout from '../src/components/layout/main-layout';
import '../styles/globals.css';
// import { AppProps } from 'next/app';
// import '../styles/general.sass';
// import '../styles/general.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
