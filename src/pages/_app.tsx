import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import Footer from 'components/footer';
import Nav from 'components/nav';
import AppLayout from 'components/appLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </AppLayout>
  );
}
