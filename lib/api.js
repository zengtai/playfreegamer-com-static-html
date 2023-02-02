// Fetcher
async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { errors, data } = await res.json();
  if (errors) {
    console.error(errors);
  }

  return data;
}

// 首页数据（全部游戏列表）
export const getDataForHome = async (params) => {
  const { page, limit } = params;
  const { games, total } = await fetchAPI(
    `
    query dataForHome ($page: Int, $limit: Int) {
      games: Games (page: $page, limit: $limit, sort: "-featured", filter: { status: { _eq: "published" } }) {
        title
        slug
        category { name, slug }
        played,
        rating,
        appid
      }
      total: Games_aggregated {
        countDistinct { appid }
      }
    }
  `,
    { variables: { limit, page } }
  );
  return { games, total: total[0].countDistinct.appid };
};

// 按分类名获取游戏列表

// 按游戏 id 获取详情数据和相关游戏列表
