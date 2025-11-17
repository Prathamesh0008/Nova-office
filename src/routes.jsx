import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";

import OurServices from "./components/OurServices.jsx"

// Lazy pages (your files already exist)
const Home    = lazy(() => import("./pages/Home.jsx"));
const About   = lazy(() => import("./components/About.jsx"));
const Blog    = lazy(() => import("./components/Blog.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const BlogDetail = lazy(() => import("./pages/BlogDetail.jsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.jsx"));

// Optional: services/portfolios later
const Services = lazy(() => import("./components/OurServices.jsx"));
const Portfolios = lazy(() => import("./pages/Portfolio.jsx"));
const PortfolioDetail = lazy(()=> import("./pages/portfolioDeatail.jsx"))
const NotFound = () => (
  <div className="min-h-[60vh] grid place-items-center p-8 text-center">
    <div>
      <h1 className="text-3xl font-bold">404 — Page not found</h1>
      <p className="opacity-70 mt-2">The page you’re looking for doesn’t exist.</p>
      <a href="/" className="inline-block mt-6 px-4 py-2 rounded bg-[#314977] text-white">Go Home</a>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "blog/:id", element: <BlogDetail /> },
      { path: "services", element: <Services /> },
      { path: "service/:slug", element: <ServiceDetail /> },
      { path: "portfolios", element: <Portfolios /> },
      { path: "portfolio/:slug", element: <PortfolioDetail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
