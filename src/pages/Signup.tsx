import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  Text,
  Flex,
  Checkbox,
  CheckboxGroup,
  Button
} from "@chakra-ui/react";
import { FaLock, FaUser, FaUserTie } from "react-icons/fa";
import { SiGmail } from "react-icons/si"
import vip from "../assets/images/vip.jpg";
import { Form, NavLink } from "react-router-dom";

export const Signup = () => {
  return (
    <Box width="100%">
      <Grid templateColumns="35% 65%" height="100vh">
        <Box
          backgroundImage={vip}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          {/* <Image src={vip} alt="Display image" width="100%" height="100vh" /> */}
        </Box>
        <Box p={8}>
          <Box display="flex" alignItems="end" justifyContent="end">
            <Text>
              Already a member?{" "}
              <NavLink
                to="/login"
                style={{
                  backgroundColor: "#E7E7E9",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Sign in
              </NavLink>
            </Text>
          </Box>
          <Box
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="start"
            flexDirection="column"
          >
            <Box>
              <Text fontSize="2em" py={4}>
                Create an account
              </Text>
            </Box>
            <FormControl style={{ width: "60%" }}>
              <Flex my={4} mx={2} gap={8}>
              <Box>
                <FormLabel htmlFor="firstName">First Name: </FormLabel>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <FaUserTie color="#ECA500" style={{ margin: "0 10px"}} />
                  <Input type="text" placeholder="" id="firstName" name="firstName" border="none" _focusVisible={{}} borderLeft="1px solid" borderColor="gray.200" borderRadius="0" />
                </Box>
              </Box>
              <Box>
                <FormLabel htmlFor="lastName">Last Name: </FormLabel>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <FaUserTie color="#ECA500" style={{ margin: "0 10px"}} />
                  <Input type="text" placeholder="" id="lastName" name="lastName" border="none" _focusVisible={{}} borderLeft="1px solid" borderColor="gray.200" borderRadius="0" />
                </Box>
              </Box>
              </Flex>
              
              <Box mx={2} my={4}>
                <FormLabel htmlFor="email">Email </FormLabel>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <SiGmail color="#ECA500" style={{ margin: "0 10px"}} />
                  <Input type="email" placeholder="" id="email" name="email" border="none" _focusVisible={{}} borderLeft="1px solid" borderColor="gray.200" borderRadius="0" />
                </Box>
              </Box>

              <Box mx={2} my={4}>
                <FormLabel htmlFor="password">Password </FormLabel>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <FaLock color="#ECA500" style={{ margin: "0 10px"}} />
                  <Input type="password" placeholder="Enter your password" name="password" id="password" border="none" _focusVisible={{}} borderLeft="1px solid" borderColor="gray.200" borderRadius="0" />
                </Box>
              </Box>

              <Box mx={2} my={4}>
                <FormLabel htmlFor="confirmPassword">Confirm Password </FormLabel>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <FaLock color="#ECA500" style={{ margin: "0 10px"}} />
                  <Input type="password" placeholder="Re-Enter your password" name="confirmPassword" id="confirmPassword" border="none" _focusVisible={{}} borderLeft="1px solid" borderColor="gray.200" borderRadius="0" />
                </Box>
              </Box>

              <Box mx={2} my={4}>
                <Checkbox colorScheme="yellow">Creating an account means you’re okay with our <NavLink to="terms" style={{ color: "#ECA500"}}>Terms of Service</NavLink>, <NavLink to="privacy" style={{ color: "#ECA500"}}>Privacy Policy</NavLink>, and our default <NavLink to="notifications" style={{ color: "#ECA500"}}>Notification Settings.</NavLink></Checkbox>
              </Box>

              <Box mx={2} my={4}>
                <Button background="#ECA500">Create Account</Button>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
