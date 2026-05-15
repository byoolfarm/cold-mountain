import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartDrawer from "./CartDrawer";

export default function ShopNavbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const cartItemsCount = useSelector(state => state.cart.items.reduce((acc, item) => acc + item.quantity, 0));

  // Trigger animation when item count changes
  useEffect(() => {
    if (cartItemsCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 400);
      return () => clearTimeout(timer);
    }
  }, [cartItemsCount]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 px-6 md:px-12 py-4 flex justify-between items-center font-jost">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Studio
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/work" className="text-[0.65rem] tracking-[0.2em] uppercase hover:opacity-50 transition-opacity">Portfolio</Link>
          <motion.button 
            animate={isAnimating ? { 
              scale: [1, 1.25, 1],
              rotate: [0, 15, -15, 0]
            } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => setCartOpen(true)}
            className="relative p-2 hover:opacity-50 transition-opacity"
          >
            <ShoppingBag 
              size={20} 
              strokeWidth={1.5} 
              className={`transition-colors duration-300 ${isAnimating ? 'text-[#b87b5a]' : 'text-neutral-900'}`} 
            />
            <AnimatePresence>
              {cartItemsCount > 0 && (
                <motion.span 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  key="cart-badge"
                  className="absolute -top-1 -right-1 bg-[#b87b5a] text-white text-[0.5rem] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm"
                >
                  <motion.span
                    key={cartItemsCount}
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-block"
                  >
                    {cartItemsCount}
                  </motion.span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
