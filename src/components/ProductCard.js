import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { add } = useCart();
  return (
    <Card className="overflow-hidden">
      <motion.div whileHover={{ scale: 1.02 }} className="relative">
        <img src={product.image} alt={product.title} className="h-56 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-white/90 text-xs inline-flex items-center gap-1">
            <Star size={14} className="text-amber-400" /> {product.rating}
          </span>
          <span className="text-white font-semibold">${product.price}</span>
        </div>
      </motion.div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-800 line-clamp-1">{product.title}</h3>
        <p className="text-slate-500 text-sm line-clamp-2 mt-1">{product.desc}</p>
        <Button onClick={() => add(product)} className="bg-indigo-600 text-white w-full mt-4 flex items-center justify-center gap-2">
          <ShoppingCart size={18} /> Add to cart
        </Button>
      </div>
    </Card>
  );
}
