/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Btn = ({ title, btnFn, hasIcon, Icon, ...rest }) => {
  return (
    <Button
      display="flex"
      alignItems="center"
      _hover={{ opacity: "90%" }}
      className="hover:transition hover:duration-300 ease-in-out"
      variant="unstyled"
      boxShadow="#22c35e 0 0 16px -7px !important"
      color="#f5f5f5"
      bgColor={`#22c35e`}
      p={{ base: "22px", md: "26px" }}
      fontSize={{ base: "18px", md: "24px" }}
      fontFamily="Casablanca"
      rounded="xl"
      onClick={btnFn}
      rightIcon={hasIcon && Icon}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default Btn;
