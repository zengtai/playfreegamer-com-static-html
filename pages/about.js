import { SITE_META } from "@/lib/constants";
import Head from "next/head";
import PageTitle from "@/components/PageTitle";

export default function About(params) {
  const content = `
    <p>Welcome to PlayFreeGamer.com! We're so glad you're here! Our website is the perfect place to enjoy high-quality online gaming, with a variety of hyper casual games that are perfect for killing time when you're bored. But that's not all – we also have a wide range of adventure, puzzle, and strategy games that are almost endless, so you won't get bored.</p>
    <p>We're proud to be the developers and publishers of our own HTML5 games, and we currently have over 240 games for you to enjoy – all free, and all accessible from any device or browser. From Fire The Gun, Fever Racing, Board The Train, Crazy Knife, to Traffic Run, there's something for everyone!</p>
    <p>To make it even easier for you to find the perfect game, we've divided our games into categories, so you can quickly find what you're looking for. And the best part? Our games are completely free, safe, and secure, so you don't have to worry about paying for anything.</p>
    <p>If you have any feedback for us, please don't hesitate to reach out – we'd love to hear from you! And if you want to stay up-to-date with all our latest content and news, be sure to follow us on our social media platforms! Have a great time on our platform!</p>
  `;
  return (
    <>
      <Head>
        <title>{`About | ${SITE_META.NAME}`}</title>
      </Head>
      <div className="page container">
        <PageTitle title={`About`} />
        <div
          className="m-4 text-sm text-red-900 xl:mx-8"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
}
