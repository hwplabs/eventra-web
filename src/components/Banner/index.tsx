import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Flex,
  useDisclosure,
  List,
  ListItem,
  Image,
  Link,
} from "@chakra-ui/react";

import _banner from "../../assets/images/banner-img.jpg";
import _wedding from "../../assets/images/wedding.jpg";
import _sport from "../../assets/images/reunion.jpg";
import _oops from "../../assets/images/oops.png"

import SearchInput from "../SearchInput/SearchInput";
import SearchCard from "../SearchInput/SearchCard";

import "./style.css";
import SearchCardContent from "../SearchInput/SearchCardContent";
import { TimeIcon } from "@chakra-ui/icons";

const images = [_banner, _wedding, _sport];

const Banner: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchOptions, setSearchOptions] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
  });

  const currentImage = images[currentImageIndex];

  const handleSearch = (query: string) => {
    console.log(`Searching for ${query}`);
    setIsPopupOpen(true);
    // Simulated API call or data retrieval
    const options = getSearchOptionsFromAPI(query);
    setSearchOptions(options);
    setShowOptions(true);
  };

  const handleInputClick = () => {
    if (!isPopupOpen) {
      setIsPopupOpen(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchInput(input);

    // Show options only when there is input
    setShowOptions(input !== "");

    // Reset selected option when input changes
    setSelectedOption("");

    // Simulated API call or data retrieval
    const options = getSearchOptionsFromAPI(input);
    setSearchOptions(options);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setSearchInput(option);
    setShowOptions(false);
  };

  const handleOverlayClick = () => {
    setIsPopupOpen(false);
  };

  // Simulated function to fetch search options from API or data source
  const getSearchOptionsFromAPI = (query: string): string[] => {
    // Simulated search options
    const options = [
      "Outdoor",
      "Fintech",
      "Evolution",
      "Technology",
      "April Fool",
      "Great",
      "Church Anniversary",
      "Inagauration",
      "House Warminng",
      "Anniversary",
      "Birthday Party",
      "Hilda Bacci",
      "Hide and Seek",
      "Naming",
    ];
    return options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <>
      <Box
        backgroundImage={`url(${currentImage})`}
        objectFit="cover"
        backgroundPosition="center"
        backgroundSize="cover"
        width="100%"
        height="50vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        {isPopupOpen && (
          <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            zIndex={9999}
            backdropFilter="blur(10px)"
            onClick={handleOverlayClick}
            overflow="hidden"
          />
        )}

        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          zIndex="9999"
        >
          {isPopupOpen ? (
            <Text color="#ffffff" fontSize="3xl" my={4}>
              Search for events that suits your interest
            </Text>
          ) : (
            <Text color="#ffffff" fontSize="3xl">
              Discover events that shake the town before you're told about it
            </Text>
          )}

          <SearchInput
            onSearch={handleSearch}
            onClick={handleInputClick}
            onChange={handleInputChange}
            isOpen={isPopupOpen}
            // position="fixed"
            // top={20}
            // left={20}
            // zIndex={9999}
          />
          {isPopupOpen && (
            <Box
              width="700px"
              height="300px"
              maxHeight="300px"
              bg="white"
              mt={2}
              overflowY="auto"
            >
              {showOptions ? (
                <List className="custom-datalist" background="" height="100%">
                  {searchOptions.length > 0 ? (
                    searchOptions.map((option) => (
                      <Flex
                        alignItems="center"
                        justifyContent="start"
                        border="1px solid"
                        borderColor="gray.100"
                        px={2}
                        // my="2"
                        width="100%"
                        
                        _hover={{ background: "gray.200" }}
                      >
                        <TimeIcon />
                        <ListItem
                          key={option}
                          onClick={() => handleOptionSelect(option)}
                          className={selectedOption === option ? "active" : ""}
                          p={4}
                          cursor="pointer"
                        >
                          {option}
                        </ListItem>
                      </Flex>
                    ))
                  ) : (
                    <Flex alignItems="center" justifyContent="center" flexDirection="column">
                      <Image src={_oops} alt="oops" my={2} />
                      <ListItem className="not-related-search" fontSize="3xl" color="#000">
                        No related search :(
                      </ListItem>
                    </Flex>
                  )}
                </List>
              ) : (
                <SearchCardContent
                  searchInput={searchInput}
                  handleOptionSelect={handleOptionSelect}
                />
              )}
            </Box>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Banner;
