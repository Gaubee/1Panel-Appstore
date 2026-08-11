// 意图（2026-08-11）：响应用户原始需求“创建一个 SuperBaseEdgeRuntime 的 1Panel app”。
// 约束：提供可立即验证运行状态的最小 Edge Function 入口。
Deno.serve(() =>
  Response.json({
    message: "Supabase Edge Runtime is running.",
  }),
)
