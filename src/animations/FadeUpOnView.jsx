// FadeUpOnView.jsx
import React from "react";
import { motion } from "framer-motion";

const FadeUpOnView = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpOnView;
