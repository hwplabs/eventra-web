import {
  Grid,
  Box,
  Image,
  Text,
  GridItem,
  Flex,
  Button,
} from "@chakra-ui/react";

import _profile from "../../assets/logo/profile.png";

import _weddingImage from "../../assets/images/wedding.jpg";
import _church from "../../assets/images/church.jpg";
import _concert from "../../assets/images/concert.jpg";
import _sport from "../../assets/images/sport.jpg";
import _reunion from "../../assets/images/reunion.jpg";

import CustomGridItem from "./EventCard";

interface EventListProps {
  title: string;
  selectedFilter: string;
}

const EventList: React.FC<EventListProps> = ({ title, selectedFilter }) => {
  const eventDataList = [
    {
      category: "food_and_drinks",
      imageSrc: `${_weddingImage}`,
      eventData: {
        title: "Wedding Anniversary",
        date: "November 5, 2023",
        time: "2:00 PM",
        location: "Ajegunle, Idi omo",
        followers: "10K",
        organizer: "Chris weds Mary - ChriMa",
        price: "2500"
      },
    },
    {
      category: "virtual",
      imageSrc: `${_church}`,
      eventData: {
        title: "Revival Hour",
        date: "December 25, 2023",
        time: "4:00 PM",
        location: "RCCG Jesus Team",
        followers: "1.5K",
        organizer: "Jaymikee",
        price: "100"
      },
    },
    {
      category: "today",
      imageSrc: `${_concert}`,
      eventData: {
        title: "Rema is coming",
        date: "Javuary 10, 2023",
        time: "4:00 PM",
        location: "UI, agbowo",
        followers: "11K",
        organizer: "SUG President",
        price: "1200"
      },
    },
    {
      category: "weekend",
      imageSrc: `${_sport}`,
      eventData: {
        title: "Marathon Race",
        date: "March 16, 2023",
        time: "4:00 PM",
        location: "UI Gate to Unilag",
        followers: "20K",
        organizer: "UI Competition",
        price: "350"
      },
    },
    {
      category: "health_awareness",
      imageSrc: `${_reunion}`,
      eventData: {
        title: "Reunion Cultural",
        date: "October 1, 2023",
        time: "4:00 PM",
        location: "Akawo moayiokd",
        followers: "20K",
        organizer: "UI 2044' set",
        price: "700"
      },
    },
    {
      category: "music",
      imageSrc: `${_weddingImage}`,
      eventData: {
        title: "Techpreneur Live",
        date: "September 17, 2023",
        time: "4:00 PM",
        location: "Underbrigde",
        followers: "3K",
        organizer: "AITI",
        price: "500"
      },
    },
    {
      category: "food_and_drinks",
      imageSrc: `${_church}`,
      eventData: {
        title: "Google dev meetup",
        date: "Feb 14, 2023",
        time: "4:00 PM",
        location: "Google official building",
        followers: "90K",
        organizer: "Google",
        price: "1500"
      },
    },
    {
      category: "exhibition",
      imageSrc: `${_concert}`,
      eventData: {
        title: "Amazon Bureau",
        date: "May 26, 2023",
        time: "4:00 PM",
        location: "Light out venue",
        followers: "20K",
        organizer: "Amazon",
        price: "200"
      },
    },
  ];

  // Filter the eventDataList based on the selectedFilter
  const filteredEventDataList =
    selectedFilter !== "all"
      ? eventDataList.filter(
          (eventData) => eventData.category === selectedFilter
        )
      : eventDataList;

  return (
    <Box background="#fff" py={4} px={8}>
      <Text fontSize="3xl">{title}</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {filteredEventDataList.map((eventDataItem, index) => (
          <CustomGridItem
            key={index}
            imageSrc={eventDataItem.imageSrc}
            eventData={eventDataItem.eventData}
          />
        ))}
      </Grid>
      <Flex alignItems="center" justifyContent="center" my={4}>
        <Button
          border="1px solid"
          borderColor="gray.300"
          background="#ECA500"
          color="#fff"
          p={4}
          height=""
          _hover={{ background: "" }}
        >
          See more events
        </Button>
      </Flex>
    </Box>
  );
};

export default EventList;
