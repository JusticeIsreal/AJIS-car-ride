"use client";
import cardsList from "@/data/cardsList";
import Image from "next/image";
import React, { useState } from "react";

function Cards() {
  const [selected, setSelected] = useState<number>();
  return (
    <div className="w-full mt-5">
      <h2 className="text-[14px] font-semibold">Payment Methods</h2>

      <div className="flex items-center justify-around mt-5">
        {cardsList.map((item, index) => (
          <div
            key={item.id}
            className={`p-1 hover:border-[2px] hover:border-[#5bbdce] hover:scale-110 transition-all  border-[1px] flex items-center justify-center rounded-md cursor-pointer ${
              selected === index ? `border-[2px] border-[#5bbdce] ` : null
            }`}
            onClick={() => setSelected(index)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={70}
              height={90}
              style={{ height: "30px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
