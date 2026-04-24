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
//   2. Add a line here: { src: 'subdir/filename.jpg', alt: 'Description', width: N, height: N }
//
// 'alt' text is used by screen readers and shown if the image fails to load.
// Keep it descriptive: "Portrait of Sarah in morning light" not "photo1".
//
// The order here is the order they appear in the gallery.

// ─── Quick image reference ────────────────────────────────────────────────────
//
// Use these labels when selecting images in page files (e.g. portraitImages[0]).
// The label is the shorthand; the index is the array position.
//
//  [0]  woman-closeup        — B&W close portrait, woman with nose ring, direct gaze
//  [1]  man-cap-glasses      — B&W, man with long hair, daisy cap, glasses, looking away
//  [2]  woman-window-bw      — B&W, woman at tall industrial window, looking out
//  [3]  woman-softlight      — Colour, young woman, nose ring, soft window light, direct gaze
//  [4]  woman-leaning        — Colour, same woman, leaning by window, smiling
//  [5]  man-floor            — Colour, man in athletic gear, seated relaxed on stone floor
//  [6]  man-window-colour    — Colour, man in athletic jacket, industrial window behind
//  [7]  man-laughing-bw      — B&W, man by window, head down, laughing to himself
//  [8]  person-snow          — B&W, person bundled up lying in snow, looking up at camera
//  [9]  woman-chair-studio   — B&W studio, woman seated on chair, grey background
//  [10] two-people-studio    — B&W studio, two people, one seated, one adjusting jacket
//  [11] woman-purple-hair    — Colour, woman with purple hair, seated against rough wall, plants behind
//  [12] woman-window-bw-2    — B&W, woman at industrial window, looking out (similar to [2])
//  [13] man-blue-jacket      — Colour, man in blue athletic jacket, industrial space, movement
//  [14] woman-curly-window   — B&W, woman with curly hair, eyes closed, smiling, window light
//  [15] two-women-floor      — B&W, two women seated on floor facing each other, laughing
//  [16] woman-pillar         — Colour, woman leaning against concrete pillar, direct gaze
//  [17] man-leaning-laughing — B&W, man leaning on wooden post, laughing
//  [18] dancer-dark-main     — B&W, dancer mid-pose, arms wide, one leg raised, dark bg
//  [19] child-ukulele        — B&W/sepia, child's small hands on a ukulele, close crop
//  [20] couple-colour            — Colour, couple standing together (man with long hair, woman with purple hair)
//  [21] two-women-hug            — Colour, two women embracing, both smiling, warm light
//  [22] woman-window-bw-smile    — B&W, woman at window, subtle smile, soft side light
//  [23] woman-ballerina          — Colour, woman in balletic pose, graceful, natural light
//  [24] woman-red-sweater        — Colour, woman smiling at window, red sweater, warm approachable
//  [25] woman-directions         — Colour, woman at window gesturing as if giving directions
//  [26] man-beard-monochrome     — B&W close portrait, man with beard, strong direct gaze

