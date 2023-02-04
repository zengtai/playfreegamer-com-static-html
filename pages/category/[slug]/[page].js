import Layout from "@/components/Layout";
import { SITE_META } from "@/lib/constants";
import Head from "next/head";
import PaginationPage from "@/components/PaginationPage";
import {
  getAllCategoryWithSlug,
  getDataByCategorySlug,
  getTotalCount,
} from "@/lib/api";

export default function PaginatedPage({ games, currentPage, totalGames }) {
  return (
    <Layout>
      <Head>
        <title>{`Page ${currentPage} | ${SITE_META.NAME}`}</title>
      </Head>
      <PaginationPage
        products={products}
        currentPage={currentPage}
        totalProducts={totalProducts}
        perPage={PER_PAGE}
      />
    </Layout>
  );
}

export async function getStaticProps(params) {
  const page = Number(params?.page) || 1;
  const category = params.slug;
  const { games, total } = await getDataByCategorySlug({
    category,
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
        desination: "/category",
        permanent: false,
      },
    };
  }

  return {
    props: {
      games,
      totalGames: total,
      currentPage: page,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getAllCategoryWithSlug();
  const paths = categories.map(async (i) => {
    const total = await getTotalCount(i.slug);
    total.map((j) => ({
      params: {
        slug: i,
        page: j,
      },
    }));
  });
  return {
    paths,
    fallback: `blocking`,
  };
}
