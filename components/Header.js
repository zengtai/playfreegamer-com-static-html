import Image from "next/image";
import Logo from "@/public/images/PFG_LOGO3.svg";
import Link from "next/link";
import { useState } from "react";

export default function Header(params) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
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
      <div className="container flex flex-col items-center justify-between xl:flex-row">
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
        <button
          onClick={handleClick}
          className="absolute right-0 top-1 m-4 text-white xl:hidden"
        >
          {!isOpen ? (
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
        <nav
          className={`${
            !isOpen ? `hidden` : `flex w-full`
          } absolute top-16 mx-4 flex-col justify-between rounded-b-3xl bg-rose-400 p-2 xl:static xl:flex xl:flex-row xl:rounded-full`}
        >
          <ul className="mb-6 grid grid-cols-3 items-center gap-2 text-center font-bold text-white xl:mb-0 xl:ml-2 xl:flex xl:flex-wrap xl:gap-y-3">
            {navItems.map((i, index) => (
              <li key={i.text}>
                <Link
                  className={`block whitespace-nowrap rounded-full ${
                    index > 0
                      ? "bg-rose-300 text-rose-700"
                      : "bg-rose-50 text-rose-600"
                  } px-4 py-1 shadow`}
                  href={i.link}
                >
                  {i.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between rounded-full border bg-white p-2 shadow xl:my-0 xl:hidden xl:border-0">
            <input className="ml-2 grow outline-none xl:hidden" />
            <button className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-6 w-6 text-rose-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
