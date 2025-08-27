import React from "react";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2">
      <input
        placeholder="Search the shop..."
        className="w-56 sm:w-72 px-4 py-2 rounded-xl border border-white/40 bg-white/60 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/80"
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate("/shop");
        }}
      />
      <Button onClick={() => navigate("/shop")} className="bg-white">Explore</Button>
    </div>
  );
}
