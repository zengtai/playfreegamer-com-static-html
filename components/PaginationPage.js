import Pagination from "./Pagination";

export default function PaginationPage({
  currentPage,
  totalGames,
  perPage,
  games,
}) {
  return (
    <div>
      <h1>Page {currentPage}</h1>
      {/* 列表 */}

      <Pagination
        totalItems={totalGames}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/catgory/$slug}/${page}`}
      />
    </div>
  );
}
