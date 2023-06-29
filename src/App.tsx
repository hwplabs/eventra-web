import { Home } from "./pages/Home";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import EventDetails from "../src/pages/EventDetails/EventDetails";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

const App = () => {
  // Add a list of paths where the header and footer should not be shown
  const excludedPaths = ["/signup", "/login"]; // Add more paths if needed

  // Function to check if the current path is excluded
  const isExcludedPath = () => {
    const currentPath = window.location.pathname;
    return excludedPaths.includes(currentPath);
  };

  // Function to render the header component
  const renderHeader = () => {
    if (!isExcludedPath()) {
      return <Header />;
    }
    return null;
  };

  // Function to render the footer component
  const renderFooter = () => {
    if (!isExcludedPath()) {
      return <Footer />;
    }
    return null;
  };

  return (
    <>
      {renderHeader()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {renderFooter()}
    </>
  );
};

export default App;
