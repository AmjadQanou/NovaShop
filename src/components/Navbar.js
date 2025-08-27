import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import Button from "./ui/Button";

export default function Navbar() {
  const { count } = useCart();
  return (
    <div className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 opacity-90 blur-2xl -z-10 h-28" />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/90 flex items-center justify-center shadow">
            <motion.div
              initial={{ rotate: -20 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-indigo-600 font-black"
            >
              N
            </motion.div>
          </div>
          <span className="text-white text-xl font-bold tracking-tight">NovaShop</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/shop" className="text-white/90 hover:text-white text-sm">Shop</Link>
          <Link to="/about" className="text-white/90 hover:text-white text-sm">About</Link>
          <Link to="/cart" className="relative">
            <Button className="bg-white text-indigo-700 flex items-center gap-2">
              <ShoppingCart size={18} />
              <span>Cart</span>
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-1 inline-flex items-center justify-center text-xs font-bold h-5 min-w-5 px-1 rounded-full bg-indigo-600 text-white"
                >
                  {count}
                </motion.span>
              )}
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
