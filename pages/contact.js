import { SITE_META } from "@/lib/constants";
import Head from "next/head";

export default function Contact(params) {
  const content = `
    <h2>Contact Information</h2><p>Address: FLAT/RM 1506,15/F,LUCKY CENTER,NO.165-171 WAN CGAI ROAD,WAN CHAI,HK</p><p>Email: contact@uptap.com</p>
  `;
  return (
    <>
      <Head>
        <title>{`Contact | ${SITE_META.NAME}`}</title>
      </Head>
      <div className="page container">
        <h1 className="m-4 text-2xl font-black text-rose-500 xl:mx-8 xl:mt-8">
          Contact
        </h1>
        <div
          className="m-4 text-sm text-red-900 xl:mx-8"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
}
