import { MainLayout } from "~/components";
import { useEffect } from "react";
// import { Grid } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Heropagebg } from "~/assets";
import { Header } from "../../components/MainLayout/Header";
import Typography from "@mui/material/Typography";
import { css } from "styled-components";
import Box, { BoxProps } from "@material-ui/core/Box";
import { SpacedHeading, TypographyH1, Button } from "../../components";
import { Twitterlogo } from "~/assets";
import { MLogo } from "~/assets";
import { Smilylogo } from "~/assets";
import { Telegramlogo } from "~/assets";
import { LineImg } from "~/assets";
import { backgroundImage } from "~/assets";
import { styled } from "@mui/material/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: "220px",
    marginRight: "15px",
    marginLeft: "15px",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    marginTop: "420px",
    marginRight: "40px",
    marginLeft: "40px",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    marginTop: "420px",
    marginRight: "40px",
    marginLeft: "40px",
  },
}));

const MuiCustomBreakPoints = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    // marginTop: "-0px",
    backgroundSize: "stretch",
    backgroundPosition: "center top",
    width: "100%",
  },
}));

export const HeroPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} align-item="center">
      <>
        <Grid
          container
          padding="0px"
          display="flex"
          justifyContent="center"
          flexDirection={{ xs: "column", lg: "row" }}
        >
          <Grid
            item
            width="100%"
            maxWidth="999px"
            display="flex"
            color="black"
            flexDirection="column"
            alignItems="center"
            marginTop={10}
          >
            <Typography
              style={{
                color: "#fff",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
              variant="body2"
            >
              Get on board with skills bite
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                marginTop: "11px",
                fontWeight: 600,
                color: "#fff",
                fontSize: "52px",
                textAlign: "center",
                wordBreak: "break-word",
                letterSpacing: "0px",
              }}
            >
              First ever expanding gamified learning ecosystem with its own
              universe
            </Typography>
            <Grid
              container
              display="flex"
              flexDirection="row"
              width="500px"
              justifyContent="center"
              alignItems="flex-start"
              sx={{ marginTop: 4 }}
            >
              <img
                style={{ marginRight: 32, position: "static" }}
                src={Twitterlogo}
              ></img>
              <img
                style={{ marginRight: 32, position: "static" }}
                src={Telegramlogo}
              ></img>
              <img
                style={{ marginRight: 32, position: "static" }}
                src={MLogo}
              ></img>
              <img
                style={{ marginRight: 32, position: "static" }}
                src={Smilylogo}
              ></img>
            </Grid>
          </Grid>
        </Grid>

        {/* <Root> */}
        <Grid
          item
          display="flex"
          flexDirection={{ xs: "column", md: "column", lg: "row" }}
          marginTop={{
            lg: "420px",
            md: "150px",
            xs: "150px",
          }}
          marginX={{ xs: 5, lg: 10 }}
          paddingY={10}
          style={{
            backgroundColor: "#141420",
          }}
          justifyContent="center"
          // alignItems="center"
        >
          <Grid
            item
            display="flex"
            flexDirection="row"
            width="40%"
            margin={{ lg: "50px 50px 0px 0px", xs: "30px 0 0 0" }}
          >
            <Grid
              container
              justifyContent="flex-end"
              alignItems="flex-start"
              paddingTop={2}
              // width="60%"
              // height="80%"
            >
              <img src={LineImg}></img>
            </Grid>
            <Grid container>
              <Typography variant="h6">
                The right way to learn online
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            // position="sticky"
            margin={{ lg: "50px 50px 0px 10px", xs: "30px 12px 0 12px" }}
            paddingX={10}
            style={{
              backgroundColor: "transparent",
            }}
          >
            <Typography paragraph variant="body2">
              Skillsbite is a unique platform that opens space for the knowledge
              creation and the use of various learning methods to fulfil
              expectations and needs of every learner around the world.
            </Typography>
            <Typography paragraph variant="body2">
              Skillsbite ecosystem is built around an idea of universe with
              similar characteristics to knowledge. It represents a world with
              endless possibilities, new learning opportunities and captivating
              secrets.
            </Typography>
            <Typography paragraph variant="body2">
              By enabling interactions between learners, mentors, educators and
              content creators skillsbite’s platform facilitates the creation of
              a multi-dimensional network of like-minded individuals.
            </Typography>
            <Typography
              paragraph
              style={{
                fontFamily: "Poppins",
                marginTop: "15px",
                color: "#fff",
                fontSize: "16px",
                wordBreak: "break-word",
                letterSpacing: "0px",
                lineHeight: "28px",
              }}
            >
              Read the whitepaper to learn more
            </Typography>
            <Grid
              item
              style={{
                alignItems: "center",
                justifyContent: "flex-start",
                display: "flex",
                borderRadius: "7px",
                // backgroundColor: "#fff",
                color: "#000",
                marginBottom: 20,
              }}
              xs={11}
              sm={4}
            >
              <Button>
                <Box>
                  <Box>White Paper</Box>
                  <Box></Box>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* </Root> */}
      </>
    </Grid>
  );
};
