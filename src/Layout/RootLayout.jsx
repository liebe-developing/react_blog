import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer, Header, HideNavbar } from "../components";

const RootLayout = () => {
  return (
    <>
      <HideNavbar>
        <Header />
      </HideNavbar>
      <Box>
        <Outlet />
      </Box>
      {/*<HideNavbar>
       <Footer /> 
    </HideNavbar>*/}
    </>
  );
};

export default RootLayout;
