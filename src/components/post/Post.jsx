import React from "react";
import Image from "next/image";

const Post = () => {
  return (
    <div className="flex w-full gap-4 md:gap-0 items-center flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[50%] h-[400px] flex border">
            <Image src="/culture.png" alt="culture" width={700} height={500} className="object-cover"/>
        </div>
        <div className="flex flex-col gap-4 md:w-[50%] md:px-8">
            <div><h2 className="text-3xl font-semibold">Judul Remote Images</h2></div>
            <div className="w-full"><p>The fill prop allows your image to be sized by its parent element. Consider using CSS to give the images parent element space on the page along sizes prop to match any media query break points. You can also use object-fit with fill, contain, or cover, and object-position to define how the image should occupy that space.</p></div>
            <button className="w-32 h-10 rounded-md bg-black text-white hover:bg-slate-700">Read more</button>
        </div>
    </div>
  );
};

export default Post;
