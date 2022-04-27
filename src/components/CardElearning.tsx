import Box from "@material-ui/core/Box";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import Typography from "@mui/material/Typography";
import { fontSize } from "@mui/system";
import { growth1 } from "~/assets";
import { growth2 } from "~/assets";
import { prediction } from "~/assets";

export const ECard = (props: any) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection="column"
        // justifyContent="space-around"
        padding={3}
        alignItems="center"
        sx={{
          backgroundColor: "#141420",
          // width: 250,
          height: 400,
        }}
      >
        <Box
          sx={{
            color: "#fff",
            fontSize: "30",
            padding: "5px",
            fontSize: "40px",
          }}
        >
          {props.title}
        </Box>
        <Box sx={{ padding: "5px" }}>{props.image}</Box>
        <Box sx={{ color: "#fff", fontSize: "16", padding: "5px" }}>
          {props.subtitle}
        </Box>
        <Box sx={{ color: "#fff", fontSize: "18", padding: "5px" }}>
          {props.para}
        </Box>
      </Box>
    </>
  );
};
