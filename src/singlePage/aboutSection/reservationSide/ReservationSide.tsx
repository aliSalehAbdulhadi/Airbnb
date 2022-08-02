/* eslint-disable @next/next/no-img-element */
import React from "react";

const ReservationSide = () => {
  return (
    <div className="border-[1.5px] rounded-lg bg-red-200">
      <div>
        <h1>300$ night</h1>
        <div>
          <img src="/svg/star.svg" alt="star" />
          <h1>5.0</h1>
          <h2>8 reviews</h2>
        </div>
      </div>
    </div>
  );
};

export default ReservationSide;
