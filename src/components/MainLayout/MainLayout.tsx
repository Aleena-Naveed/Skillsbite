import Box from "@material-ui/core/Box";
import { Header } from "./Header";
import { Footer } from "./Footer";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

export const MainLayout = (props: any) => {
  return (
    <Router>
      <Header />
      {/* <Container maxWidth="xl"> */}
      {/* <Box
        width="100%"
        bgcolor={"red"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      > */}
      {props.children}
      <Footer />
      {/* </Box> */}
      {/* </Container> */}
    </Router>
  );
};
