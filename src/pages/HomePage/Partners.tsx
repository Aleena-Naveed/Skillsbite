import { MainLayout } from "~/components";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { HeroPage } from "./HeroPage";
import { height } from "@mui/system";
import { p1, p2, p3 } from "~/assets";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";

export const Partnersection = () => {
  return (
    <Box
      marginY={20}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box marginBottom={10}>
        <Typography textAlign="center" variant="h6">
          Our Partners
        </Typography>
      </Box>
      <Box
        // marginLeft={"50px"}
        // sx={{ backgroundColor: "red" }}
        width="100%"
        // marginTop={5}
        display="flex"
        flexDirection={{ xs: "column", md: "row", lg: "row" }}
        justifyContent={{
          xs: "center",
          md: "space-evenly",
          lg: "space-evenly",
        }}
        alignItems="center"
      >
        <img
          src={p1}
          alt="graph"
          height={120}
          width={150}
          style={{ marginBottom: 20, marginTop: 20 }}
        />
        <img
          style={{ marginBottom: 20, marginTop: 20 }}
          src={p2}
          alt="graph"
          height={120}
          width={150}
        />
        <img
          style={{ marginBottom: 20, marginTop: 20 }}
          src={p3}
          alt="graph"
          height={120}
          width={150}
        />
      </Box>
    </Box>
  );
};
