import { MainLayout } from "~/components";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { HeroPage } from "./HeroPage";
import { height } from "@mui/system";
import { benefitsbg } from "~/assets";
import { Typography, Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${benefitsbg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "stretch",
    backgroundPosition: "center top",
    height: 900,
    // width: "100vw",
  },
}));

export const KeyBenefitsPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction={{ lg: "row-reverse" }}
      justifyContent="center"
      alignItems="stretch"
      // marginX={10}
      // marginBottom={5}
    >
      <Grid
        item
        xs={12}
        md={12}
        lg={6}
        paddingLeft={{ lg: 20, xs: 10 }}
        paddingRight={20}
        display={"flex"}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box>
            <Typography variant="h5">Why are we unique ?</Typography>
            <Typography variant="h6">Key benefits of Skillsbite</Typography>
          </Box>

          <Box>
            <Typography variant="body1">Opportunity</Typography>

            <Typography variant="body2">
              There is an opportunity for learners to be aligned with
              educational content that’s delivered in their preferred learning
              style. This will allow every user to learn anything, in a manner
              suited to them while earning rewards through $SKILLS tokens.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={6}
        paddingRight={{ lg: 20, xs: 10 }}
        paddingLeft={{ lg: 20, xs: 10 }}
        display={"flex"}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box>
            <Typography textAlign={{ lg: "end", md: "start" }} variant="body1">
              Unique
            </Typography>
            <Typography textAlign={{ lg: "end", md: "start" }} variant="body2">
              Skillsbite is a unique platform that opens space for the creation
              and recommendation of knowledge as well as for the use of various
              learning methods to fulfill expectations and needs of every
              learner around the world.
            </Typography>
          </Box>

          <Box>
            <Typography textAlign={{ lg: "end", md: "start" }} variant="body1">
              Adjustable
            </Typography>

            <Typography textAlign={{ lg: "end", md: "start" }} variant="body2">
              Skillsbite opens up opportunities for new areas that are not
              currently fully covered in traditional education. We introduce the
              possibility of learning topics of the future and thus increase the
              chances of acquiring the skills of the future.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
