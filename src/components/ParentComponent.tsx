import React, { useState } from "react";
import FilterTabs from "./FilterTabs/FilterTabs";
import EventList from "./Events/EventList";
import Divisor from "./Divisor/Divisor";

const ParentComponent: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      <FilterTabs onFilterChange={handleFilterChange} />
      <EventList title="All Events in Lagos" selectedFilter={selectedFilter} />
      <Divisor />
      <EventList title="Recommended Events" selectedFilter="all" />
    </div>
  );
};

export default ParentComponent;
