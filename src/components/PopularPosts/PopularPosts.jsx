import {
  Avatar,
  Badge,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { RANDOM_POSTS } from "../../constants";
import PostCard from "../RandomPosts/RandomPostCard";
import { BsCalendarCheck } from "react-icons/bs";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const PopularPosts = () => {
  return (
    <Box
      maxW="7xl"
      mx={"auto"}
      className="flex-col items-center justify-center max-sm:px-5 mb-5"
      mb={16}
    >
      <Heading fontFamily="casablanca" size="lg" textAlign="center" mb={8}>
        پست های محبوب
      </Heading>
      <Flex className="sm:items-center max-sm:flex-col max-sm:justify-center max-sm:items-center w-full gap-2 sm:gap-5">
        {RANDOM_POSTS.slice(0, 1).map((post, idx) => (
          <Box
            key={idx}
            pos="relative"
            className="group rounded-xl"
            overflow="hidden"
          >
            <Image
              src={post.img}
              alt={post.title}
              className="group-hover:scale-105 transition duration-500 w-full h-full"
              rounded="xl"
              w={{ base: "350px", md: "580px" }}
              h={{ base: "350px", md: "580px" }}
            />
            <Flex className="flex flex-col gap-5 absolute left-0 right-0 top-0 bottom-0 h-full w-full text-center justify-center items-center sm:backdrop-brightness-50 text-white font-semibold rounded-xl sm:group-hover:backdrop-brightness-75 group-hover:transition duration-500 ease-in-out">
              <Badge
                variant="solid"
                colorScheme="green"
                rounded="xl"
                px={2}
                py={0.5}
                fontSize={{ base: "", md: "14px" }}
              >
                {post.category}
              </Badge>
              <Text
                color={useColorModeValue("white", "gray.300")}
                _hover={{ color: "#22C35E" }}
                className={
                  "hover:transition duration-300 ease-out font-bold text-center max-w-[280px] cursor-pointer"
                }
              >
                {post.title}
              </Text>
              <Flex className="gap-2 px-4">
                <Text
                  className="flex items-center gap-1"
                  color={useColorModeValue("gray.100", "gray.400")}
                  fontSize={{ base: "", md: "12px" }}
                >
                  <Icon as={BsCalendarCheck} color="#22C35E" />
                  {digitsEnToFa(post.createdAt)}
                </Text>
                {post.creator.map((person, idx) => (
                  <Flex key={idx} className="items-center gap-1">
                    <Text
                      color={useColorModeValue("gray.100", "gray.300")}
                      fontSize={{ base: "", md: "13px" }}
                      className="font-semibold"
                    >
                      {person.name}
                    </Text>
                    <Avatar
                      size="sm"
                      name={person?.name}
                      src={person?.avatarUrl}
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Box>
        ))}

        <Box className="flex flex-col justify-center items-center gap-5">
          {RANDOM_POSTS.slice(0, 3).map((post, idx) => (
            <Flex key={idx} gap={4} className="items-center max-sm:flex-col">
              <Image
                src={post.img}
                alt={post.title}
                rounded="xl"
                w={{ base: "350px", md: "280px" }}
                h={{ base: "350px", md: "180px" }}
              />
              <Flex className="flex-col justify-between h-full gap-4 w-full">
                <Badge
                  variant="solid"
                  colorScheme="green"
                  rounded="xl"
                  px={2}
                  w="fit-content"
                  py={0.5}
                  fontSize={{ base: "11px", md: "13px" }}
                >
                  {post.category}
                </Badge>
                <Text
                  color={useColorModeValue("gray.800", "gray.300")}
                  _hover={{ color: "#22C35E" }}
                  className={
                    "hover:transition duration-300 ease-out font-bold text-right cursor-pointer max-sm:text-xs"
                  }
                  noOfLines={2}
                >
                  {post.title}
                </Text>
                <Text
                  display="flex"
                  alignItems="center"
                  className="gap-1"
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ base: "12px", md: "12px" }}
                >
                  <Icon as={BsCalendarCheck} color="#22C35E" />
                  {digitsEnToFa(post.createdAt)}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default PopularPosts;
