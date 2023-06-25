import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Flex, Text, Box, Image } from "@chakra-ui/react";

import _locationIcon from "../../assets/logo/location (1).png";

interface MapProps {
  apiKey: string;
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapContainer: React.FC<MapProps> = ({ apiKey }) => {
  const [stateName, setStateName] = useState("");
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [editingLocation, setEditingLocation] = useState(false);
  const [newLocation, setNewLocation] = useState("");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    const geocoder = new window.google.maps.Geocoder();

    if (navigator.geolocation && isLoaded) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });

          const latLng = new window.google.maps.LatLng(latitude, longitude);
          geocoder.geocode(
            { location: latLng },
            (results: any, status: any) => {
              if (status === "OK" && results[0]) {
                const addressComponents = results[0].address_components;
                const stateComponent = addressComponents.find(
                  (component: any) =>
                    component.types.includes("administrative_area_level_1")
                );
                const stateName = stateComponent
                  ? stateComponent.long_name
                  : "";
                setStateName(stateName);
              }
            }
          );
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [isLoaded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLocation(e.target.value);
  };

  const handleInputClick = () => {
    setEditingLocation(true);
  };

  const handleInputBlur = () => {
    setEditingLocation(false);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setStateName(newLocation);
      setEditingLocation(false);
    }
  };

  return (
    <div>
      <Box
        mx={8}
        my={4}
        border="2px solid #ECA500"
        borderColor="gray.200"
        width="15%"
        borderRadius="25px"
      >
        <Flex>
          <Image
            boxSize="50px"
            style={{ padding: "5px" }}
            borderRight="2px solid"
            borderColor="gray.200"
            src={_locationIcon}
            alt="location icon"
          />
          {stateName && isLoaded ? (
            <input
              type="text"
              value={editingLocation ? newLocation : stateName}
              onChange={handleInputChange}
              onClick={handleInputClick}
              onBlur={handleInputBlur}
              onKeyPress={handleInputKeyPress}
              readOnly={!editingLocation}
              style={{
                fontSize: "1.2rem",
                backgroundColor: editingLocation ? "white" : "transparent",
                color: editingLocation ? "black" : "#855b08",
                outline: "none",
                // border: editingLocation ? "2px solid #EAC500" : "none",
                padding: editingLocation ? "2px 4px" : "0 4px",
                // borderBottom: "2px solid #ECA500"
                width: "120px",
                margin: "0 10px",
              }}
            />
          ) : (
            <Text
              style={{
                fontSize: "1rem",
                color: "#ECA500",
                padding: "10px",
              }}
            >
              loading location...
            </Text>
          )}
        </Flex>
      </Box>
      {/* Rest of the code */}
    </div>
  );
};

export default MapContainer;
