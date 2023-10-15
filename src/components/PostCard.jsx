import {
  Avatar,
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  ScaleFade,
  SimpleGrid,
  Slide,
  SlideFade,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCalendarCheck } from "react-icons/bs";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const PostCard = ({ post }) => {
  const { img, title, createdAt, creator, category } = post;

  return (
    <Flex className="group sm:hover:brightness-125 hover:transition ease-in-out">
      <Image
        src={img}
        alt={title}
        className="sm:brightness-75 w-full h-full group-hover:scale-105 transition duration-500"
      />
      <Flex className="flex flex-col absolute sm:opacity-0 bottom-3 sm:bottom-[-100px] group-hover:opacity-100 group-hover:bottom-2 hover:transition duration-700 ease-in-out gap-5 justify-center items-center w-full text-center drop-shadow-md">
        <Badge
          variant="solid"
          colorScheme="green"
          rounded="xl"
          px={2}
          py={0.5}
          fontSize={{ base: "12px", md: "14px" }}
        >
          {category}
        </Badge>
        <Text
          color={useColorModeValue("white", "gray.300")}
          _hover={{ color: "#22C35E" }}
          className={"hover:transition duration-300 ease-out font-bold text-center max-w-[280px] max-sm:text-sm"}
        >
          {title}
        </Text>

        <Flex className="justify-between w-full px-4">
          <Text
            className="flex items-center gap-1.5"
            color={useColorModeValue("gray.100", "gray.400")}
            fontSize={{ base: "10px", md: "12px" }}
          >
            <Icon as={BsCalendarCheck} color="#22C35E" />
            {digitsEnToFa(createdAt)}
          </Text>
          {creator.map((person, idx) => (
            <Flex key={idx} className="items-center gap-2">
              <Text
                color={useColorModeValue("gray.100", "gray.300")}
                fontSize={{ base: "11px", md: "13px" }}
                className="font-semibold"
              >
                {person.name}
              </Text>
              <Avatar size="sm" name={person?.name} src={person?.avatarUrl} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostCard;
