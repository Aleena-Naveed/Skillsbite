import Box from "@material-ui/core/Box";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router } from "react-router-dom";
import { Ecosystem } from "~/assets";
import { line } from "~/assets";

export const EcosystemFriendly = () => {
  return (
    <>
      <Grid container spacing={4} marginTop={20} marginX={1} paddingX={0}>
        <Grid item xs={12} lg={4}>
          <Box sx={{ marginX: 10, textAlign: "left" }}>
            <Box>
              <Typography variant="h5">ECOSYSTEM</Typography>
            </Box>
            <Box>
              <Typography variant="h6">A friendly</Typography>
              <Typography variant="h6">ecosystem</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Box sx={{ marginX: 10, textAlign: "left" }} marginBottom={10}>
            <Box>
              <Typography variant="body2">
                Skillsbite employs learn to earn model incentivising actions and
                renumerating its stakeholders for learning, helping others and
                contributing to the ecosystem. The value-added community is
                achieved through an all-in-one platform that empowers its users
                and creates a friendly environment for them to help themselves
                grow as well as help others do the same.
              </Typography>
            </Box>
            <Box sx={{ marginTop: "30px" }}>
              <Typography variant="body2">
                Our team has designed a set of three technological and social
                solutions to facilliate for the process of knowledge creation in
                current economy.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={12}
          display="flex"
          justifyContent="center"
          alignContent="center"
          marginX={10}
          // sx={{ marginLeft: "110px", marginTop: "50px" }}
        >
          <img src={line} alt="line" width="100%" />
        </Grid>
        <Grid
          item
          xs={12}
          lg={12}
          // marginX={10}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <img src={Ecosystem} alt="graph" width="80%" height={600} />
        </Grid>
      </Grid>
    </>
  );
};
