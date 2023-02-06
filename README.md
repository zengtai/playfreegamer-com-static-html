# PlayFreeGamer.com - Static HTML

这是为 PlayFreeGamer.com 创建的基于 Next.js 的静态版本。

## 注意

由于是最早完成的站，数据跟后期的不通（主要是游戏的分类设置不同），需要单独生成数据使用。

- 保留游戏分类
- 保留或转发原路径规则

---

## 游戏数据

- ID
- 标题
- 分类
- 路径名
- 图标地址
- 游戏地址
- 游戏介绍
- 创建时间
- 推荐
- 评分
- 玩家数/游戏次数

如：
ZumaMarbles

- ID：{ZumaMarbles}
- 标题：{ZumaMarbles}
- 分类：Puzzles
- 路径名：{zumamarbles}
- 图标地址：https://cdn.iwantalipstick.com/gameicon2/jpg/{ZumaMarbles}.jpg
- 游戏地址：https://uptapapi.uptap.com/h5Game/?type=Game&platform=uptapbox&appid={ZumaMarbles}
- 游戏介绍：The main objective of the game is to match 3 like marbles by shooting them from the cannon. Match more than 3 and you will get power ups, that you can match again and destroy a wide range of marbles. Match them all before they reach the tunnel, to progress into the next level.
- 创建时间：2020-06-26T18:11:00
- 推荐：否
- 评分：4
- 玩家数/游戏次数：464

---

## 路径规则

- 分类页路径：/category/games/{分类名}
- 详情页路径：/{游戏 id}
- 游戏页路径：/{游戏 id}/play

安装组件 `npm i`

运行 `npm run dev`

构建 `npm run build`，构建正式版本前需确定位于 `lib/constants.js` 的 `DEV_MODE` 值为 `false`，否则 Adsense 广告单元会添加 `data-adtest="on"`

---

## 页面组成

- 首页
- 分类页
- 详情页
- 游戏页
- 搜索结果
- 404
- 关于
- 法律（隐私协议、使用条款）

---

## 组件

- [x] 页眉（导航）
- [x] 页底
- 页面标题
- 列表标题
- 列表
- [x] 列表项
- [x] 分页~~列表~~页面
- [x] 分页导航
- 无限加载列表
- 面包屑
- [x] 游戏详情
- 图标
- 广告
- 统计
- [x] 搜索
- 玩游戏\*
