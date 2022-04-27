
import {
  max1,
  max2,
  rem,
  piotr,
  leon,
  linked,
  nang,
  chibuz,
  kyran,
} from "~/assets";
import Typography from "@mui/material/Typography";
import Box from "@material-ui/core/Box";
import { Teamcard } from "../../components";
export const TeamSection = () => {
  const data1 = [
    {
      img: <img src={max1} alt="rect" ></img>,
      name: "Max Miskow",
      title: "Co-Founder & CEO",
      icon: <img src={linked} alt="rect"></img>,
    },
    {
      img: <img src={piotr} alt="rect"></img>,
      name: "Piotr Oginski",
      title: "Co-Founder & COO & Head of Product ",
      icon: <img src={linked} alt="rect"></img>,
    },
    {
      img: <img src={max2} alt="rect"></img>,
      name: "Max Miskow",
      title: "Co-Founder & CEO",
      icon: <img src={linked} alt="rect"></img>,
    },
  ];
  const data2 = [
    {
      img: <img src={rem} alt="rect"></img>,
      name: "Remigiusz  Kazmierczak",
      title: "Full Stack Developer",
      icon: <img src={linked} alt="rect"></img>,
    },
    {
      img: <img src={leon} alt="rect"></img>,
      name: "Remigiusz  Kazmierczak",
      title: "Full Stack Developer",
      icon: <img src={linked} alt="rect"></img>,
    },
  ];

  const data3 = [
    {
      img: <img src={nang} alt="rect"></img>,
      name: "Nang Nguyen",
      title: "Blockchain Advisor",
      icon: <img src={linked} alt="rect"></img>,
    },
    {
      img: <img src={chibuz} alt="rect"></img>,
      name: "Chibuzor Udokwu",
      title: "Blockchain Technical Advisor  ",
      icon: <img src={linked} alt="rect"></img>,
    },
    {
      img: <img src={kyran} alt="rect"></img>,
      name: "Kyran Parker",
      title: "Business Development Advisor ",
      icon: <img src={linked} alt="rect"></img>,
    },
  ];

  return (
    <Box marginTop={20} marginX={20}>
      <Box textAlign={"center"}>
        <Typography variant="h5">THE TEAM</Typography>
        <Typography variant="h6">Meet our team</Typography>
      </Box>
      <Box marginY={5}>
        <Typography
          marginY={10}
          textAlign={"center"}
          sx={{ color: "#fff", fontWeight: "bold" }}
        >
          CORE TEAM
        </Typography>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "column", lg: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {data1.map((item, index) => {
            return (
              <Box>
                <Teamcard
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  icon={item.icon}
                />
              </Box>
            );
          })}
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "column", lg: "row" }}
          marginTop={8}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {data2.map((item, index) => {
            return (
              <Box>
                <Teamcard
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  icon={item.icon}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          marginY={10}
          textAlign={"center"}
          sx={{ color: "#fff", fontWeight: "bold" }}
        >
          ADVISORS
        </Typography>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "column", lg: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {data3.map((item, index) => {
            return (
              <Box>
                <Teamcard
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  icon={item.icon}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
