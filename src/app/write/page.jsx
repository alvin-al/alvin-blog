'use client'

import React, { useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"

const WritePage = () => {  
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");


  return(
    <div className="h-full mt-20">
        <input type="text" placeholder="Title" className="w-full text-5xl font-semibold py-3 px-3 focus:outline-none focus:border-b-2 focus:border-gray-600"/>
        <div>
            <div className="flex h-[50px] items-center my-3">
                <button className="m-0 p-0" onClick={() => setOpen(!open)}>
                    <Image src="/plus.svg" width={48} height={48} alt="plus" />
                </button>
                {open && (
                    <div className="items-center flex">
                    <button className="">
                        <Image src="/plus.svg" width={48} height={48} alt="plus" />
                    </button>
                    <button className=" ">
                        <Image src="/plus.svg" width={48} height={48} alt="plus" />
                    </button>
                    <button className=" ">
                        <Image src="/plus.svg" width={48} height={48} alt="plus" />
                    </button>
                    </div>
                )}
            </div>

            
            <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story!..." className="bg-slate-100 placeholder:text-black text-2xl w-full mb-5"/>
            <button className="py-2 px-4 border-black border hover:bg-gray-200 self-end">Publish</button>
        </div>
    </div>
  );
};

export default WritePage;
