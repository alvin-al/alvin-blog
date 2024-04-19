import React from "react";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className="flex-grow w-4/6">
        <h1 className="text-3xl mb-4">Recent Posts</h1>
        <div className="flex flex-col gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
    </div>
  );
};

export default CardList;
