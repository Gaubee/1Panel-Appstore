# OwebGame - 中文 DOS 游戏在线游玩平台

OwebGame 是 [game.oweb.xin](https://game.oweb.xin) 的自托管版本：中文 DOS 游戏 + PlayCanvas 双引擎游戏平台（Go + React PWA），复刻自 chinese-dos-games-web。

## 主要特性

- 浏览器内实时运行经典中文 DOS 游戏（emularity + DOSBox）
- PWA 离线可用：外壳预缓存 + 封面 CacheFirst
- 动态镜像池 + 熔断器：多源并发嗅探，不可用节点自动熔断与恢复
- 本地游戏库（IndexedDB）：下载一次永久离线可玩，支持断点续传
- Go 管理后台：游戏 CRUD / 封面上传 / 推荐配置 / 镜像管理 / 一键发布

## 使用方式

1. 安装时必须填写管理密码（`ADMIN_PASSWORD`），安装后访问 `http://<主机IP>:7780` 登录管理后台
2. 游戏数据与发布产物分别持久化在 `./data/public` 与 `./data/dist`

## 说明

- `ADMIN_SECRET` 是会话 HMAC 签名密钥：留空则每次重启随机生成（重启后需重新登录），建议设置固定值保持会话稳定
- `PUBLISH_HOOK` 为可选的发布钩子脚本（也可在网页"发布设置"页配置），在执行发布后运行
- 镜像 `ghcr.io/gaubee/game.oweb.xin:latest` 由上游 CI 自动构建（master → latest），更新即拉取新镜像；支持 amd64 与 arm64
