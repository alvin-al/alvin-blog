'use client';


import React from "react";
import Image from "next/image"

const Card = () => {
  return (
    <div className="flex gap-8 h-max pr-2">
        <div className="w-2/5 relative ">
            <Image src="/culture.png" alt="culture" layout="fill" objectFit="cover"/>
        </div>
        <div className="w-3/5 flex flex-col">
            <div>
              <span className="text-sm">19 April 2024 - </span>
              <span className="text-sm">Youtuber</span>
            </div>
            <div className="text-3xl my-4 font-semibold">Title</div>
            <div className="mb-8">The fill prop allows your image to be sized by its parent element. Consider using CSS to give the images parent element space on the page along sizes prop to match any media query break points. You can also use object-fit with fill, contain, or cover, and object-position to define how the image should occupy that space.</div>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white w-max">Read more</button>
        </div>
    </div>
  );
};

export default Card;
