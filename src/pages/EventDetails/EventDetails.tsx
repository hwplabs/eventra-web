import {
  Text,
  Link,
  Box,
  Grid,
  Flex,
  Button,
  Image,
  Icon,
} from "@chakra-ui/react";

import _wedding from "../../assets/images/wedding.jpg";
import { CalendarIcon } from "@chakra-ui/icons";
import { MdLocationCity, MdLocationPin } from "react-icons/md";
import { useState } from "react";
import { GiBoxTrap } from "react-icons/gi";

const EventDetails = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <Box>
      <Box background="gray.100" p={4}>
        <Image
          src={_wedding}
          alt="wedding"
          height="60vh"
          width="100%"
          objectFit="cover"
        />
      </Box>

      <Box m={8}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <Box>
              <Text fontSize="20px">Jan 4, 2023</Text>
              <Text fontSize="50px" color="#1E0A3C" fontWeight="bold" p="">
                Wedding Anniversary
              </Text>
            </Box>

            <Flex
              alignItems="center"
              justifyContent="space-between"
              border="1px solid"
              borderColor="gray.200"
              p={4}
              my={4}
            >
              <Flex flexDirection={"column"}>
                <Text fontSize="2xl">By Oladimeji</Text>
                <Text>20.9K followers</Text>
              </Flex>
              <Button
                background="#ECA500"
                color="#fff"
                _hover={{ background: "" }}
              >
                Follow
              </Button>
            </Flex>
            <Grid gap={4} gridTemplateColumns="repeat(2, 1fr)" m={4}>
              <Box>
                <Text fontSize="20px" color="gray.500">
                  Date & Time
                </Text>
                <Flex alignItems="center" justifyContent="start">
                  <CalendarIcon color="#ECA500" />
                  <Text px={2} py={2}>
                    Jan 4, 2023
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text fontSize="20px" color="gray.500">
                  Location
                </Text>
                <Flex alignItems="start" justifyContent="start">
                  <MdLocationPin color="#ECA500" size="50px" />
                  <Text p={2}>
                    Location Federal Palace Hotel Balmoral Convention Centre,
                    Federal Palace Hotel Victoria Island, Lagos 100001
                  </Text>
                </Flex>
              </Box>
            </Grid>
            <Box my={4}>
              <Flex flexWrap="wrap">
                <Box
                  background="gray.100"
                  p={4}
                  m={2}
                  fontSize="12px"
                  fontWeight="bold"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="25px"
                  color="gray.600"
                >
                  Nigeria Events
                </Box>
                <Box
                  background="gray.100"
                  p={4}
                  m={2}
                  fontSize="12px"
                  fontWeight="bold"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="25px"
                  color="gray.600"
                >
                  Lagos Events
                </Box>
                <Box
                  background="gray.100"
                  p={4}
                  m={2}
                  fontSize="12px"
                  fontWeight="bold"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="25px"
                  color="gray.600"
                >
                  Engagement
                </Box>
                <Box
                  background="gray.100"
                  p={4}
                  m={2}
                  fontSize="12px"
                  fontWeight="bold"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="25px"
                  color="gray.600"
                >
                  Tech Events
                </Box>
                <Box
                  background="gray.100"
                  p={4}
                  m={2}
                  fontSize="12px"
                  fontWeight="bold"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="25px"
                  color="gray.600"
                >
                  Eventful
                </Box>
                <Box
                  background="gray.100"
                  p={4}
                  m={2}
                  fontSize="12px"
                  fontWeight="bold"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="25px"
                  color="gray.600"
                >
                  All day
                </Box>
                <Box
                  background="gray.100"
                  p={4}
                  m={2}
                  fontSize="12px"
                  fontWeight="bold"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="25px"
                  color="gray.600"
                >
                  Nigeria Events
                </Box>
                <Box
                  background="gray.100"
                  p={4}
                  m={2}
                  fontSize="12px"
                  fontWeight="bold"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="25px"
                  color="gray.600"
                >
                  Nigeria Events
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box textAlign="center">
            <Text fontSize="3xl">Buy Ticket</Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              my={8}
            >
              <Flex
                border="1px solid"
                borderColor="gray.200"
                borderRadius="5px"
                width="400px"
                p={4}
                alignItems="center"
                justifyContent="space-between"
              >
                <Text>Ticket Amount</Text>
                <Box>
                  <Button
                    background="#ECA500"
                    mx={4}
                    onClick={handleDecrement}
                    _hover={{ background: "" }}
                  >
                    -
                  </Button>
                  {count}
                  <Button
                    background="#ECA500"
                    mx={4}
                    onClick={handleIncrement}
                    _hover={{ background: "" }}
                  >
                    +
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default EventDetails;
