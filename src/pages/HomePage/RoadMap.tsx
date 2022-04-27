import { MainLayout } from "~/components";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { HeroPage } from "./HeroPage";
import { height } from "@mui/system";
import { bullet, rm1, rm2, rm3 } from "~/assets";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@mui/material";
import { RoadCard } from "~/components";



export const Roadmap = () => {
  const data = [
    {
      bg: rm1,
      q: (
        <Box>
          <Typography
            textAlign={"center"}
            sx={{
              color: "#fff",
              fontSize: "18px",
              lineHeight: "110%",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            Q4 2021
          </Typography>
        </Box>
      ),
      subtitle: (
        <Box>
          <Typography
            textAlign={"center"}
            sx={{ color: "#fff" }}
            variant="body1"
          >
            Concept Phase
          </Typography>
        </Box>
      ),
      para: (
        <Box textAlign={"center"}>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box>
              <img src={bullet} alt="icon" height={20} width={20} />
            </Box>
            <Box>
              <Typography
                // textAlign={"center"}
                sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
              >
                Participation in Accelertion Programme
              </Typography>
            </Box>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box>
              <img src={bullet} alt="icon" height={20} />
            </Box>
            <Box>
              <Typography
                textAlign={"center"}
                sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
              >
                Development of project concepts
              </Typography>
            </Box>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Core Team Formation
            </Typography>
          </Box>
          <Box
            paddingTop={"5px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Market Research
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}>
              Establishing Plan for 2022
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      bg: rm2,
      q: (
        <Box>
          <Typography
            textAlign={"center"}
            sx={{
              color: "#fff",
              fontSize: "18px",
              lineHeight: "110%",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            Q2 2022
          </Typography>
        </Box>
      ),
      subtitle: (
        <Box>
          <Typography
            textAlign={"center"}
            sx={{ color: "#fff", fontSize: "28px" }}
            variant="body1"
          >
            Platform Launch Phase
          </Typography>
        </Box>
      ),
      para: (
        <Box>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Website launch
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Whitepaper launch
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Formulating business model and tokenomics
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Search Engine beta launch
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Community build-up{" "}
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Seed investment
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      bg: rm3,
      q: (
        <Box>
          <Typography
            textAlign={"center"}
            sx={{
              color: "#fff",
              fontSize: "18px",
              lineHeight: "110%",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            Q3 2022
          </Typography>
        </Box>
      ),
      subtitle: (
        <Box>
          <Typography
            textAlign={"center"}
            sx={{ color: "#fff", fontSize: "28px" }}
            variant="body1"
          >
            Development Phase
          </Typography>
        </Box>
      ),
      para: (
        <Box width={"80%"}>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              // textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Creation of SKILLS token and smart contract
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Token Panel launch
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Private Sale
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Smart Contract Audit
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Mentoring programme launch
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Strategic Partnerships
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              // textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Mass marketing campaign (eg. engaging influencers)
            </Typography>
          </Box>
          <Box
            paddingTop={"1px"}
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src={bullet} alt="icon" height={20} />
            <Typography
              textAlign={"center"}
              sx={{ color: "#fff", fontSize: "12px", margin: "7px" }}
            >
              Whitelist registration
            </Typography>
          </Box>
        </Box>
      ),
    },
  ];

  return (
    <Box marginTop={10} marginX={10}>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography sx={{ margin: "10px" }} variant="h5">
            ROAD MAP
          </Typography>
          <Typography
            sx={{
              margin: "10px",
            }}
            variant="h6"
          >
            The Road to knowledge
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight={10}
        >
          <IconButton
            sx={{
              color: "#fff",
              // marginLeft: "700px",
              marginTop: "10px",
            }}
          >
            <ArrowBackIosIcon fontSize="large" />
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent={{ xs: "center", lg: "space-between" }}
        alignItems={"center"}
        marginTop={5}
      >
        {data.map((item, index) => {
          return <RoadCard bg={item.bg} q={item.q} title={item.subtitle} para={item.para} />;
        })}
      </Box>
    </Box>
  );
};
