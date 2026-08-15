# GaubeeOS - 浏览器中的桌面操作系统式个人主页

GaubeeOS 是 [gaubee.com](https://gaubee.com) 的自托管镜像：一个运行在浏览器中的"桌面操作系统"式个人主页。整站由 SvelteKit 静态构建，自研 Rust 静态服务器托管（scratch 镜像，约 75MB），开箱即用。

## 主要特性

- 桌面 OS 风格的交互体验
- 浏览器内虚拟文件系统（ZenFS）
- 终端（xterm.js）
- 代码编辑器（CodeMirror）
- Git 客户端（isomorphic-git）
- Markdown 博客与图库（PhotoSwipe）
- 全文搜索（minisearch）
- GitHub OAuth 登录（依赖上游 Cloudflare Worker）

## 使用方式

1. 安装后访问 `http://<主机IP>:8080`（端口可在安装时修改）
2. 站点内容为纯静态产物，无后台账号体系，无需初始化

## 说明

- 镜像 `ghcr.io/gaubee/gaubee.com:latest` 由上游 CI 自动构建并推送，站点内容在构建期打包进镜像，因此本应用无持久化卷，更新即拉取新镜像
- **v1.0.0 起运行时为 Rust 静态服务器（scratch 镜像）**：容器内监听端口从 80 改为 **8080**（非 root 进程无法绑定 80）；从旧版本升级需重建容器（面板「升级」即可），反代目标端口请同步指向容器 8080 或宿主映射端口
- 镜像无 shell，不支持 exec 型健康检查；探活请用 `GET /healthz`
- GitHub 登录依赖上游 Cloudflare Worker（`https://auth.gaubee.com`）与固定的 OAuth 回调域名，自部署实例的登录流程无法回调到本机域名，自部署主要用于浏览站点内容
- 仅提供 `linux/amd64` 架构镜像
