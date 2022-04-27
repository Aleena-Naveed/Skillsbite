import Box from "@material-ui/core/Box";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { dlaLine } from "~/assets";
import { line } from "~/assets";

export const Definition = () => {
  return (
    <Box
      display="flex"
      flexDirection={{
        xs: "column",
        md: "column",
        lg: "row",
      }}
      marginX={{ lg: 20, xs: 10 }}
      marginBottom={10}
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <Typography variant="h6">What is DLA</Typography>
        </Box>
        <Box>
          <img src={dlaLine} alt="line"></img>
        </Box>
      </Box>

      <Box justifyContent={"center"} textAlign={"left"} marginX={{ lg: 20 }}>
        <Typography variant="body2">
          Skillsbite’s DLA is a decentralized peer-to-peer learning platform,
          which enhance people’s skills in future technologies and themes. The
          learning ecosystem consists of the world's largest learning academies
          network starting with blockchain themes in the learn2earn model. ​The
          ecosystem of the decentralised academies will be-
        </Typography>
      </Box>

      <Box justifyContent={"center"} textAlign={"left"}>
        <Typography variant="body2">
          -expanded by adding more topics covering Artificial Intelligence and
          Data Science in the further steps of development, with the aim of
          building a decentralised career development ecosystem focusing on
          gaining practical skills through building real products rather than
          relying on learning theory.
        </Typography>
      </Box>
    </Box>
  );
};
