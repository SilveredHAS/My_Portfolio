import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const OnScrollAnimation = ({ children }) => {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState("down");
  const threshold = 200; // Adjust this threshold as needed

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > threshold && scrollDirection === "down") {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    };

    const handleScrollDirection = () => {
      const scrollY = window.scrollY;

      if (scrollY > threshold) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollDirection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, [controls, scrollDirection]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.25, delay: 0.01 }}
    >
      {children}
    </motion.div>
  );
};

export default OnScrollAnimation;
