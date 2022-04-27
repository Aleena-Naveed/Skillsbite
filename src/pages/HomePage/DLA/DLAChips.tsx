import Box from "@material-ui/core/Box";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router } from "react-router-dom";
import { marketing, business, trading, legal, tech, finance } from "~/assets";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export const Chips = () => {
  return (
    <>
      <Box marginTop={10} maxWidth={600} display="flex" marginLeft={2}>
        <Chip
          sx={{
            color: "#000",
            bgcolor: "#fff",
            borderRadius: 2,
            paddingY: 2,
            paddingX: 1,
            marginTop: 2,
            width: "25%",
            height: "10%",
          }}
          avatar={<Avatar alt="Marketing" src={marketing} />}
          label={
            <Typography
              color="black"
              variant="subtitle1"
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "25px",
                fontStyle: "normal",
              }}
            >
              Marketing
            </Typography>
          }
        />
        <Chip
          sx={{
            color: "#fff",
            bgcolor: "#141420",
            borderRadius: 2,
            marginLeft: "5px",
            paddingY: 2,
            paddingX: 1,
            marginTop: 2,
            width: "25%",
            height: "10%",
          }}
          avatar={<Avatar alt="finance" src={finance} />}
          label={
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "25px",
                fontStyle: "normal",
              }}
            >
              Finance
            </Typography>
          }
        />
        <Chip
          sx={{
            color: "#fff",
            bgcolor: "#141420",
            borderRadius: 2,
            marginLeft: "5px",
            paddingY: 2,
            paddingX: 1,
            marginTop: 2,
            width: "25%",
            height: "10%",
          }}
          avatar={<Avatar alt="Business" src={business} />}
          label={
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "25px",
                fontStyle: "normal",
              }}
            >
              Business
            </Typography>
          }
        />
        <Chip
          sx={{
            color: "#fff",
            bgcolor: "#141420",
            borderRadius: 2,
            marginLeft: "5px",
            paddingY: 2,
            paddingX: 1,
            marginTop: 2,
            width: "25%",
            height: "10%",
          }}
          avatar={<Avatar alt="trading" src={trading} />}
          label={
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "25px",
                fontStyle: "normal",
              }}
            >
              Trading
            </Typography>
          }
        />
      </Box>
      <Box
        marginTop={1}
        maxWidth={500}
        marginLeft={2}
      >
        <Chip
          sx={{
            color: "#fff",
            bgcolor: "#141420",
            borderRadius: 2,
            paddingY: 2,
            paddingX: 1,
            marginTop: 2,
            width: "25%",
            height: "10%",
          }}
          avatar={<Avatar alt="tech" src={tech} />}
          label={
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "25px",
                fontStyle: "normal",
              }}
            >
              Tech
            </Typography>
          }
        />
        <Chip
          sx={{
            color: "#fff",
            bgcolor: "#141420",
            borderRadius: 2,
            marginLeft: "5px",
            paddingY: 2,
            paddingX: 1,
            marginTop: 2,
            width: "35%",
            height: "10%",
          }}
          avatar={<Avatar alt="legal" src={legal} />}
          label={
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "25px",
                fontStyle: "normal",
              }}
            >
              Legal & Policy
            </Typography>
          }
        />
        <Chip
          label={
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "25px",
                fontStyle: "normal",
              }}
            >
              & more
            </Typography>
          }
          sx={{
            color: " #FFFFFF",
            bgcolor: "#141420",
            borderRadius: 2,
            marginLeft: "5px",
            paddingY: 2,
            paddingX: 1,
            marginTop: 2,
            width: "25%",
            height: "10%",
          }}
        />
      </Box>
    </>
  );
};
