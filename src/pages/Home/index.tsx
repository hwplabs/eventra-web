import Banner from "../../components/Banner";
import Divisor from "../../components/Divisor/Divisor";
import EventCard from "../../components/Events/EventCard";
import EventList from "../../components/Events/EventList";
import FilterTabs from "../../components/FilterTabs/FilterTabs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import MapContainer from "../../components/Map/Location";
import ParentComponent from "../../components/ParentComponent";

export const Home = () => {
  const apiKey = "AIzaSyDwBwcgBOHixiP830kzzjkUTX5ykSox3pA";
  const handleFilterChange = () => {
    // Handle the filter change here
    console.log("Filter changed:");
  };
  return (
    <div>
      <Banner />
      <MapContainer apiKey={apiKey} />
      <ParentComponent />
    </div>
  );
};
