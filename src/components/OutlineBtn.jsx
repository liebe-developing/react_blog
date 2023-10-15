import { Button } from "@chakra-ui/react";

const OutlineBtn = ({ title, Icon, btnFn, ...rest }) => {
  return (
    <Button
      leftIcon={Icon}
      variant="outline"
      bg="transparent"
      border="1px solid #22c35e"
      color="#22c35e"
      display="flex"
      colorScheme="whatsapp"
      fontFamily="Casablanca"
      rounded="xl"
      p={{ base: "22px", md: "26px" }}
      fontSize={{ base: "18px", md: "24px" }}
      className="max-sm:w-full items-center"
      onClick={btnFn}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default OutlineBtn;
