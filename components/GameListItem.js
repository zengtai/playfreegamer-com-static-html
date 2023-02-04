import Image from "./Image";
import getIconUrl from "@/utils/getIconUrl";
import getFormatedNum from "@/utils/getFormatedNum";
import Stars from "./Stars";
import Link from "next/link";
export default function GameListItem({ item }) {
  const i = item;
  return (
    <li
      key={i.slug}
      className="rounded-md border border-rose-100 bg-white p-3 shadow shadow-rose-50 xl:p-4"
    >
      <Link href={`/${i.slug}`}>
        <Image
          src={getIconUrl(i.appid)}
          alt={i.title}
          width={`100`}
          height={`100`}
          className={`mx-auto mb-2 aspect-square w-24 rounded-2xl object-cover shadow-md`}
        />
        <div className="meta mx-2 mb-2 text-center">
          <div className="mb-1 text-base font-extrabold leading-5 text-rose-500">
            {i.title}
          </div>
          <div className="mb-2 text-xs font-bold uppercase text-red-900">
            {i?.category?.name}
          </div>

          <div className="rating mb-2 -ml-1 flex items-center justify-center">
            {Stars(i?.rating)}
            <span className="ml-1 text-lg font-black text-orange-600">
              {(i?.rating === 5 ? i?.rating - 0.1 : i?.rating).toFixed(1)}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-1 xl:flex-row">
          <div className="played text-sm text-gray-400">
            {getFormatedNum(i.played) + ` played`}
          </div>
          <button className="rounded-full border-2 border-rose-200 bg-rose-100 to-white px-4 py-2 text-sm font-bold text-rose-500 shadow shadow-rose-50">
            Play
          </button>
        </div>
      </Link>
    </li>
  );
}
