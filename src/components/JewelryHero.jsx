import React from "react";
import { IoMdPricetags } from "react-icons/io";

import "./herocss.css"

function JewelryHero() {
  return (
    <div className="relative flex flex-col  lg:flex-row-reverse h-5/6 space-y-9  pb-32 pt-11" id="home">
      <div className="flex-1 relative imgoverlay">
      <div className="imgbg shadow"  >
      
      </div>
      { /**/}
        <div className="wrapper  ">
          <div className="button animate-float">
          <div className="icon ">
            <IoMdPricetags className="icon"/>
          </div>
          <span  className="text-sm">1,500,000تومان</span>
          </div>
        </div>
      
      
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">ریرا شاپ</div>
        <p className=" font-normal   w-5/6 pt-6 leading-8 " >جواهری ریرا با بیش از ۲۵ سال تجربه در زمینه فروش جواهرات و اکسسوری‌های برتر، به عنوان یکی از پیشگامان صنعت، به مشتریان خود تضمین می‌کند که تنها بهترین و با کیفیت‌ترین محصولات را ارائه می‌دهد. با توجه به دقت و انتخاب دقیق محصولات، جواهری ریرا به عنوان یک منبع معتبر برای اکسسوری‌های استثنایی شناخته می‌شود.. </p>
        <div className="text-2xl font-extrabold md:text-3xl">20% تخفیف </div>
        <div className="space-x-10 ">
          <button className=" h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 m-l-5 mt-9">
            همین الان خرید کن!
          </button>
          <a href="" className="text-lg font-bold underline underline-offset-4 gap-8">
          </a>
        </div>
      </div>
   


    </div>
  );
}

export default JewelryHero;
