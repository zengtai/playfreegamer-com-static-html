import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/nprogress.css";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const Router = useRouter();
  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = (url) => {
      console.log(`${url}`);
      NProgress.done();
    };
    const handleDone = (url) => {
      // gtag.pageview(url);
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleDone);
    Router.events.on("routeChangeError", handleStop);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleDone);
      Router.events.off("routeChangeError", handleStop);
    };
  }, [Router.events]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
