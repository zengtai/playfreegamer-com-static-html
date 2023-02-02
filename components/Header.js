import Image from "./Image";
import Logo from "@/public/images/PFG_LOGO.svg";

export default function Header(params) {
  return (
    <header className="site-header border-b border-b-pink-500 bg-gradient-to-b from-rose-300 to-rose-400">
      <div className="container">
        <div className="branding m-4">
          <Image
            src={Logo}
            width="256"
            height="50"
            className="w-44 xl:w-56"
            alt="PlayFreeGamer Logo"
          />
          <span className="sr-only">PlayFreeGamer</span>
        </div>
        <button className="hidden">Menu</button>
        <nav className="flex flex-col xl:flex-row justify-between m-4 p-2 rounded-3xl xl:rounded-full">
          <ul className="xl:flex items-center grid grid-cols-3 gap-2 xl:gap-3 text-center mb-6 xl:mb-0 xl:ml-2 text-white font-bold">
            <li className="px-4 py-2 rounded-full shadow-md">
              <a href="#">Home</a>
            </li>
            <li className="px-4 py-2 rounded-full shadow-md">
              <a href="#">Casual</a>
            </li>
            <li className="px-4 py-2 rounded-full shadow-md">
              <a href="#">Puzzles</a>
            </li>
            <li className="px-4 py-2 rounded-full shadow-md">
              <a href="#">Shooting</a>
            </li>
            <li className="px-4 py-2 rounded-full shadow-md">
              <a href="#">Action</a>
            </li>
            <li className="px-4 py-2 rounded-full shadow-md">
              <a href="#">Strategy</a>
            </li>
            <li className="px-4 py-2 rounded-full shadow-md">
              <a href="#">Sports</a>
            </li>
            <li className="px-4 py-2 rounded-full shadow-md">
              <a href="#">Defense</a>
            </li>
          </ul>
          <div className="hidden items-center border border-orange-300 xl:border-0 rounded-full bg-white justify-between xl:my-0 p-2">
            <input className="grow ml-2 outline-none xl:hidden" />
            <button className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 text-rose-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
