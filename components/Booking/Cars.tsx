"use client";
import carsList from "@/data/carsList";
import Image from "next/image";
import React, { useState } from "react";

function Cars() {
  const [selectedCar, setSelectedCar] = useState<number>(5);
  return (
    <div className="mt-5">
      <h2 className="font-semibold">Select Car</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {carsList.map((item, index) => (
          <div
            key={item.id}
            className={`
            flex flex-col items-center
            justify-center m-2 p-2
            border-[1px] rounded-md
            hover:border-[#5bbdce] 
            hover:border-[2px] cursor-pointer ${
              selectedCar === index
                ? `border-[2px] 
                 border-[#5bbdce] `
                : null
            }`}
            onClick={() => setSelectedCar(index)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={75}
              height={90}
              className="w-full "
            />
            <h2 className="text-gray-500">{item.name}</h2>
            <span className="font-medium">₦{item.charges}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
