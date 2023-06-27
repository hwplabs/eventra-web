import React, { useState } from "react";
import {
  Input,
  Box,
  Flex
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchInputProps from "./ISearchInput";

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, onClick, onChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchQuery(input);

    // Show options only when there is input
    setShowOptions(input !== "");

    if (onChange) {
      onChange(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      position="relative"
      width="700px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex alignItems="center" justifyContent="center" border="1px solid" borderColor="#ECA500" width="100%" background="white">
        <Box pointerEvents="none" mx={2} background="#ECA500" borderRadius="100%" py={2} px={3}>
          <SearchIcon
            color="#ffffff"
            // background="#ECA500"
            // p={2}
            
            // w="1xl"
            // h="1xl"
          />
        </Box>
        <Input
          type="search"
          height={14}
          placeholder="Explore events around the world"
          value={searchQuery}
          onChange={handleInputChange}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          width="100%"
          borderRadius="full"
          border="none"
          // background="white"
          _placeholder={{ color: "gray.600" }}
          color="black"
          id="events"
          outline="none"
          // _focus={{ border: "2px solid #ECA500" }}
          _focusVisible={{}}
          list={showOptions ? "options" : undefined} // Show the datalist options only when showOptions is true
        />
        {/* <datalist id="options">
          <option value="Option 1" />
          <option value="Option 2" />
          <option value="Option 3" />
        </datalist> */}
      </Flex>
    </Box>
  );
};

export default SearchInput;