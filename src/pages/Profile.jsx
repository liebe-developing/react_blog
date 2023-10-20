import {
  Avatar,
  Box,
  Flex,
  FormControl,
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
    oldPassword: "",
    newPassword: "",
  });

  const { oldPassword, newPassword } = formData;

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
        maxW="7xl"
        mx="auto"
      >
        <Heading fontFamily="casablanca" size="lg" textAlign="center">
          پروفایل
        </Heading>
        <Avatar
          src={currentUser.profilePicture}
          alt={`${currentUser.username} Profile`}
          size="xl"
        />
        <form onSubmit={handleSubmit} className="w-full">
          <FormControl isRequired>
            <FormLabel>گذرواژه فعلی</FormLabel>
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
                type={showOldPassword ? "text" : "password"}
                id="oldPassword"
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
          </FormControl>
          <FormControl isRequired mt={5}>
            <FormLabel>گذرواژه جدید</FormLabel>
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
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
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
          </FormControl>
          <Btn
            title={loading ? "ارسال ..." : "تغییر گذرواژه"}
            type="submit"
            w={{ base: "full", md: "fit-content" }}
            mt={10}
          />
        </form>

        <Heading fontFamily="casablanca" size="lg" textAlign="center" mt={20}>
          لیست علاقه مندی‌ ها
        </Heading>
      </Flex>
    </Box>
  );
};

export default Profile;
