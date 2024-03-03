import { PRIMARY_GREEN } from "@/constants";
import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

const ProjectsModel = ({ name, logo, desc }) => {
  return (
    <Paper
      sx={{
        width: "45%",
        height: "100%",
        cursor: "pointer",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* <Box sx={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}>
        <img
          src={logo}
          alt="name"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      </Box> */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "white" }}>
          {name}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "white", width: "90%", mt: 2, mb: 4, textAlign: "left" }}
        >
          {desc}
        </Typography>
        <Button
          sx={{
            color: PRIMARY_GREEN,
            "&:hover": {
              backgroundColor: PRIMARY_GREEN,
              color: "white",
            },
          }}
        >
          <Typography variant="body2" sx={{ color: "inherit" }}>
            Visit Website
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
};

export default ProjectsModel;
