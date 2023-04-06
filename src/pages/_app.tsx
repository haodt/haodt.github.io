import type { AppProps } from "next/app";
import Head from "next/head";
import { Application } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hi!</title>
        <meta
          name="description"
          content="Constantly evolving, consistently delivering"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Application>
        <Component {...pageProps} />
      </Application>
    </>
  );
}
