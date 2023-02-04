import Image from "next/image";
import Logo from "@/public/images/PFG_LOGO3.svg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const current = router.query;
  const pathname = router.pathname;
  const asPath = router.asPath;

  console.log(`router`, router);
  console.log(`current`, current);
  console.log(`pathname`, pathname);
  console.log(`asPath`, asPath);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const navItems = [
    {
      text: `Home`,
      link: `/`,
    },
    {
      text: `Puzzle`,
      link: `/category/puzzle/`,
    },
    {
      text: `Arcade`,
      link: `/category/arcade/`,
    },
    {
      text: `Shooting`,
      link: `/category/shooting/`,
    },
    {
      text: `Strategy`,
      link: `/category/strategy/`,
    },
    {
      text: `Sports`,
      link: `/category/sports/`,
    },
    {
      text: `Racing`,
      link: `/category/racing/`,
    },
    {
      text: `Match 3`,
      link: `/category/match-3/`,
    },
    {
      text: `Adventure`,
      link: `/category/adventure/`,
    },
    {
      text: `Simulation`,
      link: `/category/simulation/`,
    },
    {
      text: `Casual`,
      link: `/category/casual/`,
    },
    {
      text: `.IO`,
      link: `/category/io/`,
    },
    {
      text: `Girl`,
      link: `/category/girl/`,
    },
  ];

  return (
    <header className="site-header bg-rose-400 shadow shadow-rose-400/40">
      <div className="container relative flex items-center justify-between xl:flex-row">
        <div className="branding m-4">
          <Link href={`/`}>
            <Image
              src={Logo}
              width="256"
              height="50"
              className="w-40 xl:w-56"
              alt="PlayFreeGamer Logo"
            />
            <span className="sr-only">PlayFreeGamer</span>
          </Link>
        </div>
        <div>
          <button className="search-icon p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button onClick={toggleMenu} className="m-4 p-2 text-white xl:hidden">
            {!menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`${
            !menuOpen ? `hidden` : `flex w-full`
          } absolute left-0 top-16 flex-col justify-between rounded-b-3xl bg-rose-400 p-2 xl:static xl:flex xl:flex-row xl:rounded-full`}
        >
          <ul className="mb-6 grid grid-cols-3 items-center gap-2 text-center font-bold text-white xl:mb-0 xl:ml-2 xl:flex xl:flex-wrap xl:gap-y-3">
            {navItems.map((i) => (
              <li key={i.text}>
                <Link
                  className={`block whitespace-nowrap rounded-full ${
                    !(i.link === asPath || i.link === `${asPath}/`)
                      ? "bg-rose-300 text-rose-700"
                      : "bg-rose-50 text-rose-600"
                  } p-4 shadow xl:px-4 xl:py-1`}
                  href={i.link}
                >
                  {i.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
