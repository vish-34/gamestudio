// src/components/SectionWrapper.jsx
import { motion } from "framer-motion";

const SectionWrapper = ({ children, orientation = "horizontal" }) => {
  return (
    <div className="relative py-24">
      {/* Horizontal line */}
      {orientation === "horizontal" && (
        <motion.div
          className="absolute top-1/2 left-0 w-full h-0.5 bg-white opacity-20 z-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
      {/* Vertical line */}
      {orientation === "vertical" && (
        <motion.div
          className="absolute top-0 left-1/2 w-0.5 h-full bg-white opacity-20 z-0"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionWrapper;
