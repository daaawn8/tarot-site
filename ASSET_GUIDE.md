# 资产替换指南

这个项目已经预留了自定义图标、浏览器图标和牌面图片路径。你只需要把自己设计好的文件按下面的名字放进去即可。

## 浏览器图标

当前页面读取：

- `assets/favicon/favicon.svg`
- `assets/favicon/apple-touch-icon.svg`

如果你要换成自己的设计，直接替换这两个文件即可。

## 大阿卡纳图标

大阿卡纳图标放在：

- `assets/icons/major/`

示例：

- 愚者：`assets/icons/major/fool.svg`
- 魔术师：`assets/icons/major/magician.svg`
- 女祭司：`assets/icons/major/high-priestess.svg`

## 小阿卡纳牌组图标

小阿卡纳目前按牌组共用 4 个图标：

- 宝剑：`assets/icons/suits/swords.svg`
- 圣杯：`assets/icons/suits/cups.svg`
- 星币：`assets/icons/suits/pentacles.svg`
- 权杖：`assets/icons/suits/wands.svg`

如果你以后想让每张小牌都有独立图标，也可以在 `script.js` 的对应牌数据里加 `iconSrc` 覆盖默认牌组图标。

## 牌面图片

大阿卡纳牌面图片放在：

- `assets/cards/major/`

示例：

- 愚者：`assets/cards/major/fool.png`
- 世界：`assets/cards/major/world.png`

小阿卡纳牌面图片放在：

- `assets/cards/minor/`

示例：

- 宝剑王牌：`assets/cards/minor/swords-ace.png`
- 圣杯王后：`assets/cards/minor/cups-queen.png`

如果对应图片还没上传，网页会自动显示原来的曼陀罗生成图案，不会因为缺图而坏掉。
