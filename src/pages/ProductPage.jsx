import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useGetProductByIdQuery, useGetProductsQuery } from "../api/shopApi";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import ShopNavbar from "../components/shop/ShopNavbar";
import ProductImage from "../components/shop/ProductImage";
import SEO from "../components/SEO";
import * as IMGS from "../assets/img";
import { ArrowLeft, ShoppingBag, Minus, Plus, Share2 } from "lucide-react";
import { useState } from "react";
import BackButton from "../components/BackButton";
import toast from "react-hot-toast";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product || product.stock < 1) return;
    for (let i = 0; i < quantity; i++) {
      dispatch(addItem(product));
    }
    setAdded(true);
    toast.success(`${product.name} added to bag`);
    setTimeout(() => setAdded(false), 2000);
  };

  if (isLoading) return <div className="h-screen flex items-center justify-center bg-white">Loading...</div>;
  if (error || !product) return <div className="h-screen flex items-center justify-center">Product not found</div>;

  const isOutOfStock = product.stock < 1;

  return (
    <div className="h-screen bg-white text-neutral-900 font-jost overflow-hidden flex flex-col">
      <SEO title={`${product.name} — The Collection`} description={product.description} />
      <ShopNavbar />

      <main className="flex-1 flex flex-col lg:flex-row mt-16 overflow-hidden">
        
        {/* Left Side: Large Image */}
        <div className="lg:w-1/2 h-[50vh] lg:h-full bg-neutral-50 overflow-y-auto no-scrollbar border-r border-neutral-100">
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`w-full h-full lg:h-[150vh] flex flex-col ${isOutOfStock ? 'grayscale opacity-70' : ''}`}
           >
              <ProductImage 
                src={IMGS[product.imgKey] || product.imgKey} 
                alt={product.name} 
                className="w-full h-full lg:h-[100vh]" 
                width={1200}
              />
              <ProductImage 
                src={IMGS[product.imgKey] || product.imgKey} 
                alt={product.name} 
                className="hidden lg:block w-full h-[50vh] grayscale opacity-30" 
                width={1200}
              />
           </motion.div>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:w-1/2 h-full flex flex-col p-8 lg:p-16 lg:pt-24 justify-between overflow-y-auto">
           <div>
              <div className="flex justify-between items-center mb-8">
                 <BackButton to="/shop" label="Back to Shop" />
                 <span className={`text-[0.6rem] uppercase tracking-[0.3em] font-bold ${isOutOfStock ? 'text-neutral-300' : 'text-[#b87b5a]'}`}>
                    {isOutOfStock ? 'Sold Out' : 'In Stock'}
                 </span>
              </div>

              <div className="mb-12">
                 <h1 className="text-4xl lg:text-6xl font-medium uppercase tracking-tighter leading-none mb-4">{product.name}</h1>
                 <p className="text-[0.65rem] italic text-neutral-400 uppercase tracking-[0.3em]">{product.cat}</p>
              </div>

              <div className="space-y-12 mb-12">
                 <p className="text-sm md:text-base leading-relaxed text-neutral-600 max-w-md font-light">
                    {product.description}
                 </p>
                 
                 <div className="flex items-center gap-12">
                    <div className="space-y-2">
                       <span className="text-[0.55rem] uppercase tracking-[0.3em] text-neutral-400 font-bold block">Series</span>
                       <span className="text-[0.7rem] uppercase tracking-widest font-bold">Studio 24</span>
                    </div>
                    <div className="space-y-2">
                       <span className="text-[0.55rem] uppercase tracking-[0.3em] text-neutral-400 font-bold block">Kiln</span>
                       <span className="text-[0.7rem] uppercase tracking-widest font-bold">Cone 6</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Purchase Bar */}
           <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-8 bg-white">
              <div className="flex items-center gap-8">
                 <div className="flex flex-col">
                    <span className="text-[0.6rem] uppercase tracking-[0.3em] text-neutral-400 font-bold mb-1">Price</span>
                    <span className={`text-2xl font-light tracking-tighter ${isOutOfStock ? 'text-neutral-300' : ''}`}>₹{product.price}</span>
                 </div>
                 
                 {!isOutOfStock && (
                   <div className="flex items-center border border-neutral-200 rounded-lg">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-neutral-50 transition-colors"><Minus size={12} /></button>
                      <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-neutral-50 transition-colors"><Plus size={12} /></button>
                   </div>
                 )}
              </div>

              <button 
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`flex-1 sm:flex-none sm:px-12 py-5 rounded-xl text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${isOutOfStock ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed' : 'bg-[#b87b5a] text-white shadow-xl shadow-[#b87b5a]/20 hover:opacity-90 active:scale-[0.98]'}`}
              >
                {isOutOfStock ? "Currently Unavailable" : (added ? "Added to Bag" : "Add to Bag")} 
                {!isOutOfStock && <ShoppingBag size={16} />}
              </button>
           </div>
        </div>
      </main>

      <div className="lg:hidden fixed bottom-6 right-6 z-50">
         <button className="w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center text-neutral-400 border border-neutral-100">
            <Share2 size={20} />
         </button>
      </div>
    </div>
  );
}
