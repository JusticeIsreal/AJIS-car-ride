"use client";
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState<any>();
  console.log(currentLocation);
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
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <Booking />
        </div>
        <div className="col-span-2">
          <MapBoxMap />
        </div>
      </div>
    </div>
  );
}
