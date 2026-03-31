// ─────────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit this file to update images, pricing, and site details.
//
// After editing, the changes take effect on the next build/deploy.
// Run `npm run dev` locally to preview changes before pushing.
// ─────────────────────────────────────────────────────────────────────────────


// ─── Portfolio Images ─────────────────────────────────────────────────────────
//
// To add a new portrait:
//   1. Drop the file into the /portfolio/ folder
//   2. Add a line here: { src: 'your-file.jpg', alt: 'Description' }
//
// 'alt' text is used by screen readers and shown if the image fails to load.
// Keep it descriptive: "Portrait of Sarah in morning light" not "photo1".
//
// The order here is the order they appear in the gallery.

export const portraitImages = [
  { src: 'portrait-01.jpg', alt: 'Collaborative portrait — character and light' },
  { src: 'portrait-02.jpg', alt: 'Portrait — natural light study' },
  { src: 'portrait-3.jpg',  alt: 'Portrait session' },
  { src: 'portrait-4.jpg',  alt: 'Portrait — mood and atmosphere' },
  { src: 'portrait-5.jpg',  alt: 'Portrait session' },
  { src: 'portrait-6.jpg',  alt: 'Portrait — expression and gesture' },
  { src: 'portrait-7.jpg',  alt: 'Portrait session' },
  { src: 'portrait-8.jpg',  alt: 'Portrait — light and form' },
  { src: 'portrait-9.jpg',  alt: 'Portrait session' },
  { src: 'baby.jpg',        alt: 'Family portrait' },
  { src: 'couple.jpg',      alt: 'Couple portrait' },
];

export const landscapeImages = [
  { src: 'art1.jpg',              alt: 'Abstract study — form and tone' },
  { src: 'art2.jpg',              alt: 'Abstract — colour and structure' },
  { src: 'abstract-angles.jpg',   alt: 'Architectural abstraction — angles and light' },
  { src: 'abstract_close.jpg',    alt: 'Texture study — close abstraction' },
  { src: 'abstract_portrait.jpg', alt: 'Abstract portrait — environment and figure' },
  { src: 'abstract_snow.jpg',     alt: 'Landscape — winter light' },
  { src: 'flower.jpg',            alt: 'Botanical — nature study' },
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
  defaultDescription: 'Collaborative portrait photography rooted in storytelling and art. Based in Lafayette, Indiana. Sessions from $350.',
};
