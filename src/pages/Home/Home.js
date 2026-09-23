import { Box } from "@mui/material";

import EmployerHero from "../../components/home/EmployerHero";
import StatsBar from "../../components/home/StatsBar";
import HiringFeatures from "../../components/home/HiringFeatures";
import PricingSection from "../../components/home/PricingSection";
import EmployerCTA from "../../components/home/EmployerCTA";

function Home() {
  return (
    <Box>
      <EmployerHero />

      <StatsBar />

      <HiringFeatures />

      <PricingSection />

      <EmployerCTA />
    </Box>
  );
}

export default Home;