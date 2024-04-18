import React from "react";
import Image from "next/image"

const Card = () => {
  return (
    <div>
        <div className="max-w-[400px] h-[250px] relative">
            <Image src="/culture.png" alt="culture" width={700} height={500} objectFit="cover" sizes=""/>
        </div>
        <div>
            <div>Date - Category</div>
            <div>Title</div>
            <div>The fill prop allows your image to be sized by its parent element. Consider using CSS to give the images parent element space on the page along sizes prop to match any media query break points. You can also use object-fit with fill, contain, or cover, and object-position to define how the image should occupy that space.</div>
            <button>Read more</button>
        </div>
    </div>
  );
};

export default Card;
