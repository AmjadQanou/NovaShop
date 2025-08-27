import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchBox from "../components/SearchBox";
import ProductGrid from "../components/ProductGrid";
import { PRODUCTS } from "../data/products";

export default function Shop() {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Shop</h2>
            <p className="text-slate-600">Browse our selection of modern tech and accessories.</p>
          </div>
          <SearchBox />
        </div>
        <ProductGrid products={PRODUCTS} />
      </motion.div>
    </AnimatePresence>
  );
}
