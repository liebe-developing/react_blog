import { Box, Flex, Icon, IconButton } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <Box
      className="absolute top-[50%] mt-[-15px] w-full z-20 max-sm:px-2"
      display={{ base: "absolute", md: "none" }}
    >
      <Icon
        p={2}
        cursor="pointer"
        boxSize={{ base: 7, md: 8 }}
        _hover={{ opacity: "90%" }}
        color="white"
        as={MdArrowForwardIos}
        rounded="full"
        bg="#22ce35"
        onClick={() => swiper.slidePrev()}
      />
      <Icon
        p={2}
        cursor="pointer"
        boxSize={{ base: 7, md: 8 }}
        _hover={{ opacity: "90%" }}
        color="white"
        as={MdArrowBackIosNew}
        rounded="full"
        bg="#22ce35"
        className="float-left"
        onClick={() => swiper.slideNext()}
      />
    </Box>
  );
};

export default SwiperButton;
