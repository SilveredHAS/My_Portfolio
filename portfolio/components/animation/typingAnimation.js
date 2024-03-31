import React from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
  return (
    <div style={{ display: "inline-block" }}>
      <motion.span
        style={{
          display: "inline-block",
          marginRight: "5px",
        }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        .
      </motion.span>
      <motion.span
        style={{
          display: "inline-block",
          marginRight: "5px",
        }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      >
        .
      </motion.span>
      <motion.span
        style={{
          display: "inline-block",
          marginRight: "5px",
        }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      >
        .
      </motion.span>
    </div>
  );
};

export default TypingAnimation;
