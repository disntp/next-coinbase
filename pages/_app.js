import "../styles/globals.css";
import { ContextListProvider } from "../utils/contextList";
import Layout from "../components/Layout";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextListProvider>
        <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} appId={process.env.NEXT_PUBLIC_APP_ID}>
          <Layout>
          <Head>
        <link rel="icon" href="/currency.png" />
      </Head>
            <Component {...pageProps} />
          </Layout>
        </MoralisProvider>
      </ContextListProvider>
    </>
  );
}

export default MyApp;
