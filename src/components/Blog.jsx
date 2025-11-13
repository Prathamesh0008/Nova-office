import React, { useMemo, useState } from "react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../data/blogPosts";
import { Link } from "react-router-dom";

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
      {children}
    </span>
  );
}

function CategoryPill({ active, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm font-medium transition",
        active
          ? "text-white bg-gradient-to-r from-[#314977] to-[#3386BC] shadow"
          : "text-[#314977] ring-1 ring-[#314977] hover:bg-[#314977]/10",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function PostCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {new Date(post.date).toLocaleDateString()}
          </span>
          <span className="text-xs text-slate-500">{post.read}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-slate-600">{post.excerpt}</p>
        <div className="pt-1">
          <span className="rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-[#314977] ring-1 ring-[#314977]/20">
            {post.category}
          </span>
        </div>
        <Link
          to={`/blog/${post.id}`}
          className="inline-block text-sm font-semibold text-[#314977] underline underline-offset-4 hover:text-[#2b3f6a]"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

export default function Blog() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const posts = useMemo(() => {
    let data = [...BLOG_POSTS];
    if (cat !== "All") data = data.filter((p) => p.category === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return data;
  }, [query, cat]);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-dvh bg-white text-slate-800">
      {/* Hero / Featured */}
      <section className="bg-gradient-to-r from-[#314977] to-[#3386BC] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <Badge>Marketing Insights</Badge>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Our Growth Blog
              </h1>
              <p className="mt-3 text-white/90">
                Actionable playbooks for websites, SEO, ads, and social—built to
                get you more leads, calls, and revenue.
              </p>
            </div>

            {/* Search */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-md rounded-xl bg-white/10 p-2 backdrop-blur ring-1 ring-white/20"
            >
              <label className="sr-only" htmlFor="search">
                Search
              </label>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-white/80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  id="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search SEO, web, ads..."
                  className="w-full bg-transparent text-white placeholder-white/70 outline-none"
                />
              </div>
            </form>
          </div>

          {/* Featured card */}
          {featured && (
            <Link
              to={`/blog/${featured.id}`}
              className="group mt-10 block overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative h-56 w-full overflow-hidden rounded-xl ring-1 ring-white/15">
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <span>
                      {new Date(featured.date).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span>{featured.read}</span>
                  </div>
                  <h2 className="mt-2 text-2xl font-bold">
                    {featured.title}
                  </h2>
                  <p className="mt-2 text-white/90">{featured.excerpt}</p>
                  <div className="mt-4">
                    <span className="rounded-md bg-white/15 px-2 py-1 text-xs font-medium ring-1 ring-white/25">
                      {featured.category}
                    </span>
                  </div>
                  <span className="mt-5 inline-block text-sm font-semibold underline underline-offset-4">
                    Read the story →
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-wrap items-center gap-3">
            {BLOG_CATEGORIES.map((c) => (
              <CategoryPill
                key={c}
                label={c}
                active={cat === c}
                onClick={() => setCat(c)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grid of posts */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          {rest.length === 0 && (
            <p className="text-sm text-slate-500">
              No more posts match your filters.
            </p>
          )}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>

          {/* CTA band */}
          <div className="mt-14 overflow-hidden rounded-2xl bg-gradient-to-r from-[#314977] to-[#3386BC] p-8 text-white ring-1 ring-white/20">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  Get marketing insights in your inbox
                </h3>
                <p className="text-white/85">
                  Subscribe for new breakdowns on SEO, landing pages, ad
                  campaigns, and conversion strategy.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-md items-center gap-2 rounded-xl bg-white/10 p-2 backdrop-blur ring-1 ring-white/20"
              >
                <label className="sr-only" htmlFor="newsletter">
                  Email
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full bg-transparent text-white placeholder-white/70 outline-none"
                />
                <button
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#314977] hover:bg-white/90"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
