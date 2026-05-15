import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { useGetProductsQuery, useGetCategoriesQuery } from "../api/shopApi";
import ShopNavbar from "../components/shop/ShopNavbar";
import ProductImage from "../components/shop/ProductImage";
import SEO from "../components/SEO";
import * as IMGS from "../assets/img";
import toast from "react-hot-toast";
import { Search, Plus, ShoppingBag, X, RotateCcw, ArrowDown, Loader2, ChevronDown, Filter } from "lucide-react";

export default function ShopPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  
  const searchQuery = searchParams.get("q") || "";
  const selectedCat = searchParams.get("cat") || "all";
  const sortOption = searchParams.get("sort") || "featured";

  const { data: products = [], isLoading: loadingProducts } = useGetProductsQuery();
  const { data: categories = [], isLoading: loadingCats } = useGetCategoriesQuery();
  
  const [itemsToShow, setItemsToShow] = useState(12);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  // 1. ROBUST HIERARCHY LOGIC
  // We determine the active parent ID based on the current selection.
  // This ensures sub-menus stay visible even when a child is selected.
  const activeParentId = useMemo(() => {
    if (selectedCat === 'all' || categories.length === 0) return null;
    
    const current = categories.find(c => c.id === selectedCat);
    if (!current) return null;
    
    // If current is a child, return its parent. 
    // If current is a parent, return itself (to show its children).
    if (current.parentId) return current.parentId;
    
    // Check if this category HAS children. If so, it's an active parent.
    const hasChildren = categories.some(c => c.parentId === current.id);
    return hasChildren ? current.id : null;
  }, [selectedCat, categories]);

  const subCats = useMemo(() => {
    if (!activeParentId) return [];
    return categories.filter(c => c.parentId === activeParentId);
  }, [activeParentId, categories]);

  const updateFilters = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setItemsToShow(12);
    setSearchParams(newParams);
    setIsFilterSheetOpen(false);
  };

  const handleLoadMore = () => {
    setIsFetchingMore(true);
    setTimeout(() => {
      setItemsToShow(prev => prev + 12);
      setIsFetchingMore(false);
    }, 800);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCat !== "all") {
      // Find all children IDs if a parent is selected
      const isParent = categories.some(c => c.id === selectedCat && !c.parentId);
      if (isParent) {
        const childrenIds = categories.filter(c => c.parentId === selectedCat).map(c => c.id);
        result = result.filter(p => childrenIds.includes(p.cat) || p.cat === selectedCat);
      } else {
        result = result.filter(p => p.cat === selectedCat);
      }
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q)
      );
    }

    if (sortOption === "price_asc") result.sort((a, b) => a.price - b.price);
    if (sortOption === "price_desc") result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [products, categories, selectedCat, searchQuery, sortOption]);

  const displayedProducts = filteredProducts.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredProducts.length;

  const activeCategoryLabel = useMemo(() => {
    if (selectedCat === 'all') return "All Categories";
    return categories.find(c => c.id === selectedCat)?.label || "Category";
  }, [selectedCat, categories]);

  return (
    <div className="min-h-screen bg-[#f3f1ee] text-neutral-900 font-jost selection:bg-[#b87b5a] selection:text-white">
      <SEO title="Shop — The Collection" description="Earthy pottery collection." path="/shop" />
      <ShopNavbar />

      <main className="pt-16">
        
        {/* Search Area */}
        <div className="px-6 md:px-12 py-6 bg-[#f3f1ee]">
           <div className="max-w-screen-xl mx-auto">
              <div className="relative w-full max-w-2xl mx-auto group">
                 <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-[#b87b5a] transition-colors" />
                 <input 
                   type="text" 
                   placeholder="Search the collection..."
                   value={searchQuery}
                   onChange={(e) => updateFilters("q", e.target.value)}
                   className="w-full bg-white border-2 border-transparent py-4 pl-14 pr-6 rounded-2xl text-base shadow-[0_4px_20px_rgba(0,0,0,0.03)] outline-none focus:border-[#b87b5a]/20 transition-all"
                 />
                 {searchQuery && (
                   <button onClick={() => updateFilters("q", "")} className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400">
                      <X size={18} />
                   </button>
                 )}
              </div>
           </div>
        </div>

        {/* Primary Filter Bar */}
        <div className="sticky top-[68px] z-40 bg-white shadow-sm border-b border-neutral-100 px-6 md:px-12 py-4">
           <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
              <div className="hidden md:flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
                <button 
                  onClick={() => updateFilters("cat", "all")}
                  className={`px-6 py-2.5 rounded-xl text-[0.7rem] font-bold uppercase tracking-[0.15em] transition-all border-2 whitespace-nowrap ${selectedCat === 'all' ? 'bg-[#b87b5a] border-[#b87b5a] text-white shadow-lg shadow-[#b87b5a]/20' : 'bg-neutral-50 border-neutral-100 text-neutral-400 hover:border-neutral-200 hover:text-neutral-900'}`}
                >
                  All Entries
                </button>
                {categories.filter(c => !c.parentId).map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => updateFilters("cat", cat.id)}
                    className={`px-6 py-2.5 rounded-xl text-[0.7rem] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-all border-2 ${selectedCat === cat.id || activeParentId === cat.id ? 'bg-[#b87b5a] border-[#b87b5a] text-white shadow-lg shadow-[#b87b5a]/20' : 'bg-neutral-50 border-neutral-100 text-neutral-400 hover:border-neutral-200 hover:text-neutral-900'}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="flex md:hidden flex-1">
                 <button 
                   onClick={() => setIsFilterSheetOpen(true)}
                   className="w-full flex items-center justify-between bg-neutral-50 border-2 border-neutral-100 rounded-xl px-4 py-3 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-neutral-600"
                 >
                    <span className="flex items-center gap-3"><Filter size={14} className="text-[#b87b5a]" /> {activeCategoryLabel}</span>
                    <ChevronDown size={16} />
                 </button>
              </div>
              
              <div className="flex items-center gap-4 shrink-0 md:border-l md:border-neutral-200 md:pl-8">
                 <select 
                   value={sortOption}
                   onChange={(e) => updateFilters("sort", e.target.value)}
                   className="bg-neutral-50 border-2 border-neutral-100 rounded-xl px-4 md:px-5 py-3 md:py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-600 outline-none cursor-pointer"
                 >
                    <option value="featured">Sort</option>
                    <option value="price_asc">Price ↓</option>
                    <option value="price_desc">Price ↑</option>
                 </select>
              </div>
           </div>
        </div>

        {/* DESKTOP Sub-categories */}
        <AnimatePresence mode="wait">
          {activeParentId && subCats.length > 0 && (
            <motion.div 
              key={activeParentId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block px-6 md:px-12 py-5 bg-[#ebe9e4] border-b border-neutral-200 overflow-hidden"
            >
               <div className="max-w-screen-xl mx-auto flex flex-wrap gap-x-10 gap-y-4">
                  <button 
                    onClick={() => updateFilters("cat", activeParentId)}
                    className={`text-[0.65rem] uppercase tracking-widest font-bold whitespace-nowrap transition-all border-b-2 ${selectedCat === activeParentId ? 'text-[#b87b5a] border-[#b87b5a] pb-1' : 'text-neutral-400 border-transparent hover:text-neutral-900'}`}
                  >
                     All {categories.find(c => c.id === activeParentId)?.label}
                  </button>

                  {subCats.map(child => (
                     <button 
                      key={child.id}
                      onClick={() => updateFilters("cat", child.id)}
                      className={`text-[0.65rem] uppercase tracking-widest font-bold whitespace-nowrap transition-all border-b-2 ${selectedCat === child.id ? 'text-[#b87b5a] border-[#b87b5a] pb-1' : 'text-neutral-400 border-transparent hover:text-neutral-900'}`}
                     >
                        {child.label}
                     </button>
                  ))}
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MOBILE: Filter Sheet */}
        <AnimatePresence>
           {isFilterSheetOpen && (
              <>
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   onClick={() => setIsFilterSheetOpen(false)}
                   className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-[100] md:hidden"
                 />
                 <motion.div 
                   initial={{ y: "100%" }}
                   animate={{ y: 0 }}
                   exit={{ y: "100%" }}
                   className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] z-[101] md:hidden max-h-[85vh] overflow-y-auto p-8 pb-12"
                 >
                    <div className="flex justify-between items-center mb-10">
                       <h2 className="text-xl font-bold tracking-tight">Browse Categories</h2>
                       <button onClick={() => setIsFilterSheetOpen(false)} className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center"><X size={20} /></button>
                    </div>
                    <div className="space-y-10">
                       <button onClick={() => updateFilters("cat", "all")} className={`w-full text-left py-2 text-sm font-bold uppercase tracking-[0.2em] ${selectedCat === 'all' ? 'text-[#b87b5a]' : 'text-neutral-400'}`}>All Collection</button>
                       {categories.filter(c => !c.parentId).map(parent => (
                          <div key={parent.id} className="space-y-4">
                             <h3 className="text-[0.6rem] uppercase tracking-[0.3em] text-neutral-300 font-bold border-b border-neutral-100 pb-2">{parent.label}</h3>
                             <div className="grid grid-cols-1 gap-4">
                                <button onClick={() => updateFilters("cat", parent.id)} className={`text-left py-1 text-sm font-medium ${selectedCat === parent.id ? 'text-[#b87b5a]' : 'text-neutral-600'}`}>All {parent.label}</button>
                                {categories.filter(c => c.parentId === parent.id).map(child => (
                                   <button key={child.id} onClick={() => updateFilters("cat", child.id)} className={`text-left py-1 text-sm font-medium ${selectedCat === child.id ? 'text-[#b87b5a]' : 'text-neutral-600'}`}>{child.label}</button>
                                ))}
                             </div>
                          </div>
                       ))}
                    </div>
                 </motion.div>
              </>
           )}
        </AnimatePresence>

        {/* Product Grid Area */}
        <div className="px-6 md:px-12 py-10 max-w-screen-xl mx-auto min-h-[60vh]">
           {loadingProducts ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                 {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                   <div key={i} className="aspect-[4/5] bg-neutral-200 rounded-2xl animate-pulse" />
                 ))}
              </div>
           ) : (
             <>
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                  {displayedProducts.map((p, idx) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      key={p.id}
                      className="group"
                    >
                      <div className="relative aspect-[4/5] bg-white overflow-hidden mb-6 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-neutral-100">
                         {p.stock < 1 && (
                            <div className="absolute top-4 left-4 z-30 bg-neutral-900/90 text-white text-[0.6rem] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg shadow-lg">
                               Sold Out
                            </div>
                         )}
                         <Link to={`/shop/${p.id}`} className={`block h-full w-full ${p.stock < 1 ? 'grayscale opacity-60' : ''}`}>
                            <ProductImage 
                              src={IMGS[p.imgKey] || p.imgKey} 
                              alt={p.name} 
                              className="w-full h-full"
                            />
                         </Link>
                         {p.stock >= 1 && (
                            <button 
                               onClick={() => {
                                 dispatch(addItem(p));
                                 toast.success(`${p.name} added to bag`);
                               }}
                               className="absolute bottom-4 right-4 w-12 h-12 bg-white shadow-xl rounded-2xl flex items-center justify-center text-[#b87b5a] border border-neutral-100 active:scale-90 transition-all z-20"
                            >
                               <Plus size={24} strokeWidth={2.5} />
                            </button>
                         )}
                      </div>
                      <div className={`px-1 ${p.stock < 1 ? 'opacity-50' : ''}`}>
                         <div className="flex justify-between items-start mb-1">
                            <Link to={`/shop/${p.id}`} className="flex-1 pr-4">
                               <h3 className="text-[0.9rem] font-medium uppercase tracking-tight group-hover:text-[#b87b5a] transition-colors line-clamp-2 leading-tight">
                                  {p.name}
                               </h3>
                            </Link>
                            <span className="text-[0.9rem] font-medium text-neutral-400">₹{p.price}</span>
                         </div>
                         <p className="text-[0.65rem] italic text-neutral-400 uppercase tracking-widest">
                            {categories.find(c => c.id === p.cat)?.label || p.cat}
                         </p>
                      </div>
                    </motion.div>
                  ))}
               </div>

               {hasMore && (
                 <div className="mt-24 text-center">
                    <button 
                      disabled={isFetchingMore}
                      onClick={handleLoadMore}
                      className="inline-flex items-center gap-3 px-12 py-5 bg-white border-2 border-neutral-100 rounded-2xl text-[0.7rem] font-bold uppercase tracking-[0.2em] text-neutral-600 hover:border-[#b87b5a] hover:text-[#b87b5a] transition-all shadow-sm min-w-[240px] justify-center"
                    >
                       {isFetchingMore ? (
                         <>Fetching Studio Catalog <Loader2 size={16} className="animate-spin" /></>
                       ) : (
                         <>Discover More <ArrowDown size={14} /></>
                       )}
                    </button>
                 </div>
               )}
             </>
           )}
        </div>
      </main>

      <footer className="mt-20 py-20 px-6 md:px-12 bg-white border-t border-neutral-100 text-center">
         <p className="text-[0.6rem] uppercase tracking-[0.4em] text-neutral-400 font-bold">The Cold Mountain Studio</p>
      </footer>
    </div>
  );
}
