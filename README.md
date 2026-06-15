# Frontier Culture Museum of Virginia — Fan Site

A responsive, single-page application built as a final project for BU CS601. The site is a redesign of
the [Frontier Culture Museum of Virginia](https://frontiermuseum.org) website and is not an official product of the
museum.

Image and content credit: Frontier Culture Museum of Virginia; Unsplash.

---

## Tech Stack

- **React 19** with TypeScript
- **React Router v7** — client-side routing
- **Vite** — build tool and dev server
- **CSS Modules** — scoped component styles

---

## Project Structure

```
src/
├── components/
│   ├── Article/          # Generic article/text page layout
│   ├── Card/             # Card and CardContainer for exhibit grids
│   ├── Events/           # Upcoming events strip on the landing page
│   ├── Footer/           # Site footer with links and contact info
│   ├── Header/           # Mega-menu navigation header
│   ├── Hero/             # Full-width hero banner
│   └── Sections/
│       ├── ContentBlock/             # Image + text section layout
│       └── ContentBlockImageFrame/   # Image + text with decorative frame
├── data/                 # Static data and TypeScript interfaces
│   ├── articles.data.ts
│   ├── events.data.ts
│   ├── exhibits.data.ts
│   ├── exhibitspage.data.tsx
│   ├── footer.data.ts
│   ├── homepage.data.tsx
│   ├── menu.data.ts
│   └── types.ts
├── pages/
│   ├── ErrorPage/        # 404 page
│   ├── ExhibitDetailPage/# Individual exhibit page
│   ├── ExhibitsPage/     # Exhibit listing page
│   └── LandingPage/      # Home page
└── utils/                # Shared utility functions
```

---

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

---

## Available Scripts

| Script            | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

---

## Routes

| Path                   | Page                         |
|------------------------|------------------------------|
| `/`                    | Landing page                 |
| `/exhibits`            | Exhibit listing              |
| `/exhibits/:exhibitId` | Individual exhibit detail    |
| `/programs`            | Scout and volunteer programs |
| `/podcast`             | Podcast page                 |
| `*`                    | 404 error page               |

---

## Data Shapes

All shared TypeScript interfaces live in `src/data/types.ts`. Domain-specific interfaces are co-located with their data
files.

### Core types (`src/data/types.ts`)

```
ILink          { text, href }
IAddress       { street, city, state, zip }
IImage         { url, alt, type?: "card" | "hero" }
IHero          { heading, image, text?, link? }
IContent       { type: "textSection", id, heading, text, image?, link? }
ICard          { id, heading, text?, image?, link? }
ICardContainer { type: "cardContainer", id, cards: ICard[] }
ISection       = IContent | ICardContainer
IBasePage      { hero: IHero, sections: ISection[] }
```

### Domain types

```
// exhibits.data.ts
IExhibit       { id, name, description, image: IImage[], text }
IExhibits      { oldWorld: IExhibit[], newWorld: IExhibit[] }

// events.data.ts
IEvent         { id, title, startDate, endDate, startTime, endTime, image, description }

// articles.data.ts
IArticle       { id, heading, text, image? }
IArticlesData  { [key: string]: IArticle[] }

// footer.data.ts
FooterAbout    { heading, text?, links: ILink[] }
FooterContact  { heading, text?, address, phone, links: ILink[] }
FooterConnect  { heading, text?, links: ILink[] }
IFooter        { about, contact, connect }

// menu.data.ts
IMenuCategory  { id, name, links: ILink[] }
IMenuTabItem   { title, description, categories: IMenuCategory[] }
```

---

## Technical Debt

| Location                                          | Issue                                                                                                           |
|---------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `src/data/menu.data.ts`                           | Menu links are hard-coded; should be derived from `exhibitsData`                                                |
| `src/data/menu.data.ts`                           | Links should use the `ILink` type consistently                                                                  |
| `src/data/footer.data.ts`                         | Social media icon badges not yet implemented                                                                    |
| `src/components/Card/Card.tsx`                    | Cards without an explicit `link` should not be rendered as links                                                |
| `src/components/Sections/ContentBlockImageFrame/` | Decorative frame SVGs are assigned by index; will go out of bounds if more sections are added than frames exist |
| `src/pages/ExhibitDetailPage/`                    | Exhibit detail should be converted to use the shared `IContent` type                                            |
| `src/pages/LandingPage/`                          | Events section has no dedicated page or routing                                                                 |
| `src/components/Header/`                          | No explicit close button on the mega-menu (currently closeable via outside click or link navigation)            |

| Broken/Non-Functional Links    |
|--------------------------------|
| `tickets`                      |
| `accessibility`                |
| `directions`                   |
| `hotels`                       |
| `destinations`                 |
| `dining`                       |
| `Our Stroy`                    |
| `American Frontier Foundation` |
| `Careers`                      |
| `Volunteer`                    |
| `Send Us a Message`            |