import React from "react";
import MenuCard from "./MenuCard";

const Menu = () => {
  return(
     <div className="flex-grow w-2/6">
         <p className="text-xs">What&apos;s hot</p>
         <h1 className="text-xl mb-4 font-semibold">Most Popular</h1>
         <div className="flex flex-col gap-8">
            <MenuCard />
            <MenuCard />
            <MenuCard />

         </div>
     </div>
  );
};

export default Menu;
