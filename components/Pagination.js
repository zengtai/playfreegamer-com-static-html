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

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const prevAvailable = currentPage - 1 > 0;
  const nextAvailable = currentPage + 1 <= totalPages;

  return (
    <nav className="mx-2 my-10 flex items-center justify-between gap-8 font-bold xl:mb-12 xl:justify-center">
      <button
        {...(!prevAvailable ? { disabled: true } : null)}
        className={`rounded-full ${
          prevAvailable ? `bg-slate-400` : `bg-slate-200`
        } px-4 py-2 uppercase text-white`}
      >
        {prevAvailable ? (
          <Link href={renderPageLink(currentPage - 1)}>Prev</Link>
        ) : (
          `Prev`
        )}
      </button>
      <ol className="page-nav hidden gap-4 text-slate-700 xl:flex xl:items-center xl:text-center">
        {pages.map((pageNumber, i) =>
          pageNumber === dotts ? (
            <li key={i}>{pageNumber}</li>
          ) : pageNumber === currentPage ? (
            <li
              className={`rounded-full bg-slate-300 text-lg text-slate-700`}
              key={i}
            >
              <span>{pageNumber}</span>
            </li>
          ) : (
            <li key={i}>
              <Link
                className="text-slate-500"
                href={renderPageLink(pageNumber)}
              >
                {pageNumber}
              </Link>
            </li>
          )
        )}
      </ol>
      <button
        {...(!nextAvailable ? { disabled: true } : null)}
        className={`rounded-full ${
          nextAvailable ? `bg-slate-400` : `bg-slate-200`
        } px-8 py-2 uppercase text-white`}
      >
        {nextAvailable ? (
          <Link href={renderPageLink(currentPage + 1)}>Next</Link>
        ) : (
          `Next`
        )}
      </button>
    </nav>
  );
}
