import { Box } from "@chakra-ui/react";
import {
  Categories,
  PopularPosts,
  RandomPosts,
  RecentPosts,
} from "../components";

const Home = () => {
  return (
    <Box>
      <RandomPosts />
      <Categories />
      {/* <RecentPosts /> */}
      <PopularPosts />
    </Box>
  );
};

export default Home;
