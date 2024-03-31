import { PRIMARY_GREEN } from "@/constants";
import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileImage from "../public/asset/image/ProfileImage.jpg";
import { motion } from "framer-motion";
import OnScrollAnimation from "./animation/onScrollAnimation";

const AboutMe = () => {
  const details = {
    Name: "Aravinth Muruganantham",
    "Date of Birth": "November 7, 2000",
    Address: "1189/1 AriyapadaiVeedu Kumbakonam India",
    "Pin Code": "612703",
    Email: "aravinthprofessional777@gmail.com",
    Phone: "+919790082418",
  };
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
      <Box
        sx={{
          color: "white",
          width: "45%",
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
      <Box sx={{ color: "white", width: "45%" }}>
        <OnScrollAnimation
          children={
            <Box>
              <Typography
                variant="h3"
                sx={{ color: PRIMARY_GREEN, fontWeight: "700" }}
              >
                About Me
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.A small river named Duden flows by
                their place and supplies it with the necessary regelialia.A
                small river named Duden flows by their place and supplies it
                with the necessary regelialia.A small river named Duden flows by
                their place and supplies it with the necessary regelialia.
              </Typography>
              <Box sx={{ mt: 5 }}>
                {Object.keys(details).map((key) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ width: "25%" }}>
                      {key}:
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ width: "60%", color: "#999999" }}
                    >
                      {details[key]}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          }
        />
      </Box>
    </Box>
  );
};

export default AboutMe;
