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
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import LoginImage from "../assets/login-image.jpg";
import DarkLoginImage from "../assets/dark-login-image.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Register = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

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
      setLoading(true);
      setError(false);
      const res = await fetch("/api/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      await res.json();

      setLoading(false);
      navigate("/login");
      toast.success("حساب کاربری شما با موفقیت ساخته شد.");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
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
                عضویت در سایت
              </Heading>
              <DarkModeButton
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
                // m={20}
              />
            </Flex>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>نام</FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <Icon as={AiOutlineUser} boxSize={5} color="gray.600" />
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
                    type={"text"}
                    placeholder="لطفا نام خود را وارد نمایید"
                    id="name"
                    value={name}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired my={4}>
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
              <FormControl isRequired>
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
                    id="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="لطفا گذرواژه خود را وارد نمایید"
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
              <Btn
                title={loading ? "عضویت در سایت ..." : "عضویت در سایت"}
                type="submit"
                w="full"
                mt={5}
              />
            </form>
            {error && (
              <p
                className="text-red-600 mt-1 bg-red-200 border-r-4 border-r-red-600
         p-3 rounded"
              >
                خطایی رخ داده است!
              </p>
            )}
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
      </Stack>{" "}
    </>
  );
};

export default Register;
