"use client";
import { Box, Toolbar } from "@mui/material";
import React from "react";
import CustomAppBar from "../components/customAppbar";
import Home from "@/components/home";
import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

const page = () => {
  return (
    <Box>
      <CustomAppBar />
      <Home />
      <Box sx={{ mt: 12, mb: 12 }} />
      <AboutMe />
      <Box sx={{ mt: 12, mb: 12 }} />
      <Skills />
      <Box sx={{ mt: 12, mb: 12 }} />
      <Projects />
    </Box>
  );
};

export default page;
