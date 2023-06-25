import {
  Box,
  Flex,
  Grid,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdChangeCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box background="#1c0f2d" color="#ffffff" p={8}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Box
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          fontSize="2xl"
        >
          <Text my={2}>Use Events</Text>
          <List>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Create events</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Buy Ticket</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Check-in</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Marketplace</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Registration Software</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Company Standards</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">FAQ</Link>
            </ListItem>
          </List>
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          fontSize="2xl"
        >
          <Text my={2}>Product</Text>
          <List>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Create events</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Buy Ticket</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Check-in</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Marketplace</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Registration Software</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Company Standards</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">FAQ</Link>
            </ListItem>
          </List>
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          fontSize="2xl"
        >
          <Text my={2}>Solutions</Text>
          <List>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Create events</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Buy Ticket</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Check-in</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Marketplace</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Eventra Registration Software</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Company Standards</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">FAQ</Link>
            </ListItem>
          </List>
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          fontSize="2xl"
        >
          <Text my={2}>Connect with us</Text>
          <List>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Contact support</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Facebook</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Twitter</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">LinkedIn</Link>
            </ListItem>
            <ListItem
              fontSize="15px"
              py={1}
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">Instagram</Link>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
