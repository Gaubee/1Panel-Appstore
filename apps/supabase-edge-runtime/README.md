<!-- 意图（2026-08-11）：响应用户原始需求“创建一个 SuperBaseEdgeRuntime 的 1Panel app”。 -->
<!-- 约束：说明运行时边界与函数部署入口。 -->
# Supabase Edge Runtime

Supabase Edge Runtime 是 Supabase 维护的 Deno Web 服务器，用于运行自托管的 TypeScript、JavaScript 和 WASM Edge Functions。

此应用仅提供函数运行时，不包含 Supabase Database、Auth、Storage 或 API Gateway。可将函数连接到已有 Supabase 项目或其他服务。

## 默认端口

- HTTP: `9000`

## 函数目录

安装后，默认函数入口为 `data/functions/main/index.ts`。替换该文件后重启应用即可部署自己的函数。

## 连接私有 Supabase

- `SUPABASE_URL`：Supabase API 网关的内部地址，例如 `http://<kong 服务名>:8000`；不要填写 PostgreSQL 地址。
- `SUPABASE_ANON_KEY`：用于代表用户调用 Supabase API，仍受 RLS 策略约束。
- `SUPABASE_SERVICE_ROLE_KEY`：仅供受控的服务端任务使用，会绕过 RLS，绝不能返回给浏览器或写入响应。

PostgreSQL 应保持在内部网络中，不需要向此应用或公网暴露数据库端口。

默认函数会返回：

```json
{"message":"Supabase Edge Runtime is running."}
```

## 数据目录

- 函数源码：`./data/functions`
- Deno 模块缓存：`./data/cache`

## 相关链接

- GitHub: https://github.com/supabase/edge-runtime
- Supabase Edge Functions 文档: https://supabase.com/docs/guides/functions
