# GaubeeOS - Desktop-OS style personal homepage in the browser

GaubeeOS is a self-hosted mirror of [gaubee.com](https://gaubee.com): a desktop-OS style personal homepage running fully in the browser. The whole site is statically built with SvelteKit and served by nginx, ready out of the box.

## Features

- Desktop OS style interactions
- In-browser virtual filesystem (ZenFS)
- Terminal (xterm.js)
- Code editor (CodeMirror)
- Git client (isomorphic-git)
- Markdown blog and gallery (PhotoSwipe)
- Full-text search (minisearch)
- GitHub OAuth login (via upstream Cloudflare Worker)

## Usage

1. After installation, visit `http://<host-ip>:8080` (port can be changed during installation)
2. The site is a pure static build with no backend account system, no initialization required

## Notes

- The image `ghcr.io/gaubee/gaubee.com:latest` is built and pushed automatically by upstream CI; site content is baked into the image at build time, so this app has no persistent volumes — updating means pulling the new image
- GitHub login depends on the upstream Cloudflare Worker (`https://auth.gaubee.com`) and fixed OAuth callback domains; the login flow cannot call back to a self-hosted domain, so a self-deployed instance is mainly for browsing the site content
- Only `linux/amd64` images are published
