import Layout from "@/components/Layout";
import { SITE_META } from "@/lib/constants";
import Head from "next/head";
import PaginationPage from "@/components/PaginationPage";
import {
  getAllCategoryWithSlug,
  getDataByCategorySlug,
  getTotalCount,
} from "@/lib/api";

export const PER_PAGE = 18;

export default function PaginatedPage({
  pageInfo,
  games,
  currentPage,
  totalGames,
}) {
  console.log(`games`, games);
  console.log(`currentPage`, currentPage);
  console.log(`totalGames`, totalGames);
  return (
    <>
      <Head>
        <title>{`${pageInfo.name} Games - Page ${currentPage} | ${SITE_META.NAME}`}</title>
      </Head>
      <PaginationPage
        pageInfo={pageInfo}
        games={games}
        currentPage={currentPage}
        totalGames={totalGames}
        perPage={PER_PAGE}
      />
    </>
  );
}

export async function getStaticProps(ctx) {
  const page = Number(ctx.params?.page) || 1;
  const slug = ctx.params?.slug;
  console.log(`category`, slug);
  const { category, games, total } = await getDataByCategorySlug({
    slug,
    limit: PER_PAGE,
    page,
  });

  if (!games.length) {
    return {
      notFound: true,
    };
  }

  if (page === 1) {
    return {
      redirect: {
        destination: `/category/${slug}`,
        permanent: false,
      },
    };
  }
  console.log(`total`, total);

  return {
    props: {
      games,
      totalGames: total,
      currentPage: page,
      pageInfo: category[0],
    },
  };
}

export async function getStaticPaths() {
  const categorySlugs = await getAllCategoryWithSlug();
  const paths = [];
  categorySlugs.map(async (i) => {
    const total = await getTotalCount(i);
    const slug = i.slug;
    paths.concat(
      Array.from({ length: total }, (_, j) => ({
        params: { slug, page: j + 2 },
      }))
    );
  });
  return {
    paths,
    fallback: `blocking`,
  };
}
