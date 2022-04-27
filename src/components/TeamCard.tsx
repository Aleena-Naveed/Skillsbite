import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export const Teamcard = (props: any) => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="space-evenly"
      style={{
        backgroundColor: "#141420",
        position: "relative",
      }}
      width={250}
      height={170}
      paddingTop={4}
      paddingBottom={4}
      paddingRight={4}
      paddingLeft={3}
      borderRadius={"8px"}
    >
      <Box
        style={{
          position: "absolute",
          top: "-10%",
          // left: "50%",
          // width: "200px",
          // height: "100px",
          // transform: "translate(-50%,-50%)",
        }}
      >
        {props.img}
      </Box>

      <Box>
        <Box color={"#fff"} paddingTop={8}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "28px",
            }}
          >
            {props.name}
          </Typography>
        </Box>
        <Box color={"#fff"} paddingTop={2}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "26px",
              color: "#C6C6C6",
            }}
          >
            {props.title}
          </Typography>
        </Box>
        <Box paddingTop={2}>{props.icon}</Box>
      </Box>
    </Box>
  );
};