export const portraitImages = [
  { src: 'portrait/Woman-monochrome-intense-kind.jpg',       alt: 'Portrait — woman with nose ring, direct gaze, natural light',         width: 2048, height: 2048 },  // [0]  woman-closeup
  { src: 'portrait/Man-daisy-cap-looking-away.jpg',          alt: 'Portrait — man with long hair and daisy cap, looking away',           width: 1703, height: 2560 },  // [1]  man-cap-glasses
  { src: 'portrait/Woman-industrial-window-monochrome.jpg',  alt: 'Portrait — woman at tall industrial window, looking out',             width: 2000, height: 1330 },  // [2]  woman-window-bw
  { src: 'portrait/Woman-soft-window-light.jpg',             alt: 'Portrait — young woman, soft window light, direct gaze',              width: 1330, height: 2000 },  // [3]  woman-softlight
  { src: 'portrait/Woman-leaning-window-smiling.jpg',        alt: 'Portrait — woman leaning by window, smiling',                         width: 1330, height: 2000 },  // [4]  woman-leaning
  { src: 'portrait/Man-athletic-stone-floor.jpg',            alt: 'Portrait — man in athletic gear, seated relaxed on stone floor',      width: 2000, height: 1330 },  // [5]  man-floor
  { src: 'portrait/Man-athletic-jacket-industrial.jpg',      alt: 'Portrait — man in athletic jacket, industrial window behind him',     width: 2000, height: 1330 },  // [6]  man-window-colour
  { src: 'portrait/Man-window-laughing-monochrome.jpg',      alt: 'Portrait — man by window, laughing, looking down',                    width: 2000, height: 1330 },  // [7]  man-laughing-bw
  { src: 'portrait/Person-winter-snow.jpg',                  alt: 'Portrait — person bundled in winter layers, lying in snow',           width: 1500, height: 2000 },  // [8]  person-snow
  { src: 'portrait/Woman-studio-chair-grey.jpg',             alt: 'Portrait — woman seated on chair, studio, grey background',           width: 1330, height: 2000 },  // [9]  woman-chair-studio
  { src: 'portrait/Two-people-studio-monochrome.jpg',        alt: 'Portrait — two people in studio, one seated, one standing',           width: 1330, height: 2000 },  // [10] two-people-studio
  { src: 'portrait/Woman-purple-hair-rough-wall.jpg',        alt: 'Portrait — woman with purple hair, seated against rough wall',        width: 2000, height: 1330 },  // [11] woman-purple-hair
  { src: 'portrait/Woman-industrial-window-monochrome-2.jpg',alt: 'Portrait — woman at industrial window, looking out',                  width: 2000, height: 1330 },  // [12] woman-window-bw-2
  { src: 'portrait/Man-blue-jacket-industrial.jpg',          alt: 'Portrait — man in blue jacket, industrial space',                     width: 2000, height: 1330 },  // [13] man-blue-jacket
  { src: 'portrait/Woman-curly-hair-eyes-closed.jpg',        alt: 'Portrait — woman with curly hair, eyes closed, smiling at window',   width: 2000, height: 1330 },  // [14] woman-curly-window
  { src: 'portrait/Two-women-floor-laughing.jpg',            alt: 'Portrait — two women seated on floor, laughing together',             width: 2000, height: 1330 },  // [15] two-women-floor
  { src: 'portrait/Woman-concrete-pillar-direct-gaze.jpg',   alt: 'Portrait — woman leaning against concrete pillar, direct gaze',      width: 2000, height: 1330 },  // [16] woman-pillar
  { src: 'portrait/Man-leaning-post-laughing.jpg',           alt: 'Portrait — man leaning on wooden post, laughing',                     width: 1330, height: 2000 },  // [17] man-leaning-laughing
  { src: 'portrait/Dancer-arms-wide-dark-stage.jpg',         alt: 'Portrait — dancer with arms wide and one leg raised, dark stage',    width: 1330, height: 2000 },  // [18] dancer-dark-main
  { src: 'portrait/Child-hands-ukulele-close.jpg',           alt: 'Portrait — child\'s hands on a ukulele, close crop',                  width: 2000, height: 1334 },  // [19] child-ukulele
  { src: 'portrait/Couple-standing-colour.jpg',              alt: 'Portrait — couple standing together, colour',                         width: 1330, height: 2000 },  // [20] couple-colour
  { src: 'portrait/two-women-smiling-hug.jpg',              alt: 'Portrait — two women embracing and smiling, warm light',               width: 1330, height: 2000 },  // [21] two-women-hug
  { src: 'portrait/woman-monochrome-window-subtle-smile.jpg',alt: 'Portrait — woman at window, subtle smile, soft monochrome light',     width: 2000, height: 1330 },  // [22] woman-window-bw-smile
  { src: 'portrait/woman-posing-ballerina-dancing.jpg',      alt: 'Portrait — woman in a balletic pose, expressive, natural light',      width: 1330, height: 2000 },  // [23] woman-ballerina
  { src: 'portrait/woman-smiling-window-red-sweater.jpg',    alt: 'Portrait — woman smiling by a window, red sweater, warm natural light',width: 2000, height: 1330 },  // [24] woman-red-sweater
  { src: 'portrait/woman-window-giving-directions.jpg',      alt: 'Portrait — woman at window, animated, as if explaining something',    width: 1330, height: 2000 },  // [25] woman-directions
  { src: 'portrait/man-monochrome-eyes-beard-1.jpg',         alt: 'Portrait — man with beard, close monochrome, direct gaze',             width: 2000, height: 1331 },  // [26] man-beard-monochrome
];

export const landscapeImages = [
  { src: 'abstract/abstract-1.jpg',       alt: 'Abstract study — form and tone',                   width: 2560, height: 2048 },
  { src: 'abstract/abstract-2.jpg',       alt: 'Abstract — colour and structure',                  width: 2048, height: 1365 },
  { src: 'abstract/abstract-angles.jpg',  alt: 'Architectural abstraction — angles and light',     width: 1600, height: 2000 },
  { src: 'abstract/abstract_close.jpg',   alt: 'Texture study — close abstraction',                width: 1600, height: 2000 },
  { src: 'abstract/abstract_portrait.jpg',alt: 'Abstract study — environment and figure',          width: 1330, height: 2000 },
  { src: 'abstract/abstract_snow.jpg',    alt: 'Landscape — winter light',                         width: 2000, height: 1600 },
  { src: 'nature/flower.jpg',             alt: 'Botanical — nature study',                         width: 2000, height: 1600 },
  { src: 'nature/fawn-lillies-several.jpg', alt: 'Fawn lilies — nature study',                     width: 2000, height: 1600 },
  { src: 'nature/hills.jpg',              alt: 'Hills — landscape',                                width: 2000, height: 1338 },
  { src: 'nature/tree-light-vignette.jpg',alt: 'Tree in light — nature study',                     width: 2000, height: 1330 },
  { src: 'street/street-light-pool.jpg',  alt: 'Street photography — light and shadow',            width: 2000, height: 1600 },
  { src: 'street/cafe-shot.jpg',          alt: 'Street photography — cafe scene',                  width: 1500, height: 2000 },
  { src: 'film/IMG_0990.JPG',             alt: 'Film photograph — Abstract composite from Minolta 35mm',                   width: 1418, height: 2108 },
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
    description: 'Editing included. A focused, one-hour session ideal for individuals, professional images, personal brands, or portrait gifts.',
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
    description: 'Editing Included. Three hours gives us time to explore, relax, and find the images that really work — ideal for couples, families and creatives.',
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
