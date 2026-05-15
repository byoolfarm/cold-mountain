import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem, deleteItem } from "../../store/cartSlice";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import * as IMGS from "../../assets/img";
import { optimizeSupabaseImage } from "../../lib/supabase";

export default function CartDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[500]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-[#fcfbf9] z-[501] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-neutral-200 flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <h2 className="text-xl font-bold uppercase tracking-tighter">Your Bag ({items.reduce((acc, item) => acc + item.quantity, 0)})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-neutral-50 rounded-full transition-colors">
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag size={48} strokeWidth={0.5} className="mb-6" />
                  <p className="text-[0.7rem] uppercase tracking-[0.2em]">Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 border-b border-neutral-900 text-[0.6rem] tracking-[0.2em] uppercase font-bold"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-24 aspect-[3/4] bg-neutral-100 flex-none overflow-hidden border border-neutral-200">
                      <img src={optimizeSupabaseImage(IMGS[item.imgKey] || item.imgKey, 300)} alt={item.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-tight leading-tight">{item.name}</h3>
                          <p className="text-[0.6rem] tracking-[0.1em] text-neutral-400 uppercase mt-1">{item.cat}</p>
                        </div>
                        <button 
                          onClick={() => dispatch(deleteItem(item.id))}
                          className="text-neutral-300 hover:text-neutral-900 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center border border-neutral-200 scale-90 origin-left">
                          <button 
                            onClick={() => dispatch(removeItem(item.id))}
                            className="p-1 px-2 hover:bg-neutral-50"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-[0.75rem] font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => dispatch(addItem(item))}
                            className="p-1 px-2 hover:bg-neutral-50"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-medium">₹{item.totalPrice}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 bg-white border-t border-neutral-200 space-y-6">
                <div className="flex justify-between items-end">
                   <span className="text-[0.65rem] tracking-[0.3em] uppercase text-neutral-400">Subtotal</span>
                   <span className="text-2xl font-light">₹{totalAmount}</span>
                </div>
                <p className="text-[0.6rem] text-neutral-400 uppercase tracking-widest text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <Link 
                  to="/checkout" 
                  onClick={onClose}
                  className="w-full bg-[#b87b5a] text-white py-5 flex items-center justify-center gap-3 text-[0.75rem] tracking-[0.2em] uppercase font-bold hover:opacity-90 transition-all group/btn"
                >
                  Proceed to Checkout <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
