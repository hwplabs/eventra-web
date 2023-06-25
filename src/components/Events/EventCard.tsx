import { useState } from "react";

import { Box, Image, GridItem, Flex, Text, Link } from "@chakra-ui/react";

import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

import _profile from "../../assets/logo/profile.png";

import { CalendarIcon, InfoIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";

interface EventCardProps {
  imageSrc: string;
  eventData: {
    title: string;
    date: string;
    time: string;
    location: string;
    followers: string;
    organizer: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ imageSrc, eventData }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <GridItem
      //   background="gray.100"
      borderRadius="10px"
      transition="ease-in-out .4s"
      _hover={{
        transform: "translateY(-2px)",
        cursor: "pointer",
        // boxShadow: "10px 10px 5px #e7e7e7",
      }}
      my={4}
      boxShadow="10px 10px 5px #e2e2e2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box position="relative">
        <Image src={imageSrc} alt="" />
        {isHovered && (
          <>
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              background="rgba(0, 0, 0, 0.5)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            ></Box>
          </>
        )}
        <Box
          position="absolute"
          top="5px"
          left="5px"
          //   transform="rotate(-30deg)"
          color="white"
          background="#097969"
          //   background="rgba(0, 0, 0, 0.5)"
          px="1"
          //   borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="999"
        >
          Paid
        </Box>
        <Box
          position="absolute"
          top="20px"
          right="20px"
          // background="white"
          p="1"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="999"
        >
          {isFavorite ? (
            <MdFavorite
              size={32}
              color="#ECA500"
              onClick={handleFavoriteClick}
              title="Liked"
            />
          ) : (
            <MdOutlineFavoriteBorder
              size={32}
              color="white"
              onClick={handleFavoriteClick}
              title="Like"
              style={{ background: "gray.200" }}
            />
          )}
        </Box>
      </Box>
      <Box
        py="2"
        px="4"
        position="relative"
        // border="1px solid #ECA500"
        borderRadius="0 0 10px 10px"
        background="white"
      >
        <Box>
          <Text fontSize="25px" fontWeight="" py="2">
            {eventData.title}
          </Text>
          <Flex py="2" alignItems="center" justifyContent="space-between">
            <Flex alignItems="center" justifyContent="start">
              <CalendarIcon color="#ECA500" />
              <Text fontSize="15px" fontWeight="500" px="2">
                {eventData.date}
              </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="end">
              <TimeIcon color="#ECA500" />
              <Text fontSize="15px" fontWeight="500" px="2">
                {eventData.time}
              </Text>
            </Flex>
          </Flex>
          <Flex py="2" alignItems="center" justifyContent="start">
            <InfoIcon color="#ECA500" />
            <Text fontSize="15px" fontWeight="500" px="2">
              {eventData.location}
            </Text>
          </Flex>
          <Flex py="2" alignItems="center" justifyContent="start">
            <StarIcon color="#ECA500" />
            <Text fontSize="15px" fontWeight="500" px="2">
              {eventData.followers} Followers
            </Text>
          </Flex>
          <Flex py="2" alignItems="center" justifyContent="start">
            <Image
              border="1px solid #ECA500"
              borderRadius="50%"
              boxSize="40px"
              src={_profile}
              alt="Profile image"
              color="#ECA500"
            />
            <Text fontSize="15px" fontWeight="500" px="2">
              {eventData.organizer}
            </Text>
          </Flex>
        </Box>
        <Link
          href="/event-details"
          target="_blank"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="gray.100"
          transition="ease .3s"
          borderRadius="10px"
          _hover={{ background: "#ECA500", color: "#fff" }}
        >
          <GiCheckMark />
          <Text
            p="4"
            borderRadius="25px"
            // position="absolute"
            textAlign="center"
            textDecoration="none"
            // fontWeight="bold"
            // bottom="40px"
            // right="20px"
            //   transform={"rotate(-30deg)"}
          >
            Attend
          </Text>
        </Link>
      </Box>
    </GridItem>
  );
};

export default EventCard;
