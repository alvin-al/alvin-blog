import React from "react";
import Card from "../card/Card";

const CardList = () => {
  const card1 = {
    title: 'Title',  
    src: '/culture.png',
    date: '19 April 2024',
    category: 'Youtuber',
    desc: 'The fill prop allows your image to be sized by its parent element. Consider using CSS to give the images parent element space on the page along sizes prop to match any media query break points. You can also use object-fit with fill, contain, or cover, and object-position to define how the image should occupy that space.'
  }


  return (
    <div className="flex-grow w-4/6">
        <h1 className="text-3xl mb-4">Recent Posts</h1>
        <div className="flex flex-col gap-8">
          <Card src={card1.src} title={card1.title} date={card1.date} desc={card1.desc} category={card1.category}/>
          <Card src={card1.src} title={card1.title} date={card1.date} desc={card1.desc} category={card1.category}/>
          <Card src={card1.src} title={card1.title} date={card1.date} desc={card1.desc} category={card1.category}/>
          <Card src={card1.src} title={card1.title} date={card1.date} desc={card1.desc} category={card1.category}/>
          <Card src={card1.src} title={card1.title} date={card1.date} desc={card1.desc} category={card1.category}/>
        </div>
        
    </div>
  );
};

export default CardList;
