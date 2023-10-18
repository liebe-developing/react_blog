import {
  Box,
} from "@chakra-ui/react";
import {
  Categories,
  LoadingSpinner,
  PopularPosts,
  RandomPosts,
  // RecentPosts,
} from "../components";

const Home = ({
  posts,
  categories,
  isLoadingPosts,
  isErrorPosts,
}) => {
  return (
    <Box>
      {isLoadingPosts ? <LoadingSpinner /> : <RandomPosts posts={posts} />}
      <Categories categories={categories} />
      {/* <RecentPosts /> */}
      <PopularPosts />
    </Box>
  );
};

export default Home;
