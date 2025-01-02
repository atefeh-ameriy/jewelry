import React from "react";
import img1 from "../assets/person.jpg";
import { FaComment } from "react-icons/fa";

function Comments() {
  return (
    <div className="comment-section flex flex-col pt-32 pb-12 "  >
      <h3 className="w-full flex gap-1 pr-6 text-gray-900">
       <FaComment className="text-2xl pl-1 ml-1 mr-1" /> نظرات شما 
      </h3>
      <div className="comments w-full relative grid lg:grid-cols-3 gap-6 md:grid-cols-2  grid-cols-1 pt-12 place-content-center place-items-center  ">
        <div className="comment-container w-5/6  bg-gray-100 h-full rounded-md shadow">
          <div className="comment-stuff flex gap-2 text-gray-950 p-4 pb-1  text-sm md:text-base">
            <img src={img1} className="rounded-full h-12 w-12" />

            <p className="relative top-2">مینا احمدی</p>
          </div>
          <p className=" text-black p-4 pt-0 text-sm ">کاراتون واقعا تکه</p>
        </div>

        <div className="comment-container w-5/6  bg-gray-300 h-full rounded-md shadow">
          <div className="comment-stuff flex gap-2 text-gray-950 p-4 pb-1  text-sm md:text-base">
            <img src={img1} className="rounded-full h-12 w-12" />

            <p className="relative top-2">کوروش زند</p>
          </div>
          <p className=" text-black p-4 pt-0 text-sm ">از خریدم راضی ام ممنون از شما </p>
        </div>

        <div className="comment-container w-5/6  bg-gray-100 h-full rounded-md shadow">
          <div className="comment-stuff flex gap-2 text-gray-950 p-4 pb-1  text-sm md:text-base">
            <img src={img1} className="rounded-full h-12 w-12" />

            <p className="relative top-2">سینا کشاورز</p>
          </div>
          <p className=" text-black p-4 pt-0 text-sm ">جنس کاراتون فوق العادس</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
