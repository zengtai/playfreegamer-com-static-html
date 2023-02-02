/* 1. 网站基本信息 */
export const SITE_META = {
  NAME: `PlayFreeGamer`, // 网站名称
  DOMAIN: `playfreegamer.com`, // 网站域名
  URL: `https://www.playfreegamer.com`, // 网站主网址
};

/* 2. 数据获取设置 */
export const RENEW_DATA_FROM_REMOTE = false; // 设置为 true 强制获取远程源最新数据。需要获取远程数据时使用
export const RENEW_DATA_LOCAL = false; // 设置为 true 强制更新本地数据。需要修改本地数据时使用

/* 3. 统计参数 */
export const GA_ID = ``; // Google Analytics ID

/* 4. 广告参数 / 设置 */
export const DEV_MODE = true; // 设置 data-adtest="on"

export const ADSENSE_ID = `ca-pub-9209477879340784`; // Google AdSense ID,必须与域名匹配
// 广告ID
export const ADS_SLOT_ID = {
  HOME: ``, // 首页广告ID
  CATEGORY: ``, // 分类页(含全部游戏页)广告ID
  DETAIL: ``, // 详情页广告ID
};

/* 5. 游戏链接参数 */
export const CHANNEL = `uptapbox`; // 渠道参数
export const GAME_DOMAIN = `https://cdn.playfreegamer.com`; // 游戏域名
export const GAME_PATH = GAME_DOMAIN + `/newgames/minigame.html?platform=` + CHANNEL + `&appid=`; // 游戏路径

/* 6. 游戏图片参数 */
export const IMAGE_PATH = `https://cdn.iwantalipstick.com/gameicon2/`; // 图片基础域名+路径
export const IMAGE_FORMAT = `jpg`; // 图片默认格式,目前支持jpg/png/webp/avif

/* 7. 游戏选项 */
export const SELECTED_GAMES = []; // 选取游戏
export const EXCLUDED_GAMES = []; // 排除游戏，这个情况很少，应该改成真假判断
// 推荐游戏
export const FEATURED_GAMES = []; // 在主要列表中优先显示
export const TOP_GAMES = [
  `JumpSmash`,
  `BoardTheTrain`,
  `TrafficRun`,
  `LostInLust`,
  `MyHome`,
  `CrazyKnife`,
  `RoofRunner`,
  `CrazyMoto`,
  `PowerShooter`,
  `FireTheGun`,
  `ZombieSurvival`,
  `ColorBall3D`,
  `FeverRacing`,
  `SpinTheMaze`,
  `MrBullet`,
]; // 首推游戏

/* 8. A/B测试选项 */
// 没有实现
// 考虑的是随机替换图片路径参数
