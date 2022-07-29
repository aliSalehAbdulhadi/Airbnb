/* eslint-disable @next/next/no-img-element */
import React from "react";

const HomeCard = () => {
  return (
    <div className="h-[400px] w-[300px] self-center">
      <div className="h-[70%] ">
        <img
          className="h-[100%] w-[100%] object-cover rounded-xl"
          src="/images/image.webp"
          alt="image"
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="font-cerealMedium">Kini, Greece</h1>
          <h2 className="font-cerealLight">Star 4.5</h2>
        </div>
        <div className="flex flex-col">
          <div className="opacity-60">
            <h1>Hosted by Ali</h1>
            <span>Sep 21 - 28</span>
          </div>
          <div className="mt-2 font">
            <span className="font-cerealMedium">215,99 $</span>
            <span className="font-cerealLight ml-1">night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
