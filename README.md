# Digital Next - De digitale wereld van morgen

Een moderne, visueel aantrekkelijke website voor de Digital Next video podcast.

## 🚀 Getting Started

### Installatie

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structuur

```
digital-next/
├── app/
│   ├── globals.css      # Globale styles en custom CSS
│   ├── layout.tsx       # Root layout met fonts
│   └── page.tsx         # Hoofdpagina
├── components/
│   ├── Navigation.tsx   # Navigatie met mobile menu
│   ├── Hero.tsx         # Hero sectie met logo
│   ├── Concept.tsx      # Uitleg van het format
│   ├── Gallery.tsx      # Foto galerij
│   ├── Episodes.tsx     # Episode overzicht
│   └── Footer.tsx       # Footer met CTA en links
├── public/
│   └── logo.png         # ⚠️ Voeg hier je logo toe!
└── ...
```

## ⚠️ Logo

Er is een SVG versie van het logo aanwezig in `public/logo.svg`. Als je je eigen PNG logo wilt gebruiken, vervang dan:

1. Plaats je logo als `public/logo.svg` of `public/logo.png`
2. Update de referenties in de components indien nodig

## 🎨 Design Features

- **Donker thema** gebaseerd op het zwarte logo
- **Animated arcs** geïnspireerd door het circulaire logo design
- **Bebas Neue** voor headings (bold, impactful)
- **Outfit** voor body text (modern, leesbaar)
- **Framer Motion** animaties voor smooth transitions
- **Responsive design** voor alle schermformaten

## 📝 Aanpassen

### Episodes Aanpassen

Edit `components/Episodes.tsx` om je eigen episodes toe te voegen:

```typescript
const episodes = [
  {
    id: 1,
    number: '01',
    title: 'Jouw Episode Titel',
    description: 'Beschrijving van de episode...',
    guests: ['Gast 1', 'Gast 2'],
    duration: '55 min',
    date: '15 Dec 2024',
    image: '/path/to/image.jpg',
    featured: true,
  },
  // ... meer episodes
]
```

### Kleuren Aanpassen

Edit `tailwind.config.ts` voor kleurenwijzigingen:

```typescript
colors: {
  'dn-black': '#000000',
  'dn-dark': '#0a0a0a',
  'dn-gray': '#1a1a1a',
  'dn-light': '#f5f5f5',
  'dn-accent': '#ffffff',
}
```

## 🔧 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📱 Secties

1. **Hero** - Introductie met logo en tagline
2. **Concept** - Uitleg van het podcast format
3. **Gallery** - Visuele impressie van de round tables
4. **Episodes** - Overzicht van alle afleveringen
5. **Footer** - Contact CTA en links

---

*Digital Next - Business en IT samen brengen om de toekomst van de digitale wereld te shapen*

