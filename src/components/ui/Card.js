import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}
