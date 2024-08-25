import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Excersise from "../components/Excersise";
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Excersise />
    </Box>
  );
};

export default Home;
