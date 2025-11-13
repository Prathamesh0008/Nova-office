import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";
export default function RootLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <ScrollToTop></ScrollToTop>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
}
