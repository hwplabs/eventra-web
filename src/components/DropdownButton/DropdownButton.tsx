import { Button, Box, Link } from "@chakra-ui/react";
import { useState } from "react";

import DropdownMenuProps from "./IDropdownButton";

import { ChevronDownIcon } from "@chakra-ui/icons"

const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonLabel, menuItems, onItemClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box display="inline-block" position="relative">
      <Button
        py={7}
        backgroundColor="white"
        mx={2}
        borderRadius={0}
        border="none"
        fontWeight="500"
        fontSize="1xl"
        _hover={{ background: "gray.100"}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonLabel}
        <ChevronDownIcon mx={1} />
      </Button>
      <Box
        position="absolute"
        top="100%"
        left="0"
        width="300px"
        background="white"
        boxShadow="md"
        zIndex='999999'
        display={isHovered ? 'block' : 'none'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {menuItems.map((item, index) => (
          <Link
            display="block"
            key={index}
            pr={20}
            pl={10}
            py={4}
            cursor="pointer"
            textDecoration="none"
            onClick={() => onItemClick(item.label)}
            href={item.href}
            isExternal
            _hover={{ background: 'gray.200' }} // Add background on hover
          >
            {item.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default DropdownMenu;