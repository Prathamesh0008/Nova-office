// src/data/services.jsx
import insta from "../assets/D_M1.jpg";
import web from "../assets/SEO1.jpg";
import brand from "../assets/B_S.jpg";
import client from "../assets/Client1.png";

export const services = [
  {
    slug: "branding",
    title: "Brand Strategy",
    description:
      "Craft a memorable brand identity that resonates with your audience across all platforms.",
    // ✨ Wat het écht betekent
    details:
      "Brand Strategy is de fundering van je hele business. Het bepaalt hoe je klinkt, hoe je eruitziet, hoe je verkoopt en hoe je wordt onthouden. Zonder strategie is branding alleen design — met strategie wordt het een wapen.",
    facts: [
      // Brand positioning & messaging
      "Brand positioning & messaging – identificeert waar je merk staat in de markt, helpt je afzetten tegen concurrenten, definieert unieke waarden, kernboodschappen en beloftes en creëert een consistente narrative voor al je communicatie.",
      // Logo design, typography & identity system
      "Logo design, typography & identity system – modern logo (primary, secondary, icon), typografie set voor headings en body, kleurensysteem met shades, gradients en contrast ratios voor complete visual coherence.",
      // Visual language & color architecture
      "Visual language & color architecture – illustratiestijl, iconografie, shapes en textures, plus richtlijnen voor brand imagery en de tone van je beelden (minimalistic, bold, cinematic, corporate, etc.).",
      // Brand voice guidelines
      "Brand voice guidelines – duidelijke tone of voice (friendly, bold, premium, energetic, authoritative, etc.), met do’s & don’ts voor copywriting en verschil tussen social media tone en website tone.",
      // Cross-platform consistency
      "Cross-platform consistency – hoe je merk eruit moet zien op website, socials, print en packaging, inclusief grid systems, layout rules en consistency checklists.",
      // Competitor + market analysis
      "Competitor & market analysis – analyse van 5–10 concurrenten, SWOT breakdown, market whitespace en heldere USP’s en differentiators.",
      // Brand story & narrative
      "Brand story & narrative development – origin story, brand purpose, vision & mission statements en een emotionele storyline voor connectie.",
      // Messaging frameworks
      "Messaging frameworks – praktische frameworks voor headlines, taglines, value props, social captions en campagneboodschappen.",
      // Brand guideline book
      "Complete brand guideline book – een brandbook van ~40–80 pagina’s voor developers, designers, freelancers en ad teams zodat iedereen je merk perfect kan uitvoeren.",
    ],
    img: brand,
    // frameColor: "#4414f0ff",
    flip: false,
  },
  {
    slug: "web-development",
    title: "Website Development",
    description:
      "Custom, responsive, and high-performance websites engineered for speed, SEO, and conversion.",
    // ✨ Wat het écht betekent
    details:
      "Dit is niet zomaar een website, maar een digitaal monument dat verkoopt, converteert, informeert en je merk naar een hoger niveau tilt.",
    facts: [
      // UI/UX design
      "UI/UX design – wireframes van elke pagina, user flows & journey mapping, component design system en focus op usability & conversion psychology.",
      // Responsive frontend development
      "Responsive frontend development – pixel-perfect frontend op alle devices met moderne stacks zoals React / Vite / Next en mobile-first architectuur.",
      // CMS setup
      "CMS setup (WordPress, Webflow of custom) – logische contentstructuur, admin-panel training en flexibele blocks zodat je zelf makkelijk content kunt aanpassen.",
      // Landing pages + CRO
      "Landing pages & conversion-optimized layouts – landingspagina’s voor ads, SEO of funnels met CRO-principes, sterke CTA’s en duidelijke visual hierarchy.",
      // Speed optimization
      "Speed optimization – minification, lazy loading, CDN setup en optimalisatie richting Lighthouse scores van 90+.",
      // Custom animations
      "Custom animations & micro-interactions – GSAP, Framer Motion of Lottie voor smooth transitions en een echte premium experience.",
      // Security + performance
      "Security & performance setup – basis security (firewall, brute-force protection, spam filtering) plus caching en code-optimalisatie.",
      // On-site SEO foundations
      "On-site SEO foundations – alt tags, heading-structuur, metadata, schema markup en keyword-based content layouts.",
    ],
    img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1400&auto=format&fit=crop",
    // frameColor: "#230cf0ff",
    flip: true,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns across search, social, and email to grow traffic and revenue.",
    // ✨ Wat het écht betekent
    details:
      "Digital marketing wordt je 24/7 marketingmachine. Geen ruis, geen chaos — alleen campagnes die presteren, aangestuurd door data.",
    facts: [
      // Google & Meta Ads management
      "Google & Meta Ads management – opzet van search, display, video en shopping campagnes, creative direction voor visuals, A/B testing van copy & creaties en real-time optimalisatie.",
      // Budget allocation
      "Budget allocation systems – slimme verdeling van ad spend over campagnes en kanalen op basis van performance en doelen.",
      // Short-form content
      "Short-form content creation – Reels, TikToks en YouTube Shorts met sterke hooks, trending sounds, storytelling en snelle edits (transitions, captions, punchlines).",
      // Content calendar + strategy
      "Content calendar & strategy – maandelijkse contentkalender met posting frequency, tone of content en doel per post (growth, engagement, conversions).",
      // Email & WhatsApp automation
      "Email & WhatsApp automation – drip campaigns, lead nurturing, abandoned-cart flows en CRM-integraties met converterende templates.",
      // Sales funnels & lead gen
      "Sales funnels & lead gen systems – multi-step funnels met lead magnets, dedicated landing pages en retargeting-flows die cold → warm → hot leads brengen.",
      // Remarketing + retargeting
      "Remarketing & retargeting – pixel-based tracking, custom audiences, dynamic ads en cross-channel retargeting via Google + Meta.",
      // Weekly performance reviews
      "Weekly performance reviews – KPI-dashboard, wat werkte / wat niet, optimalisatie-acties en verschuiving van budget waar nodig.",
      // KPI dashboards
      "KPI dashboards – visuele dashboards met conversiedata, cost per lead / customer, engagement en ad performance.",
    ],
    img: insta,
    // frameColor: "#2914c9ff",
    flip: false,
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    description:
      "Technical audits, on-page improvements, and smart content strategies to boost visibility.",
    // ✨ Wat het écht betekent
    details:
      "SEO is geen trucje maar een duurzame groeistrategie. Het zorgt ervoor dat je jarenlang organisch verkeer en klanten blijft binnenhalen.",
    facts: [
      // Technical SEO audit
      "Technical SEO audit – volledige crawl van de site, broken links, 404’s, redirect-issues, speed-problemen, mobile-optimalisatie en sitemap/indexing-fixes.",
      // On-page optimization
      "On-page optimization – title tags, meta descriptions, heading-structuur, keyword placement, internal linking en content-upgrades.",
      // Keyword strategy + clustering
      "Keyword strategy & clustering – 100–500 keywords in clusters, analyse van search intent en prioriteit voor high-intent pagina’s.",
      // Schema & structured data
      "Schema, meta & structured data – rich snippets via FAQ schema, local business schema, product schema en andere structured data.",
      // Backlink profile review
      "Backlink profile review – analyse van autoriteit, toxic link removal, gap-check versus concurrenten en kansen voor betere links.",
      // Content strategy + roadmap
      "Content strategy & SEO roadmap – 3–12 maanden plan met page creation-prioriteiten, keywords per pagina en blogstrategie.",
      // Internal linking architecture
      "Internal linking architecture – SEO-silo’s, slimme categorie-connecties en contextuele interne links.",
      // Monthly progress reporting
      "Monthly progress reporting – rankings, traffic, conversions en een concreet actieplan voor de volgende maand.",
    ],
    img: web,
    // frameColor: "#2e0980ff",
    flip: true,
  },
  {
    slug: "client-relationship",
    title: "Client Relationship",
    description:
      "Building long-term partnerships with transparency, trust, and measurable value.",
    // ✨ Wat het écht betekent
    details:
      "Geen eenmalig project, maar een partnership. Net zoals grote agencies: lange termijn, duidelijke communicatie en focus op groei.",
    facts: [
      // Dedicated account manager
      "Dedicated account manager – één vaste contactpersoon, 24/7 communicatielijn en heldere projectupdates.",
      // Growth roadmap
      "Growth roadmap – kwartaalplannen, KPI-driven en guidance over waar te investeren en hoe te schalen.",
      // Transparent weekly reporting
      "Transparent weekly reporting – wat we gedaan hebben, wat we geleerd hebben, wat er volgt en hoe ad spend zich verhoudt tot ROI.",
      // Monthly strategy calls
      "Monthly strategy calls – maandelijkse strategy & review calls met focus op data, optimalisatie en nieuwe kansen.",
      // Priority customer support
      "Priority customer support – snelle reactie, dedicated communicatiekanalen en duidelijke prioritering van taken.",
      // Flexible engagement models
      "Flexible engagement models – maandelijkse retainers, performance-based of hybride modellen afgestemd op jouw fase.",
      // Quarterly performance deep-dives
      "Quarterly performance deep-dives – diepgaande ROI-analyses, funnel breakdowns, creative review en een geüpdatete strategie.",
    ],
    img: client,
    // frameColor: "#1e0a6dff",
    flip: false,
  },
];

// helper: map slug → service
export const serviceBySlug = services.reduce((acc, svc) => {
  acc[svc.slug] = svc;
  return acc;
}, {});
