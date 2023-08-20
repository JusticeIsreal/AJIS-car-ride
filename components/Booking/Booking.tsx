"use client";
import React, { useEffect, useState } from "react";
import AutocompleteAddress from "./AutocompleteAddress";
import Cars from "./Cars";
import Cards from "./Cards";

function Booking() {
  const [destination, setDestination] = useState<any>("");
  return (
    <div className="p-5 ">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div
        className="border-[#5bbdce] border-[1px] p-5 rounded-md "
        // style={{ height: screenHeight }}
      >
        <AutocompleteAddress />
        <Cars />
        <Cards />
        <button className="w-full bg-[#5bbdce] p-2 rounded-md mt-4 hover:bg-[#4794a1]">
          Book Ride
        </button>
      </div>
    </div>
  );
}

export default Booking;
