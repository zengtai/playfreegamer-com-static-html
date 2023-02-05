import { SITE_META } from "@/lib/constants";
import Head from "next/head";

export default function About(params) {
  const content = `
    <p>Welcome to PlayFreeGamer.com! Our website is the leading platform for free online gaming, hosting high-quality hyper casual games for you to enjoy by killing time when you are bored. Along with more complex adventure and puzzle strategy games, that can save automatically and are almost endless so you won’t get bored. </p>
    <p>We develop and publish our own H5 games, and currently we have more than a 100, which you can freely play, without requiring you to download. Our games can be played on any device or a browser. Such games include Solitaire Classic, Fly&Pass, Board The Train, Defense Tower, Idle Restaurant Tycoon.</p>
    <p>The games are divided in categories, which is therefore easy for you and players all around the world to have fun with many puzzle, strategy, card or action games. Our games are entirely free and won’t require you to pay any services, as they are safe and secure.</p>
    <p>Should you have any feedback for us, please do not hesitate to reach out! Have fun on our platform and make sure you follow us for more up to date content and news on our socials!</p>
  `;
  return (
    <>
      <Head>
        <title>{`About | ${SITE_META.NAME}`}</title>
      </Head>
      <div className="page container">
        <h1 className="m-4 text-2xl font-black text-rose-500 xl:mx-8 xl:mt-8">
          About
        </h1>
        <div
          className="m-4 text-sm text-red-900 xl:mx-8"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
}
