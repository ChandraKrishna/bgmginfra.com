# BGMG Infra website

A static, mobile-first Astro website for BGMG Infra Pvt Ltd. Supplied imagery is separated into actual photographs, architectural concepts, and unverified plan material.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown by Astro. To validate and create the production build:

```bash
npm run check
npm run build
npm run preview
```

## Edit content and images

- Business/property facts and catalogue entries: `src/data/site.ts`
- Page content: `src/pages/index.astro`
- Styling: `src/styles/global.css`
- Images: `public/catalog/`

When replacing an image, update its catalogue entry including title, category, source, alt text, `actual`, and optional label. Never mark a concept/render as an actual completed project. Confirm property specifications before adding them.

## Activate Web3Forms

1. Visit [Web3Forms](https://web3forms.com/) and create an access key for `bgmginfra@gmail.com`.
2. Verify the email address when Web3Forms requests it.
3. Copy `.env.example` to `.env`.
4. Replace the placeholder with the key:

   ```env
   PUBLIC_WEB3FORMS_ACCESS_KEY=your_real_access_key
   ```

5. Restart the Astro development server and test a real submission.

No Gmail password or SMTP credentials are needed. Without the key, the form accurately reports that setup is required and keeps phone, WhatsApp, and email alternatives available.

## Deploy the static build

Run `npm run build`, then deploy the generated `dist/` directory to any static host (Netlify, Cloudflare Pages, Vercel, GitHub Pages, or conventional hosting). The build does not require a server.

For subdirectory hosting, set Astro's `base` in `astro.config.mjs`, for example `base: '/bgmg/'`, rebuild, and deploy the contents as required by the host. Asset URLs use Astro's base path.

Before going live, replace the placeholder `site` URL in `astro.config.mjs` with the final canonical domain and configure `PUBLIC_WEB3FORMS_ACCESS_KEY` in the host's environment settings.

## Pre-launch requirements

- Configure and test the Web3Forms access key.
- Confirm the advertised property's exact location and all additional specifications before publishing them.
- Confirm whether supplied floor plan `10.jpeg` is the approved plan for the 1050 sq ft property; it is currently labelled as requiring verification.
- Confirm rights to publish all supplied images and visualisations.
