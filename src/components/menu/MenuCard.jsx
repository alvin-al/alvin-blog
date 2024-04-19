import React from "react";

const MenuCard = () => {
  return (
    <div className="flex flex-col">
        <h3 className="px-2 py-1 bg-yellow-400 w-max rounded-full text-xs font-semibold mb-2 hover:cursor-pointer">Youtube</h3>
        <h4 className="text-xl font-medium text-gray-900 hover:underline hover:underline-offset-2 hover:cursor-pointer">Mari kita mulai petualangan ini bersama!</h4>
        <div className="text-xs">
            <span className="font-medium">Alvin Al - </span>
            <span>19.04.2024</span>
        </div>
    </div>
  );
};

export default MenuCard;
