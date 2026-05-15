import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import ShopNavbar from "../components/shop/ShopNavbar";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowLeft, CheckCircle2, LogIn } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as IMGS from "../assets/img";
import { optimizeSupabaseImage } from "../lib/supabase";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state) => state.cart);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state

  const handlePlaceOrder = () => {
    if (!isLoggedIn) {
      alert("Please sign in with Google to continue.");
      return;
    }
    setIsOrdered(true);
    setTimeout(() => {
      dispatch(clearCart());
    }, 500);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-[#fcfbf9] flex flex-col items-center justify-center p-6 text-center font-jost">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 md:p-16 border border-neutral-200 max-w-lg w-full shadow-sm"
        >
          <CheckCircle2 size={64} className="mx-auto mb-8 text-neutral-900" strokeWidth={1} />
          <h1 className="text-3xl font-bold uppercase tracking-tighter mb-4">Thank you for your order</h1>
          <p className="text-neutral-500 uppercase tracking-widest text-[0.7rem] mb-12">
            Order #CMS-{Math.floor(Math.random() * 100000)} has been received. <br />
            We'll send you a confirmation email shortly.
          </p>
          <button 
            onClick={() => navigate("/shop")}
            className="w-full bg-neutral-900 text-white py-5 text-[0.75rem] tracking-[0.2em] uppercase font-bold hover:bg-neutral-800 transition-all"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-neutral-900 font-jost">
      <SEO title="Checkout — The Collection" />
      <ShopNavbar />

      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="flex items-center gap-4 mb-12">
           <button onClick={() => navigate(-1)} className="hover:opacity-50 transition-opacity"><ArrowLeft size={20} /></button>
           <h1 className="text-3xl font-bold uppercase tracking-tighter">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Order Details */}
          <div className="lg:col-span-7 space-y-12">
             <section>
                <h2 className="text-[0.7rem] tracking-[0.3em] uppercase font-bold mb-8 border-b border-neutral-200 pb-4">1. Order Summary</h2>
                <div className="space-y-6">
                   {items.map(item => (
                     <div key={item.id} className="flex gap-6 items-center">
                        <div className="w-16 h-20 bg-neutral-100 flex-none border border-neutral-200">
                           <img src={optimizeSupabaseImage(IMGS[item.imgKey] || item.imgKey, 200)} className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="flex-1">
                           <h3 className="text-sm font-bold uppercase tracking-tight">{item.name}</h3>
                           <p className="text-[0.6rem] text-neutral-400 uppercase tracking-widest">Qty: {item.quantity}</p>
                        </div>
                        <span className="text-sm font-medium">₹{item.totalPrice}</span>
                     </div>
                   ))}
                   {items.length === 0 && (
                     <p className="text-neutral-400 uppercase text-[0.7rem] tracking-widest italic">No items in your bag.</p>
                   )}
                </div>
             </section>

             <section>
                <h2 className="text-[0.7rem] tracking-[0.3em] uppercase font-bold mb-8 border-b border-neutral-200 pb-4">2. Account</h2>
                {!isLoggedIn ? (
                  <div className="bg-neutral-50 border border-neutral-200 p-8 text-center">
                     <p className="text-[0.7rem] uppercase tracking-widest text-neutral-500 mb-6">Please sign in to complete your purchase</p>
                     <button 
                       onClick={() => setIsLoggedIn(true)}
                       className="mx-auto flex items-center gap-3 px-8 py-4 bg-white border border-neutral-200 text-[0.7rem] tracking-[0.2em] uppercase font-bold hover:bg-neutral-50 transition-all shadow-sm"
                     >
                       <LogIn size={16} strokeWidth={1.5} /> Sign in with Google
                     </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 p-6 border border-neutral-200 bg-white">
                     <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white text-xs">JD</div>
                     <div>
                        <p className="text-sm font-bold uppercase tracking-tight">John Doe</p>
                        <p className="text-[0.6rem] text-neutral-400 uppercase tracking-widest">john.doe@example.com</p>
                     </div>
                     <button onClick={() => setIsLoggedIn(false)} className="ml-auto text-[0.6rem] uppercase tracking-widest border-b border-neutral-400">Logout</button>
                  </div>
                )}
             </section>
          </div>

          {/* Payment Sidebar */}
          <div className="lg:col-span-5">
             <div className="sticky top-32 bg-white border border-neutral-200 p-8 space-y-8 shadow-sm">
                <h2 className="text-[0.7rem] tracking-[0.3em] uppercase font-bold border-b border-neutral-200 pb-4">Payment Summary</h2>
                
                <div className="space-y-4">
                   <div className="flex justify-between text-sm">
                      <span className="text-neutral-400 uppercase tracking-widest text-[0.65rem]">Subtotal</span>
                      <span>₹{totalAmount}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-neutral-400 uppercase tracking-widest text-[0.65rem]">Shipping</span>
                      <span className="text-green-600 uppercase tracking-widest text-[0.65rem]">Free</span>
                   </div>
                   <div className="pt-4 border-t border-neutral-100 flex justify-between items-end">
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em]">Total</span>
                      <span className="text-3xl font-light">₹{totalAmount}</span>
                   </div>
                </div>

                <button 
                  disabled={items.length === 0}
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#b87b5a] text-white py-5 text-[0.75rem] tracking-[0.2em] uppercase font-bold hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Place Order
                </button>

                <p className="text-[0.6rem] text-neutral-400 text-center leading-relaxed uppercase tracking-widest">
                  Secure checkout powered by Supabase. <br />
                  By placing an order, you agree to our terms of service.
                </p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
