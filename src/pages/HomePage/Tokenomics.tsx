import Box from "@material-ui/core/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import { r1, r2, r3, r4, r5, r6, r7, r8, r9 } from "~/assets";

import { tokengraph } from "~/assets";

import { Tokenpaper } from "../../components";
import { height } from "@mui/system";

export const TokenomicSection = () => {
  const data = [
    {
      img: <img src={r1} alt="rect"></img>,
      title: (
          <Typography sx={{ color: "#fff", fontSize: "14px" }}>
            5% Seed round
          </Typography>
      ),
      para: (
          <Typography sx={{ color: "#ABB8DB", fontSize: "12px" }}>
            Locked for 6 months then 2% vested weekly
          </Typography>
      ),
    },
    {
      img: <img src={r2} alt="rect"></img>,
      title: (
          <Typography sx={{ color: "#fff", fontSize: "14px" }}> 
            5% Marketing
          </Typography>
      ),
      para: (
          <Typography sx={{ color: "#ABB8DB", fontSize: "12px" }}>
            20% at TGE, then 5% vested monthly
          </Typography>
      ),
    },
    {
      img: <img src={r3} alt="rect"></img>,
      title: (
          <Typography sx={{ color: "#fff", fontSize: "14px" }}>
            5% Public Sale
          </Typography>
      ),
      para: (
          <Typography sx={{ color: "#ABB8DB", fontSize: "12px" }}>
            Locked for 6 months then 2% vested weekly
          </Typography>
      ),
    },
    {
      img: <img src={r4} alt="rect"></img>,
      title: (
          <Typography sx={{ color: "#fff", fontSize: "14px" }}>
            5% Strategic Partners and Advisors
          </Typography>
      ),
      para: (
          <Typography sx={{ color: "#ABB8DB", fontSize: "12px" }}>
            Locked for 12 months then 5% vested weekly
          </Typography>
      ),
    },
    {
      img: <img src={r5} alt="rect"></img>,
      title: (
          <Typography sx={{ color: "#fff", fontSize: "14px" }}>
            10% Company reserves
          </Typography>
      ),
      para: (
          <Typography sx={{ color: "#ABB8DB", fontSize: "12px" }}>
            Locked for 3 months, then 10% vested monthly
          </Typography>
      ),
    },
    {
      img: <img src={r6} alt="rect"></img>,
      title: (
          <Typography sx={{ color: "#fff", fontSize: "14px" }}>
            10% Private sale
          </Typography>
      ),
      para: (
          <Typography sx={{ color: "#ABB8DB", fontSize: "12px" }}>
            Locked for 9 months then 5% vested weekly
          </Typography>
      ),
    },
    {
      img: <img src={r7} alt="rect"></img>,
      title: (
          <Typography sx={{ color: "#fff", fontSize: "14px" }}>
            15% Core Team Wallet
          </Typography>
      ),
      para: (
          <Typography sx={{ color: "#ABB8DB", fontSize: "12px" }}>
            Locked for 9 months then 2% vested weekly
          </Typography>
      ),
    },
    {
      img: <img src={r8} alt="rect"></img>,
      title: (
          <Typography sx={{ color: "#fff", fontSize: "14px" }}>
            15% Liquidity and Exchange Listings
          </Typography>
      ),
      para: (
          <Typography sx={{ color: "#ABB8DB", fontSize: "12px" }}>
            10% TGE, then 10% unlocked each month after
          </Typography>
      ),
    },
    {
      img: <img src={r9} alt="rect"></img>,
      title: (
          <Typography sx={{ color: "#fff", fontSize: "14px" }}>
            30% Operation and Ecosystem Wallet
          </Typography>
      ),
      para: (
          <Typography sx={{ color: "#ABB8DB", fontSize: "12px" }}>
            5% at TGE, then 5% unlocekdeach month after
          </Typography>
      ),
    },
  ];

  return (
    <>
      <Box bgcolor={"#141420"} sx={{ marginX: 10, borderRadius: 2 }}>
        <Box justifyContent="center" textAlign="center" paddingTop={10}>
          <Typography variant="h6">Tokenomics</Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row", lg: "row" }}
          marginTop={5}
          justifyContent="space-evenly"
        >
          <Box
            // style={{ backgroundColor: "red" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src={tokengraph} alt="graph" ></img>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex=start"
            marginBottom={10}
          >
            {data.map((item, index) => {
              return (
                // <Box>
                <Tokenpaper
                  image={item.img}
                  title={item.title}
                  para={item.para}
                />
                // </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};
