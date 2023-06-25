import { Flex, Box, Button, Link, Spacer, Image } from "@chakra-ui/react";
import _logo from "../../assets/logo/eventra.png";
import DropdownMenu from "../DropdownButton/DropdownButton";

const Header: React.FC = () => {
  const handleItemClick = (item: string) => {
    console.log(`${item} clicked`);
    // Perform desired action based on the clicked item
  };
  return (
    <Box mx={5} py={1}>
      <Flex>
        <Flex>
          <Image boxSize="50px" objectFit="cover" src={_logo} alt="logo" />
          <Link href="/" fontSize="3xl" textDecoration="none">
            Eventra
          </Link>
        </Flex>
        <Spacer />
        {/* <Flex>
          <DropdownMenu
            buttonLabel="Organize"
            menuItems={[
              { label: "Create Event", href: "/create-event" },
              { label: "Pricing", href: "/pricing" },
              { label: "Resources", href: "/resources" },
              { label: "Contact Sales", href: "/contact" },
            ]}
            onItemClick={handleItemClick}
          />
          <DropdownMenu
            buttonLabel="Help"
            menuItems={[
              { label: 'FAQ', href: '/faq' },
              { label: 'Support', href: '/support' },
              { label: 'Contact Us', href: '/contact-us' },
            ]}
            onItemClick={handleItemClick}
          /> */}
        <Flex mx={2} alignItems="center" justifyContent="center">
          <Box>
            <Button
              style={{
                background: "#ECA500",
                color: "#ffffff",
                padding: "",
                margin: "0 10px",
              }}
            >
              Create Event
            </Button>
          </Box>
          
          <Box mx={6} py={4}>
            <Link fontWeight="500" textDecoration="none">Login</Link>
          </Box>
          <Box mx={6} py={4}>
            <Link fontWeight="500" textDecoration="none">Signup</Link>
          </Box>
          <Box mx={6} py={4}>
            <Link fontWeight="500" textDecoration="none">Contact Us</Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
