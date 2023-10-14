import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
