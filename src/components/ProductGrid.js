import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Card from "./ui/Card";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    if (!q) return products;
    return products.filter(
      (p) => p.title.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase())
    );
  }, [q, products]);

  return (
    <>
      <div className="mb-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products..."
          className="w-full sm:w-80 px-4 py-2 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <ProductCard product={p} />
          </motion.div>
        ))}
        {list.length === 0 && (
          <Card className="p-8 text-center col-span-full">
            <p className="text-slate-600">No products found.</p>
          </Card>
        )}
      </div>
    </>
  );
}
