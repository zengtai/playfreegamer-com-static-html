import { ADS_SLOT_ID, SHOW_AD, ADSENSE_ID } from "@/lib/constants";
import Script from "next/script";
import AdSense from "./AdSense";
import GameList from "./GameList";
// import GameListItem from "./GameListItem";
import ListTitle from "./ListTitle";
import Pagination from "./Pagination";

export default function PaginationPage({
  pageInfo,
  currentPage,
  totalGames,
  perPage,
  games,
}) {
  // console.log("🚀 ~ file: PaginationPage.js:14 ~ pageInfo", pageInfo);

  const star = () => (
    <svg
      width="20"
      height="20"
      id="__star"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.19429 1.51565C9.51142 0.828115 10.4886 0.828117 10.8057 1.51565L12.796 5.83064C12.9253 6.11086 13.1908 6.30379 13.4973 6.34012L18.2161 6.89962C18.968 6.98876 19.2699 7.9181 18.7141 8.43217L15.2253 11.6585C14.9987 11.868 14.8973 12.1802 14.9575 12.4828L15.8835 17.1436C16.0311 17.8862 15.2406 18.4606 14.5799 18.0908L10.4334 15.7698C10.1641 15.619 9.83588 15.619 9.56661 15.7698L5.42013 18.0908C4.75944 18.4606 3.9689 17.8862 4.11646 17.1436L5.04255 12.4828C5.10269 12.1802 5.00126 11.868 4.7747 11.6585L1.28594 8.43217C0.730055 7.9181 1.03202 6.98876 1.7839 6.89962L6.50274 6.34012C6.80917 6.30379 7.07473 6.11085 7.20398 5.83064L9.19429 1.51565Z"
        fill="currentColor"
      />
    </svg>
  );

  const randomKey = `${pageInfo.slug}-${Math.random()}`;
  return (
    <>
      {SHOW_AD && (
        <Script
          id="ads-init"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      )}
      <div className="hidden">{star()}</div>
      <div className="container">
        {currentPage === 1
          ? SHOW_AD && <AdSense slot={ADS_SLOT_ID.CATEGORY} key={randomKey} />
          : null}
        {/* <header className="m-4 flex flex-col items-center">
          <h1 className="mb-2 text-2xl font-black text-rose-500 xl:mx-8 xl:mt-8">
            {pageInfo.name} Games
          </h1>
          <p className="max-w-3xl text-sm leading-6 text-gray-500">
            {pageInfo.description}
          </p>
        </header> */}
        <ListTitle
          title={`${pageInfo?.name} Games`}
          description={pageInfo?.description}
        />
        {/* {currentPage === 1 ? <AdSense slot={ADS_SLOT_ID.CATEGORY} /> : null} */}
        {/* 列表 */}

        <GameList items={games} />

        {perPage < totalGames ? (
          <Pagination
            totalItems={totalGames}
            currentPage={currentPage}
            itemsPerPage={perPage}
            renderPageLink={(page) =>
              `/category/${pageInfo.slug}/${page === 1 ? `` : page + `/`}`
            }
          />
        ) : null}
      </div>
    </>
  );
}
