import { PRIMARY_GREEN } from "@/constants";
import { Box, Typography } from "@mui/material";
import React from "react";
import SkillsModel from "./skillsModel";
import ProfileImage from "../public/asset/image/ProfileImage.jpg";

const Skills = () => {
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
        My Skills
      </Typography>
      <Box sx={{ mt: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 6,
            mb: 6,
          }}
        >
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 6,
            mb: 6,
          }}
        >
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 6,
            mb: 6,
          }}
        >
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
          <SkillsModel skill={"HTML5"} logo={ProfileImage.src} />
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
