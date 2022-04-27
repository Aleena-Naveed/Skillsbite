import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { height } from "@mui/system";
import { p1, p2, p3 } from "~/assets";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import { SkillsBiteLogo } from "~/assets";
import { Twitterlogo } from "~/assets";
import { MLogo } from "~/assets";
import { Smilylogo } from "~/assets";
import { Telegramlogo, linked } from "~/assets";
import TextField from "@mui/material/TextField";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

export const Footer = () => {
  const [text, setText] = useState("");

  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#141420"
      paddingX={{ xs: 0, lg: 20 }}
      paddingY={10}
    >
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        justifyContent={{ xs: "center", md: "start", lg: "start" }}
      >
        <img src={SkillsBiteLogo} alt="logo"></img>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row", lg: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", md: "start", lg: "start" }}
        width="100%"
      >
        <Box display="flex" flexDirection="column">
          <Box marginTop={5} >
            <Typography sx={{ color: "#fff" }} variant="body2">
              Get a guided and personalized experience with access to
              theoretical knowledge, courses, mentoring program, webinars, as
              well as practical opportunities.
            </Typography>
          </Box>
          <Box
            marginTop={5}
            display="flex"
            justifyContent={{
              xs: "center",
              md: "flex-start",
              lg: "flex-start",
            }}
            alignItems="center"
          >
            <img src={linked} alt="logo"></img>
            <img
              style={{ marginLeft: "20px" }}
              src={Twitterlogo}
              alt="logo"
            ></img>
            <img style={{ marginLeft: "20px" }} src={MLogo} alt="logo"></img>
            <img
              style={{ marginLeft: "20px" }}
              src={Telegramlogo}
              alt="logo"
            ></img>
            <img
              style={{ marginLeft: "20px" }}
              src={Smilylogo}
              alt="logo"
            ></img>
          </Box>
        </Box>

        <Box
          display="flex"
          marginTop={5}
          // width={400}
          marginX={5}
          justifyContent="space-around"
        >
          <Box>
            <Typography sx={{ color: "#fff" }} variant="body2">
              Home
            </Typography>
            <Typography
              sx={{ color: "#fff", marginTop: "10px" }}
              variant="body2"
            >
              Team
            </Typography>
            <Typography
              sx={{ color: "#fff", marginTop: "10px" }}
              variant="body2"
            >
              Whitepaper
            </Typography>
          </Box>

          <Box marginX={5}>
            <Typography sx={{ color: "#fff" }} variant="body2">
              Tokenomics
            </Typography>
            <Typography
              sx={{ color: "#fff", marginTop: "10px" }}
              variant="body2"
            >
              RoadMap
            </Typography>
            <Typography
              sx={{ color: "#fff", marginTop: "10px" }}
              variant="body2"
            >
              About us
            </Typography>
          </Box>
        </Box>

        <Box marginTop={5} width={"100%"}>
          <Typography
            variant="body2"
            sx={{ color: "#fff", fonstSize: "15px", fontFamily:"Poppins", fontWeight:"600", fontStyle: "normal", marginBottom: "10px" }}
          >
            Subscribe to our newsletter
          </Typography>
          <TextField
            size="small"
            style={{
              background: "#000000",
              borderRadius: "10px",
              color: "#fff",
              // width: 300,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      background:
                        "linear-gradient(180deg, #4E7DF9 0%, #7000FF 100%)",
                      color: "#fff",
                    }}
                  >
                    <ChevronRightIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
             id="standard-basic"
            placeholder="Email address"
            value={text}
            // onChange={(e) => handleInputThrottled(e.target.value)}
            type="text"
    
          />
        </Box>
      </Box>
    </Box>
  );
};
