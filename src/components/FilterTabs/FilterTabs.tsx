import React, { useState, useRef } from "react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { tabLabels } from "./tablabels";
import { Filter } from "./types";
import { useTabScroll } from "../../hooks/useTabScroll";

import { FilterTabsProps } from "./IFilterTabs";

const FilterTabs: React.FC<FilterTabsProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const tabListRef = useRef<HTMLDivElement>(null);
  const { isLeftArrowVisible, isRightArrowVisible, handleScroll } =
    useTabScroll(tabListRef);

  const handleTabChange = (filter: Filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <Tabs variant="enclosed" mx={2} my={1}>
      <Flex background="">
        <Flex align="center">
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-label="Scroll Left"
            onClick={() => handleScroll(-200)}
            mx={2}
            zIndex={1}
            visibility={isLeftArrowVisible ? "visible" : "hidden"}
          />
        </Flex>
        <TabList
          ref={tabListRef}
          id="tab-list"
          overflowX="visible"
          overflowY="hidden"
          whiteSpace="nowrap"
          position="relative"
          borderBottom="none"
          // background="gray.100"
          sx={{
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "400px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "white",
              borderRadius: "20px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
          }}
        >
          {Object.entries(tabLabels).map(([filter, label]) => (
            <Tab
              key={filter}
              onClick={() => handleTabChange(filter as Filter)}
              isSelected={activeFilter === filter}
              background="gray.100"
              color="#000"
              fontWeight="500"
              px="25px"
              mx={2}
              borderRadius="25px"
              height="50px"
              lineHeight="50px"
              _selected={{ background: "#ECA500", color: "white" }}
            >
              {label}
            </Tab>
          ))}
        </TabList>
        <Flex align="center">
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Scroll Right"
            onClick={() => handleScroll(200)}
            zIndex={1}
            m={2}
            visibility={isRightArrowVisible ? "visible" : "hidden"}
          />
        </Flex>
      </Flex>

      <TabPanels>
        {Object.entries(tabLabels).map(([filter]) => (
          <TabPanel key={filter}>{/* Content for each filter */}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default FilterTabs;
