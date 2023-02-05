import Image from "./Image";
import getIconUrl from "@/utils/getIconUrl";
import getFormatedNum from "@/utils/getFormatedNum";
import Stars from "./Stars";
import Link from "next/link";
export default function GameListItem({ item }) {
  const i = item;
  return (
    <li key={i.slug} className="game-list-item">
      <Link href={`/${i.slug}`} title={i.title}>
        <Image
          src={getIconUrl(i.appid)}
          alt={i.title}
          width={`100`}
          height={`100`}
          className={`list-image`}
        />
        <div className="list-meta">
          <div className="title">{i.title}</div>
          <div className="category">{i?.category?.name}</div>

          <div className="rating">
            {/* { Stars(i?.rating) } */}
            <Stars rating={i?.rating} />
            <span className="ml-1 text-lg font-black text-orange-600">
              {(i?.rating === 5 ? i?.rating - 0.1 : i?.rating).toFixed(1)}
            </span>
          </div>
        </div>
        <div className="play">
          <div className="played">{getFormatedNum(i.played) + ` played`}</div>
          <button className="cta">Play</button>
        </div>
      </Link>
    </li>
  );
}
