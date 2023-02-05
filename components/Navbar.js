import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ menuOpen }) {
  const router = useRouter();
  const current = router.query;
  const pathname = router.pathname;
  const asPath = router.asPath;

  console.log(`router`, router);
  console.log(`current`, current);
  console.log(`pathname`, pathname);
  console.log(`asPath`, asPath);

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
    <nav
      className={`${
        !menuOpen ? `hidden` : `flex w-full`
      } absolute left-0 top-16 z-10 flex-col justify-between rounded-b-3xl bg-rose-400 p-2 xl:static xl:flex xl:flex-row xl:rounded-full`}
    >
      <ul className="mb-6 grid grid-cols-3 items-center gap-2 text-center font-bold text-white xl:mb-0 xl:ml-2 xl:flex xl:flex-wrap xl:gap-y-3">
        {navItems.map((i) => (
          <li key={i.text}>
            <Link
              className={`block whitespace-nowrap rounded-full ${
                !(
                  i.link === asPath ||
                  i.link === `${asPath}/` ||
                  (i.link !== `/` && asPath.match(i.link))
                )
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
  );
}
