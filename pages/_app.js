import "../styles/globals.css";
import { ContextListProvider } from "../utils/contextList";
import Layout from "../components/Layout";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
// import ErrorBoundary from "../components/ErrorBoundary";
import { BootstrapScript } from "../components/BootstrapScript";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    // <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ContextListProvider>
      <MoralisProvider
        serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
        appId={process.env.NEXT_PUBLIC_APP_ID}
      >
        <Layout>
          <Head>
            <link rel="icon" href="/currency.png" />
          </Head>
          {/* <Script
            id="bootstrap-cdn"
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          /> */}
          {/* <BootstrapScript /> */}
          {/* <Script
              src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
              integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
              crossOrigin="anonymous"
            />
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
            crossOrigin="anonymous"
          /> */}
          <Component {...pageProps} />
        </Layout>
      </MoralisProvider>
    </ContextListProvider>
    // </ErrorBoundary>
  );
}

export default MyApp;
