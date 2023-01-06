import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import ShopProvider from '../store/shopContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key={1}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopProvider>
  );
}
