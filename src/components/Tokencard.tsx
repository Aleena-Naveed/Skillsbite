import Box from "@material-ui/core/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { background } from "src/styles";

export const Tokenpaper = (props: any) => {
  return (
    <>
      <Box>
        <Paper
          elevation={0}
          sx={{
            marginBottom: 1,
            background: "#000",
            borderRadius: 2,
            // marginX: 2,
            //  padding: 2,
            width: "475px",
            height: "70px",
          }}
        >
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box marginY={2} marginLeft={2} >{props.image}</Box>
            <Box>
              <Box textAlign={"left"} margin={1}>
                {props.title}
                {props.para}
              </Box>
              {/* <Box></Box> */}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
