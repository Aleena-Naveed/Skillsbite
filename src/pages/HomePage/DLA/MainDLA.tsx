import { MainLayout } from "~/components";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Definition } from "./DLADefinition";
import Box from "@material-ui/core/Box";
import { Includes } from "./DlaIncludes";
import { Chips } from "./DLAChips";
import { DLABG } from "~/assets";
import { line } from "~/assets";
import { Category } from "./Categories";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${DLABG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    height: "100%",
  },
}));

export const Maindla = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      marginTop={10}
      paddingBottom={15}
      // marginLeft={10}
      // bgcolor="red"
    >
      <Box>
        <Definition />
      </Box>
      <Box display="flex" flexDirection="column" marginX={{ lg: 10, xs: 10 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          // marginX={10}
        >
          <img src={line} alt="line" width="100%"></img>
        </Box>
        <Box>
          <Includes />
        </Box>
        <Chips />
        <Category />
      </Box>
    </Box>
  );
};
