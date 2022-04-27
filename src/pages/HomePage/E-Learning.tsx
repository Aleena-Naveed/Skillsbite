import Box from "@material-ui/core/Box";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router } from "react-router-dom";
import { growth1 } from "~/assets";
import { growth2 } from "~/assets";
import { prediction } from "~/assets";
import { ECard } from "../../components";

export const Elearning = () => {
  const data = [
    {
      title: "900%",
      image: <img src={growth1} alt="icon"></img>,
      subtitle: "Growth",
      para: "Since 2000, the digital learning industry has grown by 900% making it the fastest-growing market in the education industry by a large margin",
    },
    {
      title: "400%",
      image: <img src={growth2} alt="icon"></img>,
      subtitle: "Growth",
      para: "During 2020, demand for online learning opportunities rose exponentially according to a study by global market insights. Demand rose by as much as 400%, with many people wanting to upskill during their time off work",
    },
    {
      title: "$350m",
      image: <img src={prediction} alt="icon"></img>,
      subtitle: "Prediction",
      para: "Current prediction says that the online education market will reach 350 million US$ by 2025",
    },
  ];
  return (
    <Grid
      container
      spacing={4}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      paddingX={20}
      marginTop={10}
    >
      <Grid item xs={12} textAlign={"center"} style={{ marginBottom: 30 }}>
        <Typography variant="h6">Numbers behind E-Learning</Typography>
      </Grid>

      {data.map((item, index) => {
        return (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <ECard
              title={item.title}
              image={item.image}
              subtitle={item.subtitle}
              para={item.para}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
