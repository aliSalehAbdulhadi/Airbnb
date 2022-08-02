/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutSection from "../src/singlePage/aboutSection/AboutSection";
import ReservationSide from "../src/singlePage/aboutSection/reservationSide/ReservationSide";
import ImageSection from "../src/singlePage/imageSection/ImageSection";
import TitleSection from "../src/singlePage/titleSection/TitleSection";

const SinglePage = () => {
  return (
    <div className="mx-[20rem] mt-8 h-fit">
      <div>
        <h1 className="text-3xl font-cerealMedium">
          Vakthusøyen - Nybryggen - on a small island
        </h1>
        <div className="flex items-center justify-between mt-2 text-sm font-semibold">
          <div className="flex items-center justify-center">
            <span className="flex items-center justify-center mr-2">
              <img
                className="h-4 mb-[.15rem] mr-1"
                src="/svg/star.svg"
                alt="start icon"
              />
              5.0
            </span>
            <span className="mr-2 underline">8 reviews</span>
            <span className="mr-2 font-normal">Superhost</span>
            <span className="mr-2 underline">Nordland,Norway</span>
          </div>
          <div className="flex items-center just-center">
            <span className="mr-5 flex items-center underline">
              <img className="mr-1" src="/svg/share.svg" alt="share icon" />{" "}
              Share
            </span>
            <span className="flex items-center underline">
              <img className="mr-1" src="/svg/heart.svg" alt="heart icon" />
              Save
            </span>
          </div>
        </div>
      </div>

      <div className="flex h-[35rem] rounded-md overflow-hidden mt-10">
        <div className="w-[50%] mr-1 ">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/images/image.webp"
            alt=""
          />
        </div>
        <div className="w-[50%]  grid grid-cols-2 grid-rows-2 gap-1">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              className="w-[100%] h-[100%] object-cover"
              src="/images/image.webp"
              alt=""
            />
          ))}
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-[70%]">
          <div className="w-[90%] border-b-[1px] pb-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-cerealMedium text-2xl">
                  Entire rental unit hosted by Wilhelm
                </h1>
                <div>
                  <span className="ml-1">5 guests</span>
                  <span className="ml-1">2 bedrooms</span>
                  <span className="ml-1">5 beds</span>
                  <span className="ml-1">1 bath</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-[50%] overflow-hidden">
                <img
                  className="h-[100%] w-[100%] object-cover"
                  src="/images/image.webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="border-b-[1px] pb-10 mb-10 w-[90%] mt-10">
            <div className="flex mb-5">
              <div>
                <img className="mr-2 h-8" src="/svg/badge2.svg" alt="" />
              </div>
              <div>
                <h2 className="f font-cerealMedium">Wilhelm is a Superhost</h2>
                <h4 className="opacity-60 text-sm">
                  Superhosts are experienced, highly rated hosts who are
                  committed to providing great stays for guests.
                </h4>
              </div>
            </div>
            <div className="flex mb-5">
              <div>
                <img className="mr-3 h-7" src="/svg/pin.svg" alt="" />
              </div>
              <div>
                <h2 className="f font-cerealMedium">Great location</h2>
                <h4 className="opacity-60 text-sm">
                  100% of recent guests gave the location a 5-star rating.
                </h4>
              </div>
            </div>
            <div className="flex">
              <div>
                <img className="mr-3 h-7" src="/svg/calendar.svg" alt="" />
              </div>
              <div>
                <h2 className="font-cerealMedium">
                  Free cancellation before May 1.
                </h2>
              </div>
            </div>
          </div>

          <img src="/svg/aircover.svg" alt="" />
        </div>
        <div className="bg-blue-200 w-[30%]">
          <ReservationSide />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
