import React from "react";
import List from "./List";

const CategoryList = () => {
  
  return (
    <div className="mb-8">
      <h2 className="text-3xl mb-4">Popular Category</h2>
      <div className="flex flex-row gap-4 w-full flex-wrap">
        <List src="/" title="Fashion" img="/youtube.png" />
        <List src="/" title="Pakaian" img="/youtube.png" />
        <List src="/" title="Content Creation" img="/youtube.png" />
        <List src="/" title="Youtuber" img="/youtube.png" />
        <List src="/" title="Selebgram" img="/youtube.png" />
        <List src="/" title="Design" img="/youtube.png" />
      </div>
    </div>
  );
};

export default CategoryList;
