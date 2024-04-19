import React from "react";

const Pagenation = () => {
  return (
    <div className="flex justify-between ">
        <button className="px-6 py-2 bg-slate-800 hover:bg-slate-500 font-semibold text-base text-white">Prev</button>
        <button className="px-6 py-2 bg-slate-800 hover:bg-slate-500 font-semibold  text-base text-white">Next</button>
    </div>
  );
};

export default Pagenation;
