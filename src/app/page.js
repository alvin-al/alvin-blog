import Image from "next/image";
import React from "react";
import Link from "next/link"
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";



export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList /> 
      <div className="flex gap-8 mb-24">
        <CardList />
        <div className="w-[1px] h-96 bg-slate-800"></div>
        <Menu />
      </div>
    </main>

  );
}
