import { Box } from "@chakra-ui/react";
import {
  Categories,
  PopularPosts,
  RandomPosts,
  // RecentPosts,
} from "../components";

const Home = ({ posts, categories }) => {
  return (
    <Box>
      <RandomPosts posts={posts} />
      <Categories categories={categories} />
      {/* <RecentPosts /> */}
      <PopularPosts />
    </Box>
  );
};

export default Home;
