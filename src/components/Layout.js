import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">{children}</main>
      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} NovaShop. All rights reserved.
      </footer>
    </div>
  );
}
