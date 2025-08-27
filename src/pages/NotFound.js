import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
      <p className="text-7xl">🪐</p>
      <h2 className="text-2xl font-bold mt-4">404 — Lost in space</h2>
      <p className="text-slate-600 mt-2">The page you’re looking for drifted into a black hole.</p>
      <Link to="/" className="inline-block mt-6">
        <Button className="bg-indigo-600 text-white">Beam me home</Button>
      </Link>
    </motion.div>
  );
}
