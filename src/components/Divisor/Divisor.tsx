import { Box, Text, Flex } from "@chakra-ui/react";

const Divisor = () => {
  return (
    <Box background="#ffecc6">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        py="8"
      >
        <Text fontSize="50px" pt="4">
          Not Interested?
        </Text>
        <Text fontSize="20px">Check out some of our featured events</Text>
      </Flex>
    </Box>
  );
};

export default Divisor;
