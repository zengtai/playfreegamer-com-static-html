import Link from "next/link";
import usePagination from "@/hooks/usePagination";

export const dotts = `...`;

export default function Pagination({
  totalItems,
  currentPage,
  itemsPerPage = 18,
  renderPageLink,
}) {
  const pages = usePagination(totalItems, currentPage, itemsPerPage);

  return (
    <nav className="mx-2 my-10 flex items-center justify-between gap-8 font-bold xl:mb-12 xl:justify-center">
      <button
        className="rounded-full bg-rose-200 px-4 py-2 uppercase text-white"
        disabled
      >
        Prev
      </button>
      <ol className="hidden gap-6 text-rose-700 xl:flex xl:items-center">
        {pages.map((pageNumber, i) =>
          pageNumber === dotts ? (
            <span
              key={i}
              className="rounded-full px-4 py-2 text-sm font-semibold text-black"
            >
              {pageNumber}
            </span>
          ) : (
            <Link
              key={i}
              href={renderPageLink(pageNumber)}
              className={`${
                pageNumber === currentPage ? "text-rose-700" : "text-rose-500"
              } rounded-full bg-rose-300 p-2 text-lg`}
            >
              {pageNumber}
            </Link>
          )
        )}
      </ol>
      <button className="rounded-full bg-rose-400 px-8 py-2 uppercase text-white">
        Next
      </button>
    </nav>
  );
}
