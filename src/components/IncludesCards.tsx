import Box from "@material-ui/core/Box";
// import { headerHeight, headerHeightMb } from '~/styles';
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  opacity: {
    opacity: 0.4,
  },
}));

export const CategoryCard = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Box
        padding={5}
        marginTop={5}
        marginLeft={2}
        width={"50%"}
        bgcolor={"#141420"}
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        className={props.opacity && classes.opacity}
        borderRadius="8px"
      >
        <Box>{props.image}</Box>
        <Box>
          <Typography variant="body1">{props.subtitle}</Typography>
        </Box>
        <Box>
          <Typography variant="body2">{props.para}</Typography>
        </Box>
      </Box>
    </>
  );
};
