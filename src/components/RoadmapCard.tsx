import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import {
 rm1, rm2, rm3,
} from "~/assets";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${rm1})`,
    backgroundRepeat: "no-repeat",
    // marginTop: "-0px",
    backgroundSize: "stretch",
    backgroundPosition: "center top",
  },
}));

export const RoadCard = (props: any) => {
    const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" marginRight={5}>
      <Box margin={2} >{props.q}</Box>
      <Box
        style={{
          backgroundImage: `url(${props.bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "stretch",
          backgroundPosition: "center top",
        }}
        height={470}
        width={350}
        display="flex"
        flexDirection="column"
        p={5}
        borderRadius={8}
        // justifyContent="space-between"
        // alignItems="center"
      >
        <Box
          height={50}
          display="flex"
          flexDirection="column"
          mb={2}
          // justifyContent="center"
          // alignItems="center"
        >
          {props.title}
        </Box>
        <Box
          // height={300}
          display="flex"
          flexDirection="column"
          // justifyContent="center"
          // alignItems="center"
        >
          {props.para}
        </Box>
      </Box>
    </Box>
  );
};
