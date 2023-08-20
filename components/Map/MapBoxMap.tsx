"use client";
import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext } from "react";
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapBoxMap() {
  const screenHeight = window.innerHeight * 0.72;
  const { currentLocation, setCurrentLocation, newLocation, setNewLocation } =
    useContext(UserLocationContext);

  return (
    <div className="p-5">
      <h2 className="text=[20px] font-semibold">Map</h2>
      <div style={{ height: screenHeight }}>
        {currentLocation ? (
          <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: currentLocation?.lng,
              latitude: currentLocation?.lat,
              zoom: 14,
            }}
            style={{ width: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {/* present location marker */}

            <Marker
              longitude={currentLocation?.lng}
              latitude={currentLocation?.lat}
              anchor="bottom"
            >
              <img src="./pin.png" className="h-[50px]" />
            </Marker>
            {/* destination location marker  */}
            {newLocation && (
              <Marker
                longitude={newLocation?.lng}
                latitude={newLocation?.lat}
                anchor="bottom"
              >
                <img src="./pin.png" className="h-[50px]" />
              </Marker>
            )}
          </Map>
        ) : (
          <h2 className="text-center text-red-500 font-extrabold">
            TURN ON LOCATION ACCESS
          </h2>
        )}
      </div>
    </div>
  );
}

export default MapBoxMap;
