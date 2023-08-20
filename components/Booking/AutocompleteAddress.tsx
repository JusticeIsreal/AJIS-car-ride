"use client";
import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext, useState } from "react";

function AutocompleteAddress() {
  const [source, setSource] = useState<any>("");
  const { destination, setDestination } = useContext(UserLocationContext);

  return (
    <div className="mt-5 ">
      {/* <div>
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-[#5bbdce]"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Enter Full address"
        />
      </div> */}
      <div className="mt-3">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-[#5bbdce]"
          placeholder="Enter Full address"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
    </div>
  );
}

export default AutocompleteAddress;
