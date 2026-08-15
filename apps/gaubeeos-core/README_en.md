# GaubeeOS Core - Desktop-OS style site kernel

A self-deployable desktop-OS style site kernel: ships a Rust subscription engine (GitHub repos → scheduled sync → local cache), app system, terminal, code editor, git client and full-text search. **No bundled content** — subscribe to any GitHub markdown repo in settings to make it yours.

## Usage

1. Visit `http://<host-ip>:8090` after installation (port configurable)
2. Open "Settings → Content Sources → Add": fill in the GitHub owner/repo, content type (articles/events), and a path-matching glob (e.g. `src/content/articles/**/*.md`)
3. "Test connection" previews matched files → "Subscribe & sync" → the articles/events apps fill up instantly
4. Multiple sources supported (articles/events each); slug prefix avoids URL collisions across sources

## Notes

- **Stateful app**: subscriptions and content cache live in `./data` (survives upgrades/recreates)
- **Sync engine**: Rust; skips when the branch head sha is unchanged; file bodies fetched via the raw CDN (doesn't count against API quota); per-source interval 15m~24h
- **GitHub Token (optional)**: anonymous sync is limited to 60 API calls/hour (recommended for multi-source high-frequency syncing); a read-only public-repo token suffices
- **OAuth login (optional)**: editor writes/commits require a self-hosted Cloudflare Worker (see upstream README); without it the deployment is read-only and the login entry is hidden automatically
- Difference from "GaubeeOS" (the author's gaubee.com monolith mirror): this app is the generic kernel — all content comes from subscriptions
- Only `linux/amd64` images are published
