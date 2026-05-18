import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackButton({ to = "/", label = "Back to Home", className = "", light = false }) {
  const navigate = useNavigate();

  const textColors = light 
    ? "text-white/70 hover:text-white" 
    : "text-stone hover:text-clay";

  return (
    <motion.button
      onClick={() => navigate(to)}
      className={`group flex items-center gap-2 text-[0.75rem] tracking-[0.2em] uppercase font-jost transition-colors duration-300 z-40 bg-transparent border-none cursor-pointer ${textColors} ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        variants={{
          initial: { x: 0 },
          hover: { x: -4 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <ArrowLeft size={18} strokeWidth={1.5} />
      </motion.div>
      <span>{label}</span>
    </motion.button>
  );
}
