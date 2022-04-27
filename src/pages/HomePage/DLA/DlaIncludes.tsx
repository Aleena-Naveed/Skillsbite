import Box from "@material-ui/core/Box";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router } from "react-router-dom";
import { ellipse } from "~/assets";
import { ficon, sicon, ticon, foicon, fiicon, siicon, seicon } from "~/assets";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(180deg, #141420 0%, rgba(20, 20, 32, 0) 100%)",
    // width: 600,
    // width: "70%",
    // justifyContent: "center",
    // marginLeft: "90px",
    // marginTop: 80,
  },
}));

export const Includes = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        className={classes.root}
        // marginX={{ lg: 10, xs: 0 }}
        // width={{ xs: "90%", lg: "50%" }}
        width={"60%"}
        marginTop={20}
        marginLeft={2}
      >
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"flex-start"}
          alignItems="center"
        >
          <Box>
            <img src={ellipse} alt="ellipse"></img>
          </Box>
          <Box>
            <Typography variant="body1">
              What’s included in each DLA?
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row", lg: "row" }}
          marginLeft={5}
        >
          <Box>
            <Box
              display="flex"
              flexDirection={"row"}
              marginBottom={2}
              alignItems="center"
            >
              <img src={ficon} alt="ellipse"></img>
              <Typography
                sx={{
                  marginLeft: "10px",
                }}
                variant="subtitle1"
              >
                Blockchain Courses
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={"row"}
              marginBottom={2}
              alignItems="center"
            >
              <img src={sicon} alt="ellipse"></img>
              <Typography
                sx={{
                  marginLeft: "10px",
                }}
                variant="subtitle1"
              >
                Mentoring 1VS1
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={"row"}
              marginBottom={2}
              alignItems="center"
            >
              <img src={ticon} alt="ellipse"></img>
              <Typography
                sx={{
                  marginLeft: "10px",
                }}
                variant="subtitle1"
              >
                Webinars, Workshops, & Guest Talks
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={"row"}
              marginBottom={2}
              alignItems="center"
            >
              <img src={foicon} alt="ellipse"></img>
              <Typography
                sx={{
                  marginLeft: "10px",
                }}
                variant="subtitle1"
              >
                Project-based Initiatives
              </Typography>
            </Box>
          </Box>

          <Box marginLeft={2} >
            <Box
              display="flex"
              flexDirection={"row"}
              marginBottom={2}
              alignItems="center"
            >
              <img src={fiicon} alt="ellipse"></img>
              <Typography
                sx={{
                  marginLeft: "10px",
                }}
                variant="subtitle1"
              >
                Learning Repository
              </Typography>
            </Box>
            <Box display="flex" flexDirection={"row"} marginBottom={2}>
              <img src={siicon} alt="ellipse"></img>
              <Typography
                sx={{
                  marginLeft: "10px",
                }}
                variant="subtitle1"
              >
                Community & Bounties
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={"row"}
              marginBottom={2}
              alignItems="center"
            >
              <img src={seicon} alt="ellipse"></img>
              <Typography
                sx={{
                  marginLeft: "10px",
                  // marginTop: "10px",
                }}
                variant="subtitle1"
              >
                Job Board
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
