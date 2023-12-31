import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const SocialIcons = ({ icon }) => {
  return (
    <Icon
      as={icon}
      boxSize={{ base: 6, md: 7 }}
      p={1}
      _hover={{
        bg: useColorModeValue("#90EDB3", "#90EDB3"),
        transition: "all 0.5s",
      }}
      rounded="md"
      cursor="pointer"
    />
  );
};
const Footer = () => {
  return (
    <Flex
      px={3}
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      minH={"60px"}
      alignItems={"center"}
      py={{ base: 2, md: 5 }}
    >
      <Flex
        maxW="7xl"
        mx={"auto"}
        className="justify-between w-full items-center flex-col sm:flex-row max-sm:gap-5 my-3"
      >
        <Flex
          gap={2}
          fontFamily="casablanca"
          fontSize="20px"
          alignItems="center"
        >
          <Text>ساخته شده با</Text>
          <AiFillHeart color="red" />
          <Text className="flex items-center">
            توسط
            <Text
              onClick={() => window.open("https://t.me/alirazmjue", "_blank")}
              style={{ textDecoration: "none" }}
              _hover={{ opacity: "80%" }}
              mr={2}
              cursor="pointer"
            >
              {" "}
              علی
            </Text>{" "}
            <span className="mx-2">و</span>
            <Text
              onClick={() => window.open("https://t.me/LuaXDD", "_blank")}
              style={{ textDecoration: "none" }}
              _hover={{ opacity: "80%" }}
              cursor="pointer"
              mr={2}
            >
              دنی
            </Text>
          </Text>
        </Flex>

        <Flex gap={5}>
          <SocialIcons icon={FaWhatsapp} />
          <SocialIcons icon={FaTelegram} />
          <SocialIcons icon={FaInstagram} />
          <SocialIcons icon={FaLinkedinIn} />
          <SocialIcons icon={FaTwitter} />
          <SocialIcons icon={FaFacebook} />
          <SocialIcons icon={FaGithub} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
