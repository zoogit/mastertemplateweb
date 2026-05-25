# Master Template Site

Premium SaaS website scaffold for Master Template, a software company serving presentation design departments.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Netlify-ready configuration
- Netlify Forms-compatible demo request form
- Local Stack Sans Headline font and supplied product screenshots

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Pages

- `/` Homepage
- `/converter` Master Template Converter product page
- `/quality-controller` Master Template Quality Controller product page
- `/request-demo` Lead capture page

## Netlify Deployment

This project includes `netlify.toml` with the Next.js build command and Netlify Next plugin entry.

1. Push the project to GitHub.
2. Create a new Netlify site from the repository.
3. Use `npm run build` as the build command.
4. Use `.next` as the publish directory.
5. Ensure the `@netlify/plugin-nextjs` plugin is available in the Netlify project.

The request demo form uses Netlify Forms markup:

- `data-netlify="true"`
- hidden `form-name` input
- honeypot field

After deployment, Netlify will detect the form and collect submissions from `/request-demo`.
