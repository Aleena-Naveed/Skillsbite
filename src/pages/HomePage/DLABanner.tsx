import Box from "@material-ui/core/Box";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router } from "react-router-dom";
import { DGlobe } from "~/assets";
import { LGlobe } from "~/assets";
import { AGlobe } from "~/assets";
import { flogo } from "~/assets";
import { slogo } from "~/assets";
import { tlogo } from "~/assets";
import { bullet } from "~/assets";

import { DLACard } from "../../components";
import { height } from "@mui/system";
import { Divider } from "@material-ui/core";

export const DLAbanner = () => {
  const data = [
    {
      globe: <img src={DGlobe} height={400} alt="globe"></img>,
      para: (
        <Box
        // display="flex"
        // flexDirection="column"
        // justifyContent={"flex-start"}
        // alignItems="flex-start"
        >
          <Typography variant="body1"> Decentralised </Typography>,
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Organising a group of people focused on the same goal
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            sx={{
              color: "#fff",
              marginBottom: 1,
            }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Community values upheld by independent voting
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Aligned economic and social incentives around $SKILLS
          </Typography>
        </Box>
      ),
      num: (
        <Box
          height={200}
          // width={200}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={flogo} alt="logo" />
        </Box>
      ),
    },
    {
      globe: (
        <Box
          height={200}
          // width={200}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={slogo} alt="globe"></img>
        </Box>
      ),
      para: (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Typography variant="body1"> Learning </Typography>,
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Specific use-case for education
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Transparent business model with Learn to Earn characteristics
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Features developed to enhance the learning process
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Versatile platform structure{" "}
          </Typography>
        </Box>
      ),
      num: <img src={LGlobe} alt="logo" height={400} />,
    },
    {
      globe: <img src={AGlobe} height={400} alt="globe"></img>,
      para: (
        <Box>
          <Typography variant="body1"> Academy </Typography>,
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Incorporation of roles and responsibilities
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Creating, curating and cultivating knowledge
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Community building
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            sx={{ color: "#fff", marginBottom: 1 }}
            variant="body2"
          >
            <img style={{ marginRight: 15 }} src={bullet} alt="globe"></img>
            Long term approach to learning
          </Typography>
        </Box>
      ),
      num: (
        <Box
          height={200}
          // width={200}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={tlogo} alt="logo" />
        </Box>
      ),
    },
  ];

  return (
    <>
      <Box
        bgcolor={"#141420"}
        // sx={{ marginX: 10 }}
        padding={2}
        justifyContent="center"
        alignItems="center"
        marginX={5}
      >
        <Box
          justifyContent="center"
          textAlign="center"
          paddingTop={10}
          paddingBottom={2}
        >
          <Typography variant="h5">
            What is Decentralised Learning Academy ?
          </Typography>
          <Typography variant="h6">The best way of approaching DLA</Typography>
        </Box>
        <Box style={{ paddingBottom: 40 }}>
          {data.map((item, index) => {
            return (
              <>
                <DLACard
                  globe={item.globe}
                  para={item.para}
                  num={item.num}
                  reverse={index == 1 ? true : false}
                  lineImg = {index == 2 ? true : false}
                />
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
