"use client";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="my-24 h-16 w-1 rounded-full bg-slate-400 dark:bg-opacity-25"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
    ></motion.div>
  );
};

export default SectionDivider;
