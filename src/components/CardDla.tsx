import { Box, Divider } from "@material-ui/core";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { line } from "~/assets";

export const DLACard = (props: any) => {
  return (
    <>
      <Grid
        container
        display="flex"
        direction={{
          lg: "row",
          xs: props.reverse ? "column" : "column-reverse",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          lg={4}
          justifyContent={{ lg: "center", xs: "center" }}
          display="flex"
        >
          {props.globe}
        </Grid>
        {/* <Grid display={"flex"} justifyContent={"flex-start"} alignItems="center"> */}
        <Grid display="flex" justifyContent="flex-start" item xs={12} lg={4}>
          {props.para}
        </Grid>
        {/* </Grid> */}
        <Grid
          item
          xs={12}
          lg={4}
           justifyContent={{ lg: "center", xs: "center" }}
          // justifyContent={"center"}
          display="flex"

        >
          {props.num}
        </Grid>
        {props.lineImg ? (
          <Grid></Grid>
        ) : (
          <Grid>
            <img src={line}></img>
          </Grid>
        )}
      </Grid>
    </>
  );
};
