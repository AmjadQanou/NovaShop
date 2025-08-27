import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose max-w-2xl">
      <h2>About NovaShop</h2>
      <p>
        NovaShop is a design‑forward demo store showcasing a modern React stack with React Router, Framer Motion, and Tailwind CSS. It includes a smooth cart experience, animated UI, and a clean layout.
      </p>
      <p>
        This is a client‑side demo—no backend required. Feel free to extend it with your own API and authentication.
      </p>
    </motion.div>
  );
}
