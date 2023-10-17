import { Box } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <Box
      maxW="7xl"
      mx={"auto"}
      className="flex-col items-center justify-center gap-8 max-sm:px-5 mb-5"
      my={16}
    >
      پروفایل یک مسیر حفاظت شده است و فقط در صورتی که لاگین باشید قادر به مشاهده
      این صفحه هستید!
    </Box>
  );
};

export default Profile;
