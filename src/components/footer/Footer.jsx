import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-50 h-96 w-full flex pt-8 px-8 gap-8 footer">
        <div className="w-[70%] pr-20">
            <div><h1 className="font-black text-2xl ">Alvin Blog</h1></div>
            <p className="text-base my-4">Consider using CSS to give the images parent element space on the page along sizes prop to match any media query break points. You can also use object-fit with fill, contain, or cover, and object-position to define how the image should occupy that space.</p>
            <div className="gap-2 hidden lg:flex">
                <Image src="/facebook.png" alt="facebook" width={18} height={18}/>
                <Image src="/instagram.png" alt="instagram" width={18} height={18}/>
                <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
                <Image src="/youtube.png" alt="youtube" width={18} height={18} />
            </div>
        </div>
        <div className="w-[10%] flex flex-col gap-2">
            <h4 className="font-bold">Links</h4>
            <ul className="flex flex-col gap-2">
                <li><Link href="/" className="hover:underline">Homepage</Link></li>
                <li><Link href="/" className="hover:underline">Blog</Link></li>
                <li><Link href="/" className="hover:underline">About</Link></li>
                <li><Link href="/" className="hover:underline">Contact</Link></li>
            </ul>
        </div>
        <div className="w-[10%] flex flex-col gap-2">
            <h4 className="font-bold">Tags</h4>
            <ul className="flex flex-col gap-2">
                <li><Link href="/" className="hover:underline">Style</Link></li>
                <li><Link href="/" className="hover:underline">Youtube</Link></li>
                <li><Link href="/" className="hover:underline">Fashion</Link></li>
                <li><Link href="/" className="hover:underline">Gaming</Link></li>
            </ul>
        </div>
        <div className="w-[10%] flex flex-col gap-2">
            <h4 className="font-bold">Social</h4>
            <ul className="flex flex-col gap-2">
                <li><Link href="/" className="hover:underline">Facebook</Link></li>
                <li><Link href="/" className="hover:underline">Instagram</Link></li>
                <li><Link href="/" className="hover:underline">Twitter</Link></li>
                <li><Link href="/" className="hover:underline">Linkedin</Link></li>
            </ul>
        </div>
    </div>
  );
};

export default Footer;
