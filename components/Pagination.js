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
  console.log(`pages`, pages);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const prevAvailable = currentPage - 1 > 0;
  const nextAvailable = currentPage + 1 <= totalPages;

  return (
    <nav className="mx-2 my-10 flex items-center justify-between gap-8 font-bold xl:mb-12 xl:justify-center">
      <button
        {...(prevAvailable ? { disabled: true } : null)}
        className={`rounded-full ${
          prevAvailable ? `bg-rose-400` : `bg-rose-200`
        } px-4 py-2 uppercase text-white`}
      >
        {prevAvailable ? (
          <Link href={renderPageLink(currentPage - 1)}>Prev</Link>
        ) : (
          `Prev`
        )}
      </button>
      <ol className="hidden gap-6 text-rose-700 xl:flex xl:items-center">
        {pages?.map((pageNumber, i) =>
          pageNumber === dotts ? (
            <li key={i}>{pageNumber}</li>
          ) : (
            <li key={i}>
              {pageNumber === currentPage ? (
                <span
                  className={`rounded-full bg-rose-300 p-2 text-lg text-rose-700`}
                >
                  {pageNumber}
                </span>
              ) : (
                <Link
                  className="p-2 text-rose-500"
                  href={renderPageLink(pageNumber)}
                >
                  {pageNumber}
                </Link>
              )}
            </li>
          )
        )}
      </ol>
      <button
        {...(!nextAvailable ? { disabled: true } : null)}
        className={`rounded-full ${
          nextAvailable ? `bg-rose-400` : `bg-rose-200`
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
