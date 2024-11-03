"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion/dom";

interface IProps {
  children: React.ReactNode;
}

export const fadeUpVariant = {
  initial: { opacity: -1, y: 250 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      easeOut,
    },
  },
};
const FadeUpAnimation = ({ children }: IProps) => {
  return (
    <motion.div variants={fadeUpVariant} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;
