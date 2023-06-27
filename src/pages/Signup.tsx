import { Box, Grid, Flex, Input, Image } from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";

import vip from "../assets/images/vip.jpg";

export const Signup = () => {
  return (
    <Box height="100vh" width="100%">
      <Grid templateColumns="repeat(2, 1fr)">
        <Box width="100%" height="100vh">
          <Image src={vip} alt="Display image"/>
        </Box>
        <Box width="100%">
          <Box display="flex" border="1px solid" borderColor="gray.200">
            <FaUser />
            <Input type="text" placeholder="Full name" border="none" />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
