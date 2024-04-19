'use client';


import React from "react";
import Image from "next/image"

const Card = ({src, title, date, category, desc}) => {
  return (
    <div className="flex gap-8 h-[300px] pr-2">
        <div className="w-2/5 relative ">
            <Image src={src} alt="culture" layout="fill" objectFit="cover"/>
        </div>
        <div className="w-3/5 flex flex-col">
            <div>
              <span className="text-sm">{date} - </span>
              <span className="text-sm">{category}</span>
            </div>
            <div className="text-3xl my-4 font-semibold">{title}</div>
            <div className="mb-8">{desc}</div>
            <button className="hover:bg-blue-100 underline-offset-4 w-max underline">Read more</button>
        </div>




    </div>
  );

  
};

export default Card;
