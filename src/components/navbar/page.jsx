import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return(
    <div className="flex py-4 w-full justify-stretch">
        <div className="w-1/3 gap-2 hidden lg:flex">
            <Image src="/facebook.png" alt="facebook" width={32} height={32}/>
            <Image src="/instagram.png" alt="instagram" width={32} height={32}/>
            <Image src="/tiktok.png" alt="tiktok" width={32} height={32} />
            <Image src="/youtube.png" alt="youtube" width={32} height={32} />
        </div>
        <div className="w-1/3 justify-center flex"><h1 className="font-black text-2xl"><Link href="/">Alvin Blog</Link></h1></div>
        <div className="flex gap-4 items-center justify-end w-1/3 border"> 
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <AuthLinks />
            <div className="flex lg:hidden flex-col justify-center gap-1 p-2">
                <div className="w-[20px] h-[3px] bg-black rounded-sm"></div>
                <div className="w-[20px] h-[3px] bg-black rounded-sm"></div>
                <div className="w-[20px] h-[3px] bg-black rounded-sm"></div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
