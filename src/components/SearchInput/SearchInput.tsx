import React, { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
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
      <InputGroup size="md" maxW="md">
        <InputLeftElement pointerEvents="none">
          <SearchIcon
            color="#ffffff"
            background="#ECA500"
            p={2}
            m={1}
            borderRadius="25px"
            w="1xl"
            h="1xl"
          />
        </InputLeftElement>
        <Input
          type="text"
          py={2}
          placeholder="Explore events around the world"
          value={searchQuery}
          onChange={handleInputChange}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          width="100%"
          borderRadius="full"
          background="white"
          _placeholder={{ color: "gray.600" }}
          color="black"
          id="events"
          outline="none"
          _focus={{ border: "2px solid #ECA500" }}
          _focusVisible={{}}
          list={showOptions ? "options" : undefined} // Show the datalist options only when showOptions is true
        />
        {/* <datalist id="options">
          <option value="Option 1" />
          <option value="Option 2" />
          <option value="Option 3" />
        </datalist> */}
      </InputGroup>
    </Box>
  );
};

export default SearchInput;