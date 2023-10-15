import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

const DarkModeButton = ({ colorMode, toggleColorMode, scrolled }) => {
  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      variant="unstyled"
      display="flex"
      size="xs"
      ml={{ base: 0, md: 4 }}
    >
      {colorMode === "light" ? (
        <Icon
          as={BsMoonStarsFill}
          color={scrolled ? "green.400" : "#054949"}
          boxSize={{ base: 3, md: 6 }}
        />
      ) : (
        <Icon as={BsSun} boxSize={{ base: 3, md: 6 }} color={"#fbd38d"} />
      )}
    </Button>
  );
};

export default DarkModeButton;
