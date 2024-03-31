import { PRIMARY_GREEN } from "@/constants";
import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileImage from "../public/asset/image/ProfileImage.jpg";
import TypingAnimation from "./animation/typingAnimation";
import { motion } from "framer-motion";

const Home = () => {
  const words = [
    "A",
    " ",
    "F",
    "u",
    "l",
    "l",
    " ",
    "S",
    "t",
    "a",
    "c",
    "k",
    " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  return (
    <Box
      sx={{
        height: "90vh",
        pt: 2,
        pb: 2,
        pl: 15,
        pr: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ color: "white", width: "35%" }}>
        <motion.div
          initial={{ y: "80vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2" sx={{ color: PRIMARY_GREEN }}>
              HELLO!
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "700" }}>
              I'm{" "}
              <span style={{ color: PRIMARY_GREEN }}>
                Aravinth Muruganantham
              </span>
            </Typography>
            <motion.div
              style={{
                display: "flex",
              }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  style={{
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                  animate={{ opacity: [0, 1], y: [50, 0] }} // Animate x position from 50px to 0px
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Typography variant="h5" sx={{ mt: 1 }}>
                    {word}
                  </Typography>
                </motion.span>
              ))}
            </motion.div>
          </Box>
        </motion.div>
      </Box>
      <Box
        sx={{
          color: "white",
          width: "55%",
          height: "100%",
        }}
      >
        <img
          src={ProfileImage.src}
          alt="Profile Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
