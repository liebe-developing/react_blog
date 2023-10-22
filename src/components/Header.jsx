import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DarkModeButton from "./DarkModeButton";
import { NAV_ITEMS } from "../constants";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  EditIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { FaBolt } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlinePoweroff } from "react-icons/ai";
import toast from "react-hot-toast";
import sessionStorage from "redux-persist/es/storage/session";

export default function WithSubnavigation() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const { isOpen, onToggle } = useDisclosure();
  let options = { year: "numeric", month: "long", day: "numeric" };
  let today = new Date().toLocaleDateString("fa-IR", options);

  const [scrolled, setScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolledBg = useColorModeValue("#ffffffc7", "rgb(23, 25, 35, 0.8)");

  const signOut = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <Box py={4} px={3} bg={useColorModeValue("white", "gray.800")}>
        <Flex
          maxW="7xl"
          mx={"auto"}
          className="justify-between w-full items-center"
        >
          <Text
            className="flex items-center font-semibold gap-1"
            fontSize={{ base: "8px", md: "11px" }}
          >
            <Icon as={FaBolt} color="red" />
            اخبار داغ
            <Text mr={2} color={useColorModeValue("gray.600", "gray.400")}>
              بهترین گزینه های مکبوک پرو در سال جدید
            </Text>
          </Text>
          <Text
            className="flex items-center gap-1.5"
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={{ base: "7px", md: "12px" }}
          >
            <BsCalendarCheck />
            {today}
          </Text>
        </Flex>
      </Box>
      <Box
        bg={scrolled ? scrolledBg : "transparent"}
        borderBottom={scrolled && "1px solid"}
        borderBottomColor={useColorModeValue(
          "rgba(193, 193, 193, 0.5)",
          "rgba(39, 43, 64, 0.5)"
        )}
        className="sticky top-0 z-50"
        backdropFilter={scrolled ? "blur(100px)" : "none"}
        w={"full"}
      >
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
            className="justify-between w-full items-center"
          >
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex
              flex={{ base: 1, md: 0 }}
              justify={{ base: "center", md: "start" }}
            >
              <Link to="/">
                <Text
                  fontSize={{ base: "", md: "30px" }}
                  fontFamily={"casablanca"}
                  color={useColorModeValue("gray.800", "white")}
                >
                  بلاگ
                </Text>
              </Link>
            </Flex>
            <Flex
              display={{ base: "none", md: "flex" }}
              justifyContent="center"
            >
              <DesktopNav />
            </Flex>

            <Stack
              display={"flex"}
              className="items-center"
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={2}
            >
              <DarkModeButton
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
              />
              {currentUser ? (
                <Flex className="items-center gap-2 min-w-fit">
                  <Flex className="flex-col gap-0.5">
                    <Text className="font-semibold text-[10px] sm:text-[14px]">
                      {currentUser?.user?.name}
                    </Text>
                    <Text
                      className="text-left text-[10px] sm:text-[14px]"
                      color={useColorModeValue("gray.500", "gray.400")}
                    >
                      alirazmjooei
                    </Text>
                  </Flex>
                  <Menu>
                    <MenuButton as={"button"}>
                      <Avatar
                        src={currentUser.token}
                        name={currentUser.token}
                        cursor="pointer"
                        size={{ base: "sm", md: "md" }}
                      />
                    </MenuButton>
                    <MenuList minWidth="300px">
                      <Flex className="flex-col items-center justify-center text-center w-full text-sm">
                        <Flex
                          minH="48px"
                          w="full"
                          display="flex"
                          justifyContent="center"
                          mb={5}
                          flexDir="column"
                          alignItems="center"
                          gap={3}
                        >
                          <Avatar
                            src={currentUser.token}
                            name={currentUser.token}
                            cursor="pointer"
                            size="xl"
                          />
                          <Text
                            className="text-[10px] sm:text-[15px]"
                            noOfLines={1}
                          >
                            {currentUser?.user?.email}
                          </Text>
                        </Flex>
                        <Link to="/profile" className="w-full">
                          <MenuItem
                            icon={<EditIcon width="18px" height="18px" />}
                            className={`${useColorModeValue(
                              "hover:bg-green-50 hover:text-green-500",
                              "hover:bg-gray-800 hover:text-green-500"
                            )} hover:transition duration-500 ease-in-out`}
                          >
                            ویرایش اطلاعات/پروفایل
                          </MenuItem>
                        </Link>
                        <MenuItem
                          icon={<SettingsIcon width="18px" height="18px" />}
                          my={2}
                          className={`${useColorModeValue(
                            "hover:bg-green-50 hover:text-green-500",
                            "hover:bg-gray-800 hover:text-green-500"
                          )} hover:transition duration-500 ease-in-out`}
                        >
                          تنظیمات
                        </MenuItem>
                        <MenuItem
                          icon={
                            <AiOutlinePoweroff className="w-[18px] h-[18px]" />
                          }
                          className={`${useColorModeValue(
                            "hover:bg-red-50 hover:text-red-500",
                            "hover:bg-gray-800 hover:text-red-500"
                          )} hover:transition duration-500 ease-in-out`}
                          onClick={signOut}
                          type="button"
                        >
                          خروج
                        </MenuItem>
                      </Flex>
                    </MenuList>
                  </Menu>
                </Flex>
              ) : (
                <Button
                  display="flex"
                  alignItems="center"
                  gap={2}
                  colorScheme="whatsapp"
                  _hover={{ opacity: "80%" }}
                  w="fit-content"
                  fontFamily="Casablanca"
                  rounded="md"
                  size={{ base: "xs", md: "md" }}
                  fontSize={{ base: "13px", md: "23px" }}
                  onClick={() => navigate("/login")}
                >
                  ورود کاربران
                </Button>
              )}
            </Stack>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("green.400", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                className="hover:transition duration-300 ease-in-out"
              >
                {navItem.label}
                {navItem.children && <ChevronDownIcon />}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("green.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"} cursor="pointer">
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "green.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"green.400"} w={5} h={5} as={ChevronLeftIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
        display="flex"
      >
        <Text
          fontWeight={600}
          fontSize="12px"
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={5}
            h={5}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
