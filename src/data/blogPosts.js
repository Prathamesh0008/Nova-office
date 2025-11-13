// src/data/blogPosts.js

export const BLOG_POSTS = [
  {
    id: 1,
    title: "SEO Roadmap 2025: From Invisible to Top 3",
    excerpt:
      "A step-by-step blueprint for technical SEO, content clusters, and backlinks that actually move rankings.",
    cover:
      "https://images.pexels.com/photos/5716034/pexels-photo-5716034.jpeg?cs=srgb&dl=pexels-artempodrez-5716034.jpg&fm=jpg",
    date: "2025-10-12",
    category: "SEO",
    author: "Growth Team",
    read: "7 min",
    sections: [
      {
        heading: "Why SEO Still Prints Money in 2025",
        body: `Search hasn’t died; it evolved. Buyers compare, research, and validate on Google before they ever talk to sales. 
If your brand doesn’t show up on the first page, you’re invisible at the exact moment they’re ready to spend.`,
      },
      {
        heading: "The Foundation: Technical SEO",
        body: `Before content or backlinks, you fix crawlability and performance. Clean site architecture, fast load times, 
mobile-first UX, and proper indexing. No fancy tricks—just letting Google understand and trust your website.`,
      },
      {
        heading: "Content Clusters, Not Random Blogs",
        body: `Instead of posting random topics, you build topic clusters: one strong pillar page plus multiple supporting articles. 
Each piece is internally linked, answering one very specific intent. It feels good for the user and obvious for the algorithm.`,
      },
    ],
  },
  {
    id: 2,
    title: "High-Converting Websites: Design That Sells, Not Just Looks Good",
    excerpt:
      "Hero sections, offer hierarchy, and UX patterns that turn traffic into leads and booked calls.",
    cover:
      "https://images.pexels.com/photos/4345410/pexels-photo-4345410.jpeg?cs=srgb&dl=pexels-edmond-dantes-4345410.jpg&fm=jpg",
    date: "2025-09-28",
    category: "Web Development",
    author: "UX & Dev",
    read: "6 min",
    sections: [
      {
        heading: "Pretty vs. Profitable",
        body: `Most websites are portfolios, not sales machines. A conversion-first site focuses on one thing: 
making it stupidly easy for the right visitor to understand who you are, what you do, and what they should do next.`,
      },
      {
        heading: "The Hero That Does the Heavy Lifting",
        body: `Above the fold you need: clear headline, sharp subline, proof (logos, stats, or social proof), and one primary CTA. 
No sliders, no distraction. One job: move the visitor into a conversation or a capture point.`,
      },
      {
        heading: "Trust, Proof, and Frictionless UX",
        body: `Case studies, reviews, FAQs, and simple navigation reduce mental friction. Good UX isn’t just rounded corners; 
it’s removing every reason to hesitate—slow pages, confusing forms, vague offers, and generic copy.`,
      },
    ],
  },
  {
    id: 3,
    title: "Social Media That Drives Sales: Reels, Carousels & UGC System",
    excerpt:
      "How to build a content engine for Instagram, Facebook, and LinkedIn that feeds your funnel daily.",
    cover:
      "https://images.pexels.com/photos/17514177/pexels-photo-17514177.jpeg?cs=srgb&dl=pexels-julio-lopez-75309646-17514177.jpg&fm=jpg",
    date: "2025-08-05",
    category: "Social Media",
    author: "Content Studio",
    read: "5 min",
    sections: [
      {
        heading: "Stop Posting, Start Programming the Feed",
        body: `Random posts create random results. A proper system defines content pillars, posting cadence, and formats for each platform. 
Think: value, proof, behind-the-scenes, and direct offers—rotated with intention.`,
      },
      {
        heading: "Reels & Short-Form as the Growth Engine",
        body: `Short videos carry the widest reach. They hook with the first 2 seconds, deliver one clear idea, and end with a soft CTA. 
The goal isn’t virality; it’s consistent, compounding visibility with the right audience.`,
      },
      {
        heading: "Turn Attention into Pipeline",
        body: `Every profile should guide people into DMs, landing pages, or lead magnets. Highlights, pinned posts, and link-in-bio 
are part of a real funnel—not decoration. Followers don’t pay rent; customers do.`,
      },
    ],
  },
  {
    id: 4,
    title: "Performance Funnels: From Click to Client",
    excerpt:
      "Map the full journey: ads, landing pages, email flows, and retargeting that work together as one system.",
    cover:
      "https://images.pexels.com/photos/5716034/pexels-photo-5716034.jpeg?cs=srgb&dl=pexels-artempodrez-5716034.jpg&fm=jpg",
    date: "2025-07-18",
    category: "Strategy",
    author: "Marketing Ops",
    read: "8 min",
    sections: [
      {
        heading: "Why Single-Touch Campaigns Fail",
        body: `Click → homepage → hope is not a funnel. Serious buyers need multiple touchpoints: ad, landing page, value piece, 
follow-up, and retargeting. You design the journey instead of leaving it to luck.`,
      },
      {
        heading: "Landing Pages Built for One Decision",
        body: `Each page should have one offer and one CTA. The copy answers: what is this, who is it for, why trust us, what happens next. 
Everything else is either support or distraction—and distraction gets cut.`,
      },
      {
        heading: "Track, Optimize, Repeat",
        body: `Funnel performance is a loop: measure, diagnose, tweak. Low CTR? Fix hooks. High CTR, low leads? Fix page. 
Plenty of leads, no sales? Fix offer and follow-up. Numbers tell you exactly where to look.`,
      },
    ],
  },
];

export const BLOG_CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
];
