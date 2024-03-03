import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { PRIMARY_GREEN } from "@/constants";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: PRIMARY_GREEN,
  },
}));

export default function SkillsProgressBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "green" }}>
      <BorderLinearProgress variant="determinate" value={50} />
    </Box>
  );
}
