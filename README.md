# KALEM Home Care Services · kalemcare.com

The KALEM website, built with **Next.js 16** (App Router, TypeScript) and **Tailwind CSS 4**.

## Run it in VS Code

1. Install [Node.js 20 or newer](https://nodejs.org) (the LTS version is fine) if it isn't installed yet.
2. In VS Code choose **File › Open Folder…** and open this `kalem-website` folder.
   Accept the prompt to install the recommended extensions (Tailwind CSS IntelliSense, ESLint, Prettier).
3. Open a terminal (**Terminal › New Terminal**) and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open <http://localhost:3000>. The page reloads as you save changes.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build (checks types too) |
| `npm run start` | Serves the production build |
| `npm run lint` | Lints the code |

## Where things are

```
src/
  app/
    layout.tsx      page <head>: title, description, fonts
    page.tsx        the homepage, section by section
    globals.css     Tailwind setup and the KALEM brand tokens
    icon.svg        favicon (KALEM app icon)
    apple-icon.png  home-screen icon for iPhone/iPad
  components/       one file per section (Header, Hero, Services, Contact…)
  content/site.ts   ALL website text, phone and email: edit copy here
public/brand/       KALEM logo files (horizontal, stacked, icon; colour and reversed)
```

**To change wording**, edit `src/content/site.ts`; the components only handle layout.

**Brand colours and fonts** are Tailwind tokens defined in `src/app/globals.css`:
`purple` #4A0868, `plum` #361049, `violet` #6A1585, `gold` #CFA162, `gold-light` #E8C68E,
`bronze` #8A5E2A, `cream` #F5E9D3, `ivory` #FBF6EC, `ink` #2A1633, with `font-display` (Cinzel),
`font-accent` (Cormorant Garamond, italic) and the default `font-sans` (Jost). Use them like
`bg-purple`, `text-gold-light`, `font-display`. The fonts are bundled from npm (Fontsource), so
nothing loads from Google at runtime.

## Before going live

- **Photos:** live in `public/photos/` and are listed in `src/content/site.ts` (`hero.photo`, `photos`).
  To swap one, replace the file or point the entry at a new file, and update its `alt` text.
- **Contact form:** it currently opens the visitor's email app addressed to hello@kalemcare.com.
  To receive enquiries directly, connect `src/components/ContactForm.tsx` to a form service
  (e.g. Formspree or Resend) or a Next.js route handler.
- **Privacy policy:** the footer link points to the top of the page until a policy page exists.
- **Hosting:** the site builds to static pages, so Vercel, Netlify or any Node host works.
  Point the kalemcare.com domain at the host when ready.
