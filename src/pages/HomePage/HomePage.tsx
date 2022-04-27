import { MainLayout } from "~/components";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HeroPage } from "./HeroPage";
import { KeyBenefitsPage } from "./keyBenefits";
import { Elearning } from "./E-Learning";
import { EcosystemFriendly } from "./EcoSystem";
import { DLAbanner } from "./DLABanner";
import { Maindla } from "./DLA";
import { dlaLine } from "~/assets";
import { Skillsection } from "./SkillsUtility";
import { TokenomicSection } from "./Tokenomics";
import { Roadmap } from "./RoadMap";
import { TeamSection } from "./Team";
import { Partnersection } from "./Partners";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <HeroPage />
      <KeyBenefitsPage />
      <Elearning />
      <EcosystemFriendly />
      <DLAbanner />
      <Maindla />
      <Skillsection />
      <TokenomicSection />
      <Roadmap />
      <TeamSection />
      <Partnersection />
    </MainLayout>
  );
};
