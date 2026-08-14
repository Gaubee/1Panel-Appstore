# OwebGame - Online Chinese DOS games platform

OwebGame is a self-hosted version of [game.oweb.xin](https://game.oweb.xin): a Chinese DOS games + PlayCanvas dual-engine game platform (Go + React PWA), remade from chinese-dos-games-web.

## Features

- Run classic Chinese DOS games in real time in the browser (emularity + DOSBox)
- PWA offline support: app shell precache + covers CacheFirst
- Dynamic mirror pool with circuit breaker: concurrent probing, auto circuit-breaking and recovery
- Local game library (IndexedDB): download once, play offline forever, resumable downloads
- Go admin backend: game CRUD / cover uploads / featured config / mirror management / one-click publishing

## Usage

1. The admin password (`ADMIN_PASSWORD`) is required during installation; after install visit `http://<host-ip>:7780` and log in to the admin backend
2. Game data and publish artifacts are persisted in `./data/public` and `./data/dist`

## Notes

- `ADMIN_SECRET` is the session HMAC signing key: leave empty to regenerate on every restart (re-login required after each restart); setting a fixed value keeps sessions stable
- `PUBLISH_HOOK` is an optional publish hook script (can also be configured on the web "publish settings" page), run after publishing
- The image `ghcr.io/gaubee/game.oweb.xin:latest` is built automatically by upstream CI (master → latest); updating means pulling the new image; amd64 and arm64 are supported
