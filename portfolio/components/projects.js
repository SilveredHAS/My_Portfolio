import { PRIMARY_GREEN } from "@/constants";
import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectsModel from "./projectsModel";
import ProfileImage from "../public/asset/image/ProfileImage.jpg";

const Projects = () => {
  return (
    <Box
      sx={{
        pt: 2,
        pb: 2,
        pl: 15,
        pr: 15,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ color: PRIMARY_GREEN, fontWeight: "700" }}>
        My Projects
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 6,
            mb: 6,
            height: "75vh",
          }}
        >
          <ProjectsModel
            name={"Silvered Ecommerce Website"}
            desc={
              "A small river named Duden flows by their place and supplies it wit the necessary regelialia.A small river named Duden flows by the iplace and supplies it with the necessary regelialia."
            }
            logo={ProfileImage.src}
          />
          <ProjectsModel
            name={"Silvered Affiliate Website"}
            desc={
              "A small river named Duden flows by their place and supplies it wit the necessary regelialia.A small river named Duden flows by the iplace and supplies it with the necessary regelialia."
            }
            logo={ProfileImage.src}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
