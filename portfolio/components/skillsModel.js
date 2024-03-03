import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import SkillsProgressBar from "./skillsProgress";

const SkillsModel = ({ skill, logo }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "18.5%",
        height: "40%",
        alignItems: "center",
        p: 6,
        backgroundColor: "#1a1a1a",
        cursor: "pointer",
      }}
    >
      <img
        src={logo}
        alt="Skill Logo"
        style={{
          width: "4rem",
          height: "3rem",
          objectFit: "contain",
        }}
      />
      <Typography
        variant="h5"
        sx={{ color: "white", mt: 3, fontWeight: "500" }}
      >
        {skill}
      </Typography>
      <Box sx={{ mt: 2, width: "100%" }}>
        <SkillsProgressBar />
      </Box>
    </Paper>
  );
};

export default SkillsModel;
