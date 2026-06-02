<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project deployment notes

Target public URL: `https://wg.auerlytics.at`.

Preferred workflow:

1. Push the project to GitHub.
2. On the VPS, clone or pull the repository.
3. Build and run it with Docker.
4. Put the container behind the existing Nginx reverse proxy.
5. Manage DNS through Cloudflare with the proxied record enabled.

Before deploying on the VPS, inspect the existing Docker and Nginx setup. Do not assume port or network availability.

Check at minimum:

- `docker ps`
- `docker network ls`
- `docker network inspect webnet`
- existing Nginx reverse proxy config for subdomains
- whether port `8765` is actually free

The VPS already has a Docker network named `webnet` used by Nginx. Prefer attaching this site container to `webnet` and proxying to the container by service name. If the reverse proxy is host-based instead of container-based, bind the app only to localhost, for example `127.0.0.1:8765:3000`, then proxy `wg.auerlytics.at` to `http://127.0.0.1:8765`.

Do not expose the Next.js container publicly on `0.0.0.0` unless the reverse proxy setup explicitly requires it.

Image rules:

- Uploaded apartment photos should be optimized for web before shipping.
- Prefer WebP or AVIF in `public/photos`.
- Render photos with `next/image`.
- Use lazy loading for non-critical images.
- Keep explicit aspect ratios or image dimensions to avoid layout shift.

Analytics rules:

- Umami is self-hosted at `https://analytics.auerlytics.at`.
- Track the WG website domain `wg.auerlytics.at`.
- Configure tracking through environment variables:
  - `NEXT_PUBLIC_UMAMI_SCRIPT_URL=https://analytics.auerlytics.at/script.js`
  - `NEXT_PUBLIC_UMAMI_WEBSITE_ID=<website-id-from-umami>`
- These variables must be present at Docker build time because public Next.js variables are baked into browser output.
- In Docker Compose, pass them through `build.args` and `environment`.
- Track important outbound or intent clicks with `data-umami-event`, especially contact and maps clicks.
