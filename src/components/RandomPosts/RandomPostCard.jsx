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
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const RandomPostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { title, status, picture, created_at, category_id } = post;
  let options = { year: "numeric", month: "long", day: "numeric" };
  let postCreatedTime = new Date(created_at).toLocaleDateString(
    "fa-IR",
    options
  );

  return (
    <Flex className="group sm:hover:brightness-125 hover:transition ease-in-out">
      <Image
        src={"https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg"}
        alt={title}
        className="sm:brightness-75 w-full h-full group-hover:scale-105 transition duration-500"
      />
      <Icon
        as={isLiked ? AiFillHeart : AiOutlineHeart}
        onClick={() => setIsLiked(!isLiked)}
        boxSize={8}
        color={"red.600"}
        className="absolute sm:opacity-0 top-5 left-5 sm:bottom-[-100px] group-hover:opacity-100 group-hover:bottom-2 hover:transition duration-700 ease-in-out gap-5 justify-center items-center w-full text-center drop-shadow-md"
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
          {category_id}
        </Badge>
        <Text
          color={useColorModeValue("white", "gray.300")}
          _hover={{ color: "#22C35E" }}
          className={
            "hover:transition duration-300 ease-out font-bold text-center max-w-[280px] max-sm:text-sm"
          }
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
            {digitsEnToFa(postCreatedTime)}
          </Text>
          {/* {creator.map((person, idx) => ( */}
          <Flex className="items-center gap-2">
            <Text
              color={useColorModeValue("gray.100", "gray.300")}
              fontSize={{ base: "11px", md: "13px" }}
              className="font-semibold"
            >
              علی رزمحوئی
            </Text>
            <Avatar
              size="sm"
              name={"Ali Razmjooei"}
              src={
                "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg"
              }
            />
          </Flex>
          {/* ))} */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RandomPostCard;
