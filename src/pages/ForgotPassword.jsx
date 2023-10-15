import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useColorMode,
  Box,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  Icon,
  FormHelperText,
} from "@chakra-ui/react";
import DarkModeButton from "../components/DarkModeButton";
import { Btn, OutlineBtn } from "../components";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import LoginImage from "../assets/login-image.jpg";
import DarkLoginImage from "../assets/dark-login-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const ForgotPassword = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      className="transition duration-1000 ease-in-out"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Link
            to={"/login"}
            className={`mb-5 flex items-center hover:text-[#22C35E] hover:transition hover:duration-300 hover:ease-in-out ${useColorModeValue(
              "text-gray-600",
              "text-gray-400"
            )} text-sm`}
          >
            <BsArrowRightShort className="w-5 h-5" />
            بازگشت
          </Link>
          <Flex className="items-center w-full justify-between mb-5">
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              fontFamily="casablanca"
            >
              بازیابی رمز عبور
            </Heading>
            <DarkModeButton
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          </Flex>
          <FormControl isRequired mb={4}>
            <FormLabel>ایمیل</FormLabel>
            <InputGroup>
              <InputRightElement>
                <Icon as={AiOutlineMail} boxSize={5} color="gray.600" />
              </InputRightElement>
              <Input
                pr="2.2rem"
                className={`${useColorModeValue(
                  "text-gray-600",
                  "text-gray-300"
                )} placeholder:text-gray-500 text-sm placeholder:text-sm placeholder:font-casablanca`}
                _focusVisible={{
                  boxShadow: "0 0 1px #22c35e",
                  border: "1px solid #22c35e",
                }}
                type={"email"}
                // onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="لطفا ایمیل خود را وارد نمایید"
              />
            </InputGroup>
            <FormHelperText fontSize={{ base: "8px", md: "10px" }}>
              ایمیل خود را جهت بازیابی رمز عبور وارد نمایید.
            </FormHelperText>
          </FormControl>
          <Btn title="ارسال کد" />
          <section className="flex items-center justify-center w-full gap-5 my-5">
            <Box
              className={`w-full h-0.5 ${useColorModeValue(
                "bg-gray-300",
                "bg-gray-600"
              )}`}
            />
            یا
            <Box
              className={`w-full h-0.5 ${useColorModeValue(
                "bg-gray-300",
                "bg-gray-600"
              )}`}
            />
          </section>
          <OutlineBtn
            title="ورود به پنل کاربری"
            btnFn={() => navigate("/login")}
          />
        </Stack>
      </Flex>
      <Flex flex={1.5}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={useColorModeValue(LoginImage, DarkLoginImage)}
        />
      </Flex>
    </Stack>
  );
};

export default ForgotPassword;
