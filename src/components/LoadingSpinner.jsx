import { Box, Spinner, useColorModeValue } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      my={20}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor={useColorModeValue("gray.200", "transparent")}
        color="#5fd0c2"
        size="xl"
      />
    </Box>
  );
};

export default LoadingSpinner;
