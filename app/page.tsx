"use client";
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { UserLocationContext } from "@/context/UserLocationContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState<any>();
  const [destination, setDestination] = useState<any>("");
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((place) => {
      setCurrentLocation({
        lat: place.coords.latitude,
        lng: place.coords.longitude,
      });
    });
  };

  // get new address location
  const apiKey = "AIzaSyCQkknQlUZzHTYgXmmJ0mLFtsggk5fw3io";
  const address = "5 ohakwe avenue rumuibekwe ";
  const [newLocation, setNewLocation] = useState<any>();
  // Construct the URL
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    destination
  )}&key=${apiKey}`;

  // Fetch the geolocation data
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const location = data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;
          setNewLocation({ lat: latitude, lng: longitude });
        } else {
          console.log("Address not found");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [destination]);

  return (
    <div>
      <UserLocationContext.Provider
        value={{
          currentLocation,
          setCurrentLocation,
          newLocation,
          setNewLocation,
          destination,
          setDestination,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <Booking />
          </div>
          <div className="col-span-2">
            <MapBoxMap />
          </div>
        </div>
      </UserLocationContext.Provider>
    </div>
  );
}
