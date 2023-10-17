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
  InputLeftElement,
} from "@chakra-ui/react";
import DarkModeButton from "../components/DarkModeButton";
import { Btn, OutlineBtn } from "../components";
import { IoIosLogIn } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import LoginImage from "../assets/login-image.jpg";
import DarkLoginImage from "../assets/dark-login-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import toast from "react-hot-toast";

const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());

      const res = await fetch("/api/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.error === "The provided credentials are incorrect") {
        dispatch(signInFailure(data));
        toast.error("ایمیل یا گذرواژه اشتباه می‌باشد.");
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      className="transition duration-1000 ease-in-out"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Link
            to={"/"}
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
              ورود به سایت
            </Heading>
            <DarkModeButton
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
              // m={20}
            />
          </Flex>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
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
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="لطفا ایمیل خود را وارد نمایید"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired my={4}>
              <FormLabel>گذرواژه</FormLabel>
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
                  type={showPassword ? "text" : "password"}
                  placeholder="لطفا گذرواژه خود را وارد نمایید"
                  id="password"
                  value={password}
                  onChange={handleChange}
                />
                <InputLeftElement>
                  <Icon
                    as={showPassword ? AiFillEye : AiFillEyeInvisible}
                    boxSize={6}
                    color="gray.600"
                    cursor="pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                </InputLeftElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link to="/forgot-password">
                  <Text
                    color={"green.500"}
                    fontSize={{ base: "11px", md: "13px" }}
                  >
                    آیا رمز عبور خود را فراموش کرده اید؟
                  </Text>
                </Link>
              </Stack>
              <Btn
                isDisabled={loading}
                title={loading ? "ورود..." : "ورود"}
                hasIcon
                Icon={<IoIosLogIn />}
                type="submit"
              />
            </Stack>
          </form>
          {/* {error && (
            <p
              className="text-red-600 mt-5 bg-red-200 border-r-4 border-r-red-600
         p-3 rounded"
            >
              ایمیل یا گذرواژه اشتباه می‌باشد.
            </p>
          )} */}
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
          <OutlineBtn title="ثبت نام" btnFn={() => navigate("/register")} />
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

export default Login;
