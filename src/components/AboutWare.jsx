import React from "react";
import { IoMdPricetags } from "react-icons/io";

import "./herocss.css";

function AboutWare() {
  return (
    <div className="relative flex flex-col space-y-4 lg:flex-row h-5/6 xl:pt-24 xl:pb-32 " id="about">
      <div className="flex-1 relative imgoverlay">
        <div className="imgaboutwarebg shadow "></div>
        {/**/}
        <div className="wrapper  ">
          <div className="button animate-float">
            <div className="icon ">
              <IoMdPricetags className="icon" />
            </div>
            <span className="text-sm">1,500,000تومان</span>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-12 pr-10">
        <div className="text-5xl font-black md:text-5xl">
          درباره محصولات ما{" "}
        </div>
        <p className="font-normal leading-8 w-5/6">
          جواهری ریرا با استفاده از مواد اصیل و با کیفیت بالا، آثاری بی‌نظیر و
          دوام‌پذیر ارائه می‌دهد. هنرمندان و کارآفرینان این برند با دقت و حوصله
          فراوان، جواهراتی زیبا و منحصر به فرد را طراحی و تولید می‌کنند. توجه به
          جزئیات و انتخاب دقیق مواد، باعث می‌شود که جواهرات ریرا نه تنها زیبا و
          شکیل باشند، بلکه همچنین مقاومت و دوام بالایی داشته باشند که به شما
          امکان استفاده طولانی مدت از آن‌ها را می‌دهد.
        </p>
        <div className="text-2xl font-extrabold md:text-1xl ">با ما در ارتباط باشین</div>
        <div className="space-x-10 ">
          <button className=" h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 m-l-5 ">
            تماس با ما
          </button>
          <a
            href=""
            className="text-lg font-bold underline underline-offset-4 gap-8"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default AboutWare;

{
  /*<div className="card-section flex flex-wrap pt-12 justify-center">
    <div className="single-card w-full h-96 bg-black">
        <div className="s-card-items ">

        </div>
    </div>
</div> */
}
