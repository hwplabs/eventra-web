import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { AiOutlineLineChart } from "react-icons/ai";

import _weddingImage from "../../assets/images/wedding.jpg"
import _church from "../../assets/images/church.jpg"
import _concert from "../../assets/images/concert.jpg"
import _sport from "../../assets/images/sport.jpg"
import _reunion from "../../assets/images/reunion.jpg"

interface SearchCardContentProps {
  searchInput: string;
  handleOptionSelect: (option: string) => void;
}

const SearchCardContent: React.FC<SearchCardContentProps> = ({
  searchInput,
  handleOptionSelect,
}) => {
  // You can replace the hard-coded data with dynamic data from an API or other data source
  const recentSearches = ["events", "awareness", "occasion", "funeral", "tech"];
  const trendingSearches = [
    { label: "events", iconColor: "#ECA500" },
    { label: "anniversary", iconColor: "#ECA500" },
    { label: "hangout", iconColor: "#ECA500" },
    { label: "inauguration", iconColor: "#ECA500" },
    { label: "light out", iconColor: "#ECA500" },
  ];
  const trendingTopics = [
    { label: "Wedding", imageSrc: _weddingImage },
    { label: "House party", imageSrc: _church },
    { label: "Concert", imageSrc: _concert },
    { label: "Sport", imageSrc: _sport },
    { label: "Reunion", imageSrc: _reunion },
  ];

  return (
    <Box my={4}>
      <Box pl="4">
        <Text fontSize="20px" p="2" textDecoration="underline" textDecorationColor="#ECA500">
          Recent Searches
        </Text>
        <Flex px="3" py="2" flexWrap="wrap">
          {recentSearches.map((search, index) => (
            <Text
              key={index}
              border="1px solid"
              borderColor="gray.300"
              p={2}
              mx={2}
              _hover={{ background: "gray.200" }}
              cursor="pointer"
              onClick={() => handleOptionSelect(search)}
            >
              {search}
            </Text>
          ))}
        </Flex>
      </Box>
      <Box pl="4">
        <Text fontSize="20px" p="2" textDecoration="underline" textDecorationColor="#ECA500">
          Trending Searches
        </Text>
        <Flex px="3" py="2" flexWrap="wrap" >
          {trendingSearches.map((search, index) => (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="center"
              border="1px solid"
              borderColor="gray.300"
              p="2"
              m={2}
              _hover={{ background: "gray.200" }}
              cursor="pointer"
              onClick={() => handleOptionSelect(search.label)}
            >
              <AiOutlineLineChart color={search.iconColor} />
              <Text px="2">{search.label}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box pl="4">
        <Text fontSize="20px" p="2" textDecoration="underline" textDecorationColor="#ECA500">
          Trending Topics
        </Text>
        <Flex px="3" py="2" flexWrap="wrap">
          {trendingTopics.map((topic, index) => (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="center"
              border="1px solid"
              borderColor="gray.300"
              m={2}
              _hover={{ background: "gray.200" }}
              cursor="pointer"
              onClick={() => handleOptionSelect(topic.label)}
            >
              <Image boxSize="40px" src={topic.imageSrc} alt="trend" />
              <Text px="6">{topic.label}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default SearchCardContent;