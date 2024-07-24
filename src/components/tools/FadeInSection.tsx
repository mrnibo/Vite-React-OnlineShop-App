import React from "react";
import { motion } from "framer-motion";
interface FadeInSectionProps {
  children: React.ReactNode;
  delay: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
