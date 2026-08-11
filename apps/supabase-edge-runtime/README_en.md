<!-- Intent (2026-08-11): fulfill the user's request to create a SuperBaseEdgeRuntime 1Panel app. -->
<!-- Scope: document the runtime boundary and function deployment entry point. -->
# Supabase Edge Runtime

Supabase Edge Runtime is a Deno web server maintained by Supabase for running self-hosted TypeScript, JavaScript, and WASM Edge Functions.

This app provides only the function runtime. It does not include Supabase Database, Auth, Storage, or an API Gateway. Functions can connect to an existing Supabase project or other services.

## Default Port

- HTTP: `9000`

## Function Directory

After installation, the default function entry point is `data/functions/main/index.ts`. Replace it and restart the app to deploy your own function.

## Connect a Private Supabase Instance

- `SUPABASE_URL`: Internal Supabase API gateway address, such as `http://<kong-service-name>:8000`; do not use a PostgreSQL address.
- `SUPABASE_ANON_KEY`: Used for requests on behalf of users and remains subject to RLS policies.
- `SUPABASE_SERVICE_ROLE_KEY`: Only for controlled server-side tasks. It bypasses RLS and must never be returned to a browser or response.

Keep PostgreSQL on the internal network. Its port does not need to be exposed to this app or the public internet.

The default function returns:

```json
{"message":"Supabase Edge Runtime is running."}
```

## Data Directories

- Function source: `./data/functions`
- Deno module cache: `./data/cache`

## Links

- GitHub: https://github.com/supabase/edge-runtime
- Supabase Edge Functions documentation: https://supabase.com/docs/guides/functions
