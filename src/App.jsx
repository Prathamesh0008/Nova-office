<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
// src/App.jsx
import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";

// Correct pages
import OurServices from "./pages/OurServices.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";

// Lazy pages
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Blog = lazy(() => import("./components/Blog.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const BlogDetail = lazy(() => import("./pages/BlogDetail.jsx"));
const Portfolios = lazy(() => import("./components/Portfolios.jsx"));

const NotFound = () => (
  <div className="min-h-[60vh] grid place-items-center p-8 text-center">
    <div>
      <h1 className="text-3xl font-bold">404 — Page not found</h1>
      <p className="opacity-70 mt-2">The page you’re looking for doesn’t exist.</p>
      <a
        href="/"
        className="inline-block mt-6 px-4 py-2 rounded bg-[#314977] text-white"
      >
        Go Home
      </a>
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

      // ✅ /services page
      { path: "services", element: <OurServices /> },

      // ✅ /services/:slug details page
      { path: "services/:slug", element: <ServiceDetail /> },

      { path: "portfolios", element: <Portfolios /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
>>>>>>> Stashed changes
