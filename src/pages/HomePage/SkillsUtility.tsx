import { MainLayout } from "~/components";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { HeroPage } from "./HeroPage";
import { height } from "@mui/system";
import { skillsgraph } from "~/assets";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";

export const Skillsection = () => {
  return (
    <Box marginTop={10} marginX={10}>
      <Box textAlign={"center"}>
        <Typography variant="h6">$SKILLS Utility</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={skillsgraph} alt="graph"  width="80%" />
      </Box>
    </Box>
  );
};
