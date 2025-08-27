import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Cart() {
  const { items, inc, dec, remove, total, clear } = useCart();
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Cart</h2>
        {items.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-slate-600">Your cart is empty.</p>
            <Button onClick={() => navigate("/shop")} className="bg-indigo-600 text-white mt-4">Go shopping</Button>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="p-4 flex gap-4 items-center">
                  <img src={item.image} alt={item.title} className="h-20 w-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800">{item.title}</p>
                    <p className="text-slate-500 text-sm line-clamp-1">{item.desc}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="inline-flex items-center rounded-xl border border-slate-200">
                        <button className="px-2 py-1" onClick={() => dec(item.id)}>
                          <Minus size={16} />
                        </button>
                        <span className="px-3 text-sm font-semibold">{item.qty}</span>
                        <button className="px-2 py-1" onClick={() => inc(item.id)}>
                          <Plus size={16} />
                        </button>
                      </div>
                      <span className="text-slate-700 font-semibold">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="bg-white border" onClick={() => remove(item.id)}>
                    <Trash2 size={16} />
                  </Button>
                </Card>
              ))}
            </div>
            <Card className="p-6 h-fit sticky top-24">
              <h3 className="text-lg font-semibold text-slate-800">Order summary</h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t my-3"></div>
                <div className="flex justify-between font-semibold text-slate-800">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="bg-indigo-600 text-white w-full mt-4">Checkout</Button>
              <Button onClick={clear} className="bg-white border w-full mt-2">Clear cart</Button>
            </Card>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
