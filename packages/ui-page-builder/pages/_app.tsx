import type { AppProps } from 'next/app'
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async src="https://cdn.builder.io/js/fiddle"></script>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/antd/dist/antd.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}
