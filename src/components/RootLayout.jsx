// src/components/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

// ✅ make sure these paths & names match your actual files
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";

export default function RootLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />

      <ScrollToTop />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
