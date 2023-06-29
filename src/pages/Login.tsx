import {
    Box,
    FormLabel,
    Grid,
    Image,
    Input,
    Text,
    Flex,
    Checkbox,
    CheckboxGroup,
    Button,
    FormControl,
  } from "@chakra-ui/react";
  import {
    FaLinkedin,
    FaLock,
    FaFacebook,
    FaGoogle,
    FaUserTie,
  } from "react-icons/fa";
  import { SiGmail } from "react-icons/si";
  import vip from "../assets/images/vip.jpg";
  import { Form, NavLink } from "react-router-dom";
  
  import { useSignup } from "../hooks/useSignup";
  
  export const Login = () => {
    const {
      email,
      setEmail,
      firstName,
      lastName,
      setFirstName,
      setLastName,
      password,
      confirmPassword,
      setPassword,
      setConfirmPassword,
      firstNameError,
      lastNameError,
      setFirstNameError,
      setLastNameError,
      emailError,
      setEmailError,
      passwordError,
      confirmPasswordError,
      setPasswordError,
      setConfirmPasswordError,
      showPassword,
      setShowPassword,
      isChecked,
      setIsChecked,
      handleFirstNameBlur,
      handleLastNameBlur,
      handleEmailBlur,
      handlePasswordBlur,
      handleConfirmPasswordBlur,
      handleShowPasswordClick,
      handleCheckboxChange,
      handleFormSubmit,
      isFormValid,
    } = useSignup();
  
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
            <Box display="flex" alignItems="end" justifyContent="end">
              <Text>
                Already a member?
                <NavLink
                  to="/login"
                  style={{
                    backgroundColor: "#E7E7E9",
                    padding: "10px",
                    borderRadius: "10px",
                    margin: "0 10px",
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
                <Text fontSize="2em" py={2}>
                  Create an Account
                </Text>
              </Box>
              <Flex>
                <NavLink to="/facebook" style={{ padding: "10px", margin: "0 10px",border: "1px solid #ECA500", borderColor: "#ECA500", borderRadius: "25px"}}><FaFacebook /></NavLink>
                <NavLink to="/facebook" style={{ padding: "10px", margin: "0 10px",border: "1px solid #ECA500", borderColor: "#ECA500", borderRadius: "25px"}}><FaLinkedin /></NavLink>
                <NavLink to="/facebook" style={{ padding: "10px", margin: "0 10px",border: "1px solid #ECA500", borderColor: "#ECA500", borderRadius: "25px"}}><FaGoogle /></NavLink>
              </Flex>
              <Text margin={2}>Or create an account using your email</Text>
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
                      placeholder=""
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
                      type="password"
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
  