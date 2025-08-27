import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronRight,
  ArrowRight,
  Play,
  Shield,
  Truck,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Home() {
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Immersive Shopping",
      desc: "Experience products like never before with our AR preview technology.",
      color: "from-violet-600 to-fuchsia-600",
    },
    {
      title: "AI-Powered Recommendations",
      desc: "Discover products perfectly matched to your preferences with our intelligent system.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Instant Checkout",
      desc: "One-click purchasing with biometric authentication for ultimate convenience.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
            className="absolute top-1/4 -left-16 h-96 w-96 rounded-full bg-gradient-to-r from-violet-400/20 to-purple-400/20 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, -40, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
            className="absolute bottom-1/3 -right-20 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/70 to-white" />
        </div>

        <div className="absolute inset-0 -z-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                rotate: [0, 180, 360],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                background:
                  i % 3 === 0
                    ? "rgba(139, 92, 246, 0.4)"
                    : i % 3 === 1
                    ? "rgba(14, 165, 233, 0.4)"
                    : "rgba(236, 72, 153, 0.4)",
              }}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20 py-16 min-h-screen">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center rounded-full px-4 py-2 text-xs font-medium bg-white/80 backdrop-blur-md border border-slate-200/50 text-slate-700 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
              Next-gen shopping experience
              <ChevronRight size={14} className="ml-1" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-slate-900"
            >
              The future of{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
                  shopping
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-full"
                />
              </span>{" "}
              is here
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-5 text-slate-600 text-lg max-w-xl"
            >
              Discover curated tech essentials with delightful motion and a
              silky‑smooth shopping experience powered by AI and AR.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex gap-4"
            >
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-indigo-500/30"
                onClick={() => navigate("/shop")}
              >
                <span className="relative z-10">Shop now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                className="bg-white/80 backdrop-blur-md border border-slate-200/70 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                onClick={() => navigate("/about")}
              >
                <span>See how it works</span>
                <Play
                  size={16}
                  className="ml-2 group-hover:translate-x-0.5 transition-transform"
                />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-lg"
            >
              {["AI-Curated", "AR Preview", "1-Click Checkout"].map(
                (tag, i) => (
                  <motion.div
                    key={tag}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Card className="p-4 text-center backdrop-blur-md bg-white/40 border border-white/30 shadow-sm hover:shadow-md transition-all duration-300">
                      <p className="text-sm font-semibold text-slate-800">
                        {tag}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Next-gen feature
                      </p>
                    </Card>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 18, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
                alt="Hero gadgets"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -top-6 -left-6 p-4 shadow-2xl backdrop-blur-md bg-white/80 border border-white/30 rounded-2xl transition-transform hover:-translate-y-1"
            >
              <p className="text-sm font-semibold text-slate-800">
                Top‑rated picks
              </p>
              <div className="flex items-center gap-1 text-amber-400 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-6 -right-6 p-4 shadow-2xl backdrop-blur-md bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white rounded-2xl transition-transform hover:-translate-y-1"
            >
              <p className="text-sm font-semibold">Trending now</p>
              <div className="flex items-center gap-1 mt-1 text-xs">
                <span>+254% this month</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-12 top-1/2 h-24 w-24 rounded-full border-2 border-dashed border-slate-300/50"
            />

            <motion.div
              className="absolute -right-6 top-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <section className="relative px-6 lg:px-20 py-16 bg-gradient-to-r from-slate-900/5 to-slate-900/3 rounded-3xl mx-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-slate-900 mb-4"
            >
              Revolutionizing your shopping experience
            </motion.h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-2xl bg-gradient-to-r ${features[currentFeature].color} text-white shadow-lg`}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {features[currentFeature].title}
                </h3>
                <p>{features[currentFeature].desc}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`h-2 w-2 rounded-full ${
                    currentFeature === index ? "bg-indigo-600" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 px-6 lg:px-20">
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-slate-900"
            >
              Trending now
            </motion.h2>
            <Button
              onClick={() => navigate("/shop")}
              className="group bg-white/80 backdrop-blur-md border border-slate-200/70 hover:shadow-md transition-all"
            >
              View all
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {PRODUCTS.slice(0, 3).map((p) => (
              <motion.div
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 100 },
                  },
                }}
                whileHover={{ y: -5 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mt-20 px-6 lg:px-20">
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-slate-900"
            >
              Best sellers
            </motion.h2>
            <Button
              onClick={() => navigate("/shop")}
              className="group bg-white/80 backdrop-blur-md border border-slate-200/70 hover:shadow-md transition-all"
            >
              View all
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(PRODUCTS.length > 3 ? PRODUCTS.slice(3, 6) : PRODUCTS).map(
              (p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              )
            )}
          </div>
        </section>

        <section className="mt-20 px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 mb-8 text-center"
          >
            Featured categories
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Audio",
                img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1600&auto=format&fit=crop",
                count: "24 products",
              },
              {
                title: "Wearables",
                img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
                count: "18 products",
              },
              {
                title: "Accessories",
                img: "https://images.unsplash.com/photo-1511381939415-c1b4b3b53a65?q=80&w=1600&auto=format&fit=crop",
                count: "32 products",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card
                  className="overflow-hidden group cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/shop")}
                >
                  <div className="relative h-60">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <p className="text-white text-xl font-semibold">
                        {c.title}
                      </p>
                      <p className="text-white/80 text-sm mt-1">{c.count}</p>
                    </div>
                    <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 mb-12 text-center"
          >
            Why choose NovaShop?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck size={32} />,
                title: "Fast, free shipping",
                desc: "Orders ship within 24 hours, always free. Track your delivery in real-time.",
                color: "text-blue-600",
              },
              {
                icon: <Shield size={32} />,
                title: "Secure checkout",
                desc: "Your data is protected with industry‑leading security and encryption.",
                color: "text-emerald-600",
              },
              {
                icon: <CheckCircle size={32} />,
                title: "Curated quality",
                desc: "Only the best tech, hand‑picked by our team of experts. 100% quality guarantee.",
                color: "text-amber-600",
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-8 text-center backdrop-blur-sm bg-white/50 border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-white shadow-md ${b.color} mb-6`}
                  >
                    {b.icon}
                  </div>
                  <p className="font-bold text-slate-800 text-lg">{b.title}</p>
                  <p className="text-slate-600 text-sm mt-3">{b.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 px-6 lg:px-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 -z-10" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl -z-10" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl -z-10" />

            <Card className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md bg-white/70 border border-white/30 shadow-xl">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900">
                  Get updates and exclusive deals
                </h3>
                <p className="text-slate-600 mt-2">
                  Join our newsletter for early access to new products and
                  special offers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50"
                />
                <Button className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white hover:shadow-lg transition-all whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </motion.section>
    </AnimatePresence>
  );
}
