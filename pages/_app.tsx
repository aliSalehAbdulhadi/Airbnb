import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
