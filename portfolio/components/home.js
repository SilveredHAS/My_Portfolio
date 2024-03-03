import { PRIMARY_GREEN } from "@/constants";
import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileImage from "../public/asset/image/ProfileImage.jpg";

const Home = () => {
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
        <Typography variant="body2" sx={{ color: PRIMARY_GREEN }}>
          HELLO!
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: "700" }}>
          I'm{" "}
          <span style={{ color: PRIMARY_GREEN }}>Aravinth Muruganantham</span>
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          A Full Stack Web Developer
        </Typography>
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
