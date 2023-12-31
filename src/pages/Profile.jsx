import {
  Avatar,
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Btn } from "../components";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import toast from "react-hot-toast";
import bcrypt from "bcryptjs";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { loading } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: currentUser?.user?.name || "",
    email: currentUser?.user?.email || "",
    oldPassword: "",
    newPassword: "",
  });

  const { name, email, oldPassword, newPassword } = formData;

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
      const res = await fetch("/api/api/v1/auth/changePassword", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${currentUser}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
        }),
      });
      await res.json();
      toast.success("گذرواژه با موفقیت تغییر کرد.");
      setFormData({
        oldPassword: "",
        newPassword: "",
      });
    } catch (error) {
      toast.error("خطا در تغییر گذرواژه");
    }
  };
  return (
    <Box
      maxW="7xl"
      mx={"auto"}
      className="flex-col items-center justify-center gap-8 max-sm:px-5 mb-5"
      my={16}
    >
      <Flex
        bgColor={useColorModeValue("gray.100", "gray.800")}
        className="justify-center items-center flex-col gap-6 rounded-xl p-10"
      >
        <Heading
          fontFamily="casablanca"
          size={{ base: "md", md: "lg" }}
          textAlign="center"
        >
          پروفایل
        </Heading>
        <Avatar
          src={currentUser.profilePicture}
          alt={`${currentUser.username} Profile`}
          size={{ base: "lg", md: "xl" }}
        />
        <form onSubmit={handleSubmit} className="w-full">
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
                fontSize={{ base: "13px", md: "16px" }}
                placeholder="لطفا نام خود را وارد نمایید"
                id="name"
                value={name}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired my={6}>
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
                )} placeholder:text-gray-500 text-sm max-sm:placeholder:text-[10px] placeholder:font-casablanca`}
                _focusVisible={{
                  boxShadow: "0 0 1px #22c35e",
                  border: "1px solid #22c35e",
                }}
                type={"email"}
                fontSize={{ base: "13px", md: "16px" }}
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="لطفا ایمیل خود را وارد نمایید"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={{ base: "12px", md: "16px" }}>
              گذرواژه فعلی
            </FormLabel>
            <InputGroup>
              <InputRightElement>
                <Icon as={AiOutlineMail} boxSize={5} color="gray.600" />
              </InputRightElement>
              <Input
                pr="2.2rem"
                className={`${useColorModeValue(
                  "text-gray-600",
                  "text-gray-300"
                )} placeholder:text-gray-500 text-sm max-sm:placeholder:text-[10px] placeholder:font-casablanca`}
                _focusVisible={{
                  boxShadow: "0 0 1px #22c35e",
                  border: "1px solid #22c35e",
                }}
                type={showOldPassword ? "text" : "password"}
                id="oldPassword"
                fontSize={{ base: "13px", md: "16px" }}
                value={oldPassword}
                onChange={handleChange}
                placeholder="لطفا گذرواژه فعلی خود را وارد نمایید"
              />

              <InputLeftElement>
                <Icon
                  as={showOldPassword ? AiFillEye : AiFillEyeInvisible}
                  boxSize={6}
                  color="gray.600"
                  cursor="pointer"
                  onClick={() => setShowOldPassword((prevState) => !prevState)}
                />
              </InputLeftElement>
            </InputGroup>
            <FormHelperText fontSize={{ base: "9px", md: "11px" }}>
              اگر قصد تغییر ندارید خالی بگذارید
            </FormHelperText>
          </FormControl>
          <FormControl isRequired mt={6}>
            <FormLabel fontSize={{ base: "12px", md: "16px" }}>
              گذرواژه جدید
            </FormLabel>
            <InputGroup>
              <InputRightElement>
                <Icon as={AiOutlineMail} boxSize={5} color="gray.600" />
              </InputRightElement>
              <Input
                pr="2.2rem"
                className={`${useColorModeValue(
                  "text-gray-600",
                  "text-gray-300"
                )} placeholder:text-gray-500 text-sm max-sm:placeholder:text-[10px] placeholder:font-casablanca`}
                _focusVisible={{
                  boxShadow: "0 0 1px #22c35e",
                  border: "1px solid #22c35e",
                }}
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                fontSize={{ base: "13px", md: "16px" }}
                value={newPassword}
                onChange={handleChange}
                placeholder="لطفا گذرواژه جدید خود را وارد نمایید"
              />

              <InputLeftElement>
                <Icon
                  as={showNewPassword ? AiFillEye : AiFillEyeInvisible}
                  boxSize={6}
                  color="gray.600"
                  cursor="pointer"
                  onClick={() => setShowNewPassword((prevState) => !prevState)}
                />
              </InputLeftElement>
            </InputGroup>
            <FormHelperText fontSize={{ base: "9px", md: "11px" }}>
              اگر قصد تغییر ندارید خالی بگذارید
            </FormHelperText>
          </FormControl>
          <Btn
            title={loading ? "در حال بروزرسانی ..." : "بروزرسانی"}
            type="submit"
            w={{ base: "full", md: "fit-content" }}
            mt={10}
          />
        </form>
      </Flex>
      <Flex
        bgColor={useColorModeValue("gray.100", "gray.800")}
        mt={6}
        className="justify-right items-start flex-col gap-6 rounded-xl p-10"
      >
        <Heading fontFamily="casablanca" size="lg">
          لیست علاقه مندی‌ ها
        </Heading>
      </Flex>
    </Box>
  );
};

export default Profile;
