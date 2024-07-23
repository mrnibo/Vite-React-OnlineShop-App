import React from "react";
import { motion } from "framer-motion";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg dark:bg-neutral-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl text-accent mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureItem;
