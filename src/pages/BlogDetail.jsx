import React from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogPosts";

export default function BlogDetail() {
  const { id } = useParams();
  const postId = Number(id);
  const post = BLOG_POSTS.find((p) => p.id === postId);

  if (!post) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Article not found
          </h1>
          <p className="text-slate-600 mb-4">
            The blog post you’re looking for doesn’t exist or was removed.
          </p>
          <Link
            to="/blog"
            className="inline-block rounded-lg bg-[#314977] px-4 py-2 text-sm font-semibold text-white hover:bg-[#27395d]"
          >
            Back to all articles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-dvh bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#314977] to-[#3386BC] text-white">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-white/80 hover:text-white mb-4"
          >
            ← Back to blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80 mb-4">
            <span className="rounded-md bg-white/15 px-2 py-1 text-xs font-medium">
              {post.category}
            </span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.read}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {post.title}
          </h1>
          <p className="mt-3 max-w-3xl text-white/90">{post.excerpt}</p>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/70">
            <img
              src={post.cover}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-16">
          <article className="prose prose-slate max-w-none prose-headings:text-[#314977]">
            {post.sections?.map((section, idx) => (
              <section key={idx}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </article>

          <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
            <div className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">
                Written by{" "}
              </span>
              {post.author}
            </div>
            <Link
              to="/blog"
              className="text-sm font-semibold text-[#314977] hover:text-[#27395d]"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
