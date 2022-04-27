import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MuiMenu from "@material-ui/icons/Menu";

import Hidden from "@material-ui/core/Hidden";
import { SkillsBiteLogo } from "~/assets";
import Grid from "@mui/material/Grid";
import { Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';



const useStyles = makeStyles((theme) => ({
  logoStyle: {
    height: "80%",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      height: "90%",
      width: "90%",
    },
  },
  imageStyle: {
    padding: "0px 10px 0px 15px",
    justifyContent: "space-around",
  },
  typographyGrid: {
    display: "flex",
    flexDirection: "row",
  },
  typographyText: {
    padding: "20px",
  },
  btnGrid: {
     padding: "10px",
  },
  menuGrid: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  typographyBreakpoint: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar sx={{ background: "transparent" }}>
      <Toolbar>
        {/* Grid container spans over 100% of avaliable width */}
        <Grid container direction="row" sx={{ placeItems: "center" }}>
          <Grid item className={classes.imageStyle} xs={5} md={3} xl={2}>
            <img
              className={classes.logoStyle}
              src={SkillsBiteLogo}
              alt="Logo"
            />
          </Grid>

          <Grid item className={classes.typographyBreakpoint} xs={6} md={9} xl={10}>
            <Grid
              container
              justifyContent={"center"}
              sx={{ paddingRight: "1px" }}
            >
              {/* <Grid item xs={1} justifyContent={"space-evenly"}></Grid> */}
              <Grid
                item
                className={classes.typographyGrid}
                xs={2}
                justifyContent={"space-evenly"}
              >
                <Typography
                  className={classes.typographyText}
                  variant="body2"
                  sx={{ color: "#fff" }}
                >
                  Home
                </Typography>

                <Typography
                  className={classes.typographyText}
                  variant="body2"
                  sx={{ color: "#fff" }}
                >
                  About
                </Typography>
              </Grid>
              <Grid
                item
                className={classes.typographyGrid}
                xs={3}
                justifyContent={"space-evenly"}
              >
                <Typography
                  className={classes.typographyText}
                  variant="body2"
                  sx={{ color: "#fff" }}
                >
                  Ecosystem
                </Typography>
                <Typography
                  className={classes.typographyText}
                  variant="body2"
                  sx={{ color: "#fff" }}
                >
                  Tokenomics
                </Typography>
              </Grid>
              <Grid
                item
                className={classes.typographyGrid}
                xs={2}
                justifyContent={"space-evenly"}
              >
                <Typography
                  className={classes.typographyText}
                  variant="body2"
                  sx={{ color: "#fff" }}
                >
                  Roadmap
                </Typography>
                <Typography
                  className={classes.typographyText}
                  variant="body2"
                  sx={{ color: "#fff" }}
                >
                  Team
                </Typography>
              </Grid>
              <Grid item className={classes.typographyGrid} xs={3}>
                <Typography
                  className={classes.typographyText}
                  variant="body2"
                  sx={{ color: "#fff" }}
                >
                  Partner
                </Typography>
                <Typography
                  className={classes.typographyText}
                  variant="body2"
                  sx={{ color: "#fff" }}
                >
                  Whitepaper
                </Typography>
              </Grid>
              <Grid item xs={2} className={classes.btnGrid}>
                <Button
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    // margin: "5px 10px 5px 90px",
                    padding: "5px",
                  }}
                >
                  Token Panel
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item md={2} className={classes.menuGrid}>
          <IconButton aria-label="Menu">
            <MenuRoundedIcon style={{ background: "#fff" }} />
          </IconButton>
        </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
{
  // <Nav>
  //   <NavLink to="/">
  //     <img src={SkillsBiteLogo} alt="Logo" />
  //   </NavLink>
  //   <Bars />
  //   <NavMenu>
  //     <NavLink className={classes.textStyle} to="/home">
  //       Home
  //     </NavLink>
  //     <NavLink to="/about">About</NavLink>
  //     <NavLink to="/ecosystem">EcoSystem</NavLink>
  //     <NavLink to="/tokenomics">Tokenomics</NavLink>
  //     <NavLink to="/roadmap">Roadmap</NavLink>
  //     <NavLink to="/team">Team</NavLink>
  //     <NavLink to="/partners">Partners</NavLink>
  //     <NavLink to="/whitepaper">Whitepaper</NavLink>
  //   </NavMenu>
  //   <NavBtn>
  //     <NavBtnLink to="/tokenpanel">Token Panel</NavBtnLink>
  //   </NavBtn>
  // </Nav>;
}

{
  /* <Grid container  >
  <Grid item xs={3}>
    <img src={SkillsBiteLogo} alt="Logo" width="75%" height="75%" style={{ marginTop: "1%" }} />
  </Grid>

  <Grid item xs={9}>
    <Grid container direction="row"  >
      <Grid item xs={1}>
        <Typography variant="body2" sx={{ color: "#fff", }}>
          Home
        </Typography>
      </Grid>
      <Grid item xs={1} >
        <Typography variant="body2" sx={{ color: "#fff" }}>
          About
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          Ecosystem
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          Tokenomics
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          Roadmap
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          Team
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          partners
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          whitepapar
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Button>TokenPanel</Button>
      </Grid>
    </Grid>
  </Grid>
</Grid> */
}
