import React from "react";

const List = ({src, title, img}) => {
    return (
        <div>
            <button href={src} className="flex items-center gap-2 bg-blue-800 p-3 rounded-lg text-white">
                <img src={img} alt="yt" className="w-6"/>
                <p>{title}</p>
            </button>
        </div>
    )
}

export default List;
