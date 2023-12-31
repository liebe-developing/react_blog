import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { CATEGORIES } from "../constants";
import { Link } from "react-router-dom";

const Categories = ({ categories, categoryPosts }) => {
  return (
    <Flex
      className="flex-col items-center justify-center max-sm:px-5"
      my={16}
      gap={8}
    >
      <Heading fontFamily="casablanca" size="lg">
        دسته بندی ها
      </Heading>
      <SimpleGrid maxW="7xl" mx={"auto"} columns={[2, null, 6]} spacing={4}>
        {categories?.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.title}`}
            state={categoryPosts}
          >
            <Box className="relative rounded-xl cursor-pointer group hover:scale-105 transition duration-500">
              <Image
                src={""}
                alt={category.title}
                className="rounded-xl sm:min-h-[200px] sm:min-w-[200px] w-full max-sm:max-h-[150px] h-full"
              />
              <Text className="flex absolute left-0 right-0 top-0 bottom-0 h-full w-full text-center justify-center items-center backdrop-brightness-50 text-white font-semibold text-2xl rounded-xl group-hover:backdrop-brightness-75 group-hover:transition duration-500 ease-in-out">
                {category.title}
              </Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Categories;
