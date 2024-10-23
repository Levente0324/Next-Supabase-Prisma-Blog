"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion/dom";

export const fadeDownVariant = {
  initial: { opacity: -1, y: -250 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      easeOut,
    },
  },
};
const FadeDownAnimations = ({ children }: any) => {
  return (
    <motion.div variants={fadeDownVariant} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};

export default FadeDownAnimations;
