import Image from "./Image";
import Logo from "@/public/images/PFG_LOGO.svg";

export default function Header(params) {
  return (
    <header className="site-header border-b border-b-cyan-500 bg-cyan-400">
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
        <nav className="flex flex-col xl:flex-row justify-between bg-cyan-700 m-4 p-2 rounded-3xl xl:rounded-full shadow-lg">
          <ul className="xl:flex items-center grid grid-cols-3 gap-2 text-center mb-6 xl:mb-0 xl:ml-2 text-white">
            <li className="p-2 bg-cyan-600 rounded-2xl border-2 border-white/20 shadow-md">
              <a href="#">Home</a>
            </li>
            <li className="p-2 bg-cyan-600 rounded-2xl border-2 border-white/20 shadow-md">
              <a href="#">Casual</a>
            </li>
            <li className="p-2 bg-cyan-600 rounded-2xl border-2 border-white/20 shadow-md">
              <a href="#">Puzzles</a>
            </li>
            <li className="p-2 bg-cyan-600 rounded-2xl border-2 border-white/20 shadow-md">
              <a href="#">Shooting</a>
            </li>
            <li className="p-2 bg-cyan-600 rounded-2xl border-2 border-white/20 shadow-md">
              <a href="#">Action</a>
            </li>
            <li className="p-2 bg-cyan-600 rounded-2xl border-2 border-white/20 shadow-md">
              <a href="#">Strategy</a>
            </li>
            <li className="p-2 bg-cyan-600 rounded-2xl border-2 border-white/20 shadow-md">
              <a href="#">Sports</a>
            </li>
            <li className="p-2 bg-cyan-600 rounded-2xl border-2 border-white/20 shadow-md">
              <a href="#">Defense</a>
            </li>
          </ul>
          <div className="flex items-center border xl:border-0 rounded-full bg-white justify-between xl:my-0 p-2">
            <input className="grow ml-2 outline-none xl:hidden" />
            <button className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 text-sky-900"
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
