"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion/dom";

export const FadeinVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      easeOut,
    },
  },
};
const FadeinAnimation = ({ children }: any) => {
  return (
    <motion.div variants={FadeinVariant} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};

export default FadeinAnimation;
