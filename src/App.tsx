import { Home } from "./pages/Home";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import EventDetails from "../src/pages/EventDetails/EventDetails";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-details" element={<EventDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
