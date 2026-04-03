// ─────────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit this file to update images, pricing, and site details.
//
// After editing, the changes take effect on the next build/deploy.
// Run `npm run dev` locally to preview changes before pushing.
// ─────────────────────────────────────────────────────────────────────────────


// ─── Portfolio Images ─────────────────────────────────────────────────────────
//
// Images live in subdirectories under /portfolio/:
//   portrait/   — portrait sessions
//   nature/     — nature and botanical photography
//   abstract/   — abstract and close studies
//   street/     — street photography
//   film/       — film photography (IMG_0990.JPG)
//
// To add an image:
//   1. Drop the file into the correct subdirectory
//   2. Add a line here: { src: 'subdir/filename.jpg', alt: 'Description' }
//
// 'alt' text is used by screen readers and shown if the image fails to load.
// Keep it descriptive: "Portrait of Sarah in morning light" not "photo1".
//
// The order here is the order they appear in the gallery.

export const portraitImages = [
  { src: 'portrait/portrait-01.jpg',      alt: 'Collaborative portrait — character and light' },
  { src: 'portrait/portrait-02.jpg',      alt: 'Portrait — natural light study' },
  { src: 'portrait/portrait-3.jpg',       alt: 'Portrait — mood and atmosphere' },
  { src: 'portrait/portrait-4.jpg',       alt: 'Portrait — expression' },
  { src: 'portrait/portrait-5.jpg',       alt: 'Portrait session' },
  { src: 'portrait/portrait-6.jpg',       alt: 'Portrait — expression and gesture' },
  { src: 'portrait/portrait-7.jpg',       alt: 'Portrait — light and form' },
  { src: 'portrait/portrait-8.jpg',       alt: 'Portrait session' },
  { src: 'portrait/portrait-9.jpg',       alt: 'Portrait — atmosphere' },
  { src: 'portrait/portrait-10.jpg',      alt: 'Portrait session' },
  { src: 'portrait/portrait-11.jpg',      alt: 'Portrait — natural light' },
  { src: 'portrait/portrait-12.jpg',      alt: 'Portrait session' },
  { src: 'portrait/portrait-13.jpg',      alt: 'Portrait — character' },
  { src: 'portrait/portrait-14.jpg',      alt: 'Portrait session' },
  { src: 'portrait/portrait-15.jpg',      alt: 'Portrait — expression' },
  { src: 'portrait/portrait-16.jpg',      alt: 'Portrait session' },
  { src: 'portrait/portrait-17.jpg',      alt: 'Portrait — light and mood' },
  { src: 'portrait/portrait-18.jpg',      alt: 'Portrait session' },
  { src: 'portrait/portrait-19.jpg',      alt: 'Portrait — natural light' },
  { src: 'portrait/portrait_dancing.jpg', alt: 'Portrait — movement and joy' },
  { src: 'IMG_4546.jpg',                  alt: 'Portrait session' },
  { src: 'portrait/baby.jpg',             alt: 'Family portrait' },
  { src: 'portrait/couple.jpg',           alt: 'Couple portrait' },
];

export const landscapeImages = [
  { src: 'abstract/abstract-1.jpg',       alt: 'Abstract study — form and tone' },
  { src: 'abstract/abstract-2.jpg',       alt: 'Abstract — colour and structure' },
  { src: 'abstract/abstract-angles.jpg',  alt: 'Architectural abstraction — angles and light' },
  { src: 'abstract/abstract_close.jpg',   alt: 'Texture study — close abstraction' },
  { src: 'abstract/abstract_portrait.jpg',alt: 'Abstract study — environment and figure' },
  { src: 'abstract/abstract_snow.jpg',    alt: 'Landscape — winter light' },
  { src: 'nature/flower.jpg',             alt: 'Botanical — nature study' },
  { src: 'nature/fawn-lillies-several.jpg', alt: 'Fawn lilies — nature study' },
  { src: 'nature/hills.jpg',              alt: 'Hills — landscape' },
  { src: 'nature/tree-light-vignette.jpg',alt: 'Tree in light — nature study' },
  { src: 'street/street-light-pool.jpg',  alt: 'Street photography — light and shadow' },
  { src: 'street/cafe-shot.jpg',          alt: 'Street photography — cafe scene' },
  { src: 'film/IMG_0990.JPG',             alt: 'Film photograph — Minolta 35mm' },
];

// The combined gallery (portraits first, then landscape).
// Reorder or remove entries here to change what appears on /portfolio/
export const allImages = [...portraitImages, ...landscapeImages];


// ─── Pricing ──────────────────────────────────────────────────────────────────
//
// Update prices here — they'll reflect on the homepage and sessions page.

export const pricing = {
  essential: {
    name:        'Essential Session',
    price:       350,
    hours:       1,
    photos:      5,
    description: 'A focused, one-hour session ideal for individuals, professional images, personal brands, or portrait gifts.',
    features: [
      'One hour at a single location',
      '5 professionally edited portraits',
      'High-resolution digital delivery',
      'All editing included — no additional fees',
      'Within 30 miles of Lafayette, IN or Urbana-Champaign, IL',
    ],
  },
  extended: {
    name:        'Exploration Session',
    price:       750,
    hours:       3,
    photos:      20,
    description: 'Three hours gives us time to explore, relax, and find the images that really work — ideal for couples, families and creatives.',
    features: [
      'Three hours at a single location',
      '20 professionally edited portraits',
      'High-resolution digital delivery',
      'All editing included — no additional fees',
      'Within 30 miles of Lafayette, IN or Urbana-Champaign, IL',
    ],
  },
  travel: {
    indianapolis: { label: 'Indianapolis', fee: 100 },
    chicago:      { label: 'Chicago',      fee: 200 },
  },
};


// ─── Site Info ────────────────────────────────────────────────────────────────
//
// Used in the footer, contact page, and meta tags.
// Update email or Instagram handle here — one change updates the whole site.

export const site = {
  name:           'Zach Beauvais',
  title:          'Zach Beauvais Photography',
  email:          'zach@zachbeauvais.com',
  instagram:      'zach_of_the',
  instagramUrl:   'https://instagram.com/zach_of_the',
  location:       'Lafayette, Indiana',
  locationDetail: 'Lafayette, IN and Urbana-Champaign, IL (within 30 miles)',
  defaultDescription: 'Portrait photography in Lafayette, IN and Urbana-Champaign, IL. Collaborative sessions for personal brands and individuals — shaped by street and abstract photography. From $350.',
};
