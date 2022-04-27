import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

import { MIcon } from "~/assets";
import { CategoryCard } from "../../../components";

export const Category = () => {
  const data = [
    {
      image: <img src={MIcon} alt="icon"></img>,
      subtitle: "Marketing",
      para: "Get a guided and personalized experience with access to theoretical knowledge, courses, mentoring program, guest talks, webinars, as well as practical knowledge through project opportunities and other bonus features.",
    },
    {
      image: <img src={MIcon} alt="icon"></img>,
      subtitle: "Finance",
      para: "Get a guided and personalized experience with access to theoretical knowledge, courses, mentoring program, guest talks, webinars, as well as practical knowledge through project opportunities and other bonus features.",
    },
  ];
  return (
    <>
      <Box
        marginTop={10}
        marginBottom={10}
        display="flex"
        flexDirection={{ xs: "column", md: "column", lg: "row" }}
        justifyContent={{
          xs: "center",
          md: "space-between",
          lg: "space-between",
        }}
        alignItems="flex-start"
        width={"60%"}
      >
        {data.map((item, index) => {
          return (
            <CategoryCard
              image={item.image}
              subtitle={item.subtitle}
              para={item.para}
              opacity={index === 1 ? true : false}
            />
          );
        })}
      </Box>
    </>
  );
};
