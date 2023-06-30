import {
  Box,
  FormLabel,
  Grid,
  Image,
  Input,
  Text,
  Flex,
  Button,
  FormControl,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaLock,
  FaFacebook,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

import vip from "../assets/images/vip.jpg";
import _logo from "../assets/logo/eventra.png";

export const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    showPassword,
    handleEmailBlur,
    handlePasswordBlur,
    handleShowPasswordClick,
    handleFormSubmit,
    isFormValid,
  } = useLogin();

  const handleGoogleLogin = () => {
    // Redirect the user to the Google login page
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email profile";
  };

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
        <Box p={6} overflow="auto">
          <Flex alignItems="center" justifyContent="space-between">
            <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
              <Image boxSize="50px" objectFit="cover" src={_logo} alt="logo" />
              <Text fontSize="2xl">Eventra</Text>
            </NavLink>
            <Box>
              <Text>
                Not a member?
                <NavLink
                  to="/signup"
                  style={{
                    backgroundColor: "#E7E7E9",
                    padding: "10px",
                    borderRadius: "10px",
                    margin: "0 10px",
                  }}
                >
                  Sign up
                </NavLink>
              </Text>
            </Box>
          </Flex>
          <Box
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Box>
              <Text fontSize="2em" py={2}>
                Login to your Account
              </Text>
            </Box>
            <Flex>
              <NavLink
                to="/facebook"
                style={{
                  padding: "10px",
                  margin: "0 10px",
                  border: "1px solid #ECA500",
                  borderColor: "#ECA500",
                  borderRadius: "25px",
                }}
              >
                <FaFacebook />
              </NavLink>
              <NavLink
                to="/linkedin"
                style={{
                  padding: "10px",
                  margin: "0 10px",
                  border: "1px solid #ECA500",
                  borderColor: "#ECA500",
                  borderRadius: "25px",
                }}
              >
                <FaLinkedin />
              </NavLink>
              <NavLink
                to="/google"
                style={{
                  padding: "10px",
                  margin: "0 10px",
                  border: "1px solid #ECA500",
                  borderColor: "#ECA500",
                  borderRadius: "25px",
                }}
                onClick={handleGoogleLogin}
              >
                <FaGoogle />
              </NavLink>
            </Flex>
            <Text margin={2}>Or login using your email</Text>
            <form onSubmit={handleFormSubmit} style={{ width: "60%" }}>
              <FormControl mx={2} my={2}>
                <FormLabel htmlFor="email">Email </FormLabel>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <SiGmail color="#ECA500" style={{ margin: "0 10px" }} />
                  <Input
                    type="email"
                    placeholder="Enter your email addresss"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                    border="none"
                    _focusVisible={{}}
                    borderLeft="1px solid"
                    borderColor="gray.200"
                    borderRadius="0"
                  />
                </Box>
                {emailError && (
                  <Box py={1} color="#ECA500">
                    {emailError}
                  </Box>
                )}
              </FormControl>

              <FormControl mx={2} my={2}>
                <FormLabel htmlFor="password">Password </FormLabel>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <FaLock color="#ECA500" style={{ margin: "0 10px" }} />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                    border="none"
                    _focusVisible={{}}
                    borderLeft="1px solid"
                    borderColor="gray.200"
                    borderRadius="0"
                  />
                  <Box onClick={handleShowPasswordClick}>
                    {showPassword ? (
                      <FaEyeSlash style={{ margin: "0 10px" }} />
                    ) : (
                      <FaEye style={{ margin: "0 10px" }} />
                    )}
                  </Box>
                </Box>
                {passwordError && (
                  <Box py={1} color="#ECA500">
                    {passwordError}
                  </Box>
                )}
              </FormControl>

              <Box mx={2} my={2}>
                <Button
                  background="#ECA500"
                  color="#ffffff"
                  bg={isFormValid() ? "#ECA500" : "gray.200"}
                  disabled={!isFormValid()}
                  type="submit"
                >
                  Login
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
        
      </Grid>
    </Box>
  );
};
