import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="generator" content={new Date().toISOString()} />
      </Head>
      <body className="bg-cyan-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
