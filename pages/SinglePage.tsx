/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import "react-dates/initialize";
import moment from "moment";
import { DateRangePicker, isInclusivelyBeforeDay } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const SinglePage = () => {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [focusedInput, setFocusedInput] = useState<any>(null);

  const [startDateSide, setStartDateSide] = useState<any>(null);
  const [endDateSide, setEndDateSide] = useState<any>(null);
  const [focusedInputSide, setFocusedInputSide] = useState<any>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

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
              <img className="mr-1" src="/svg/share.svg" alt="share icon" />
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
        <div className="w-[70%]" onClick={() => setIsVisible(false)}>
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
            <div className="flex">
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

          <div className="pb-10 border-b-[1px] w-[90%] mb-10">
            <div>
              <img className="h-6 mb-5" src="/svg/aircover.svg" alt="" />
            </div>
            <div>
              <h1>
                Every booking includes free protection from Host cancellations,
                listing inaccuracies, and other issues like trouble checking in.
              </h1>
              <button className="mt-3 underline font-semibold">
                Learn more
              </button>
            </div>
          </div>

          <div className="pb-10 border-b-[1px] w-[90%] mb-10">
            <h1>
              Vakthusøyen is an island, about 150 meters from Henningsvær, where
              you use a small motorboat for access. Vakthusøya is an island,
              about 150 meters from Henningsvær! We provide a small boat with
              engine for access...
            </h1>
            <button className="mt-3 underline font-semibold">Learn more</button>
          </div>

          <div className="pb-10 border-b-[1px] w-[90%] mb-10">
            <h1 className="mb-5 font-cerealMedium text-xl">
              Where you will sleep
            </h1>

            <div className="flex">
              <div className="border-[1.5px] min-h-[130px] min-w-[200px] rounded-lg p-3">
                <h1 className=" ml-[.60rem] font-semibold">Bedroom 2</h1>
                <div className="flex items-center">
                  <img src="svg/singleBed.svg" alt="single bed" />
                  <img src="svg/singleBed.svg" alt="single bed" />
                  <img src="svg/singleBed.svg" alt="single bed" />
                </div>

                <h4 className="ml-[.60rem] font-light">3 single bed</h4>
              </div>
            </div>
          </div>

          <div className="pb-10 border-b-[1px] w-[90%] mb-10">
            <div>
              <h1 className="mb-5 font-cerealMedium text-xl">
                What this place offers
              </h1>
              <div className="grid grid-cols-2 opacity-80">
                <div className="flex items-center mb-3">
                  <img className="h-8 mr-2" src="svg/camera.svg" alt="camera" />
                  <h1 className="">Security camera</h1>
                </div>
                <div className="flex items-center mb-3">
                  <img
                    className="h-8 mr-2"
                    src="svg/kitchen.svg"
                    alt="kitchen"
                  />
                  <h1>Kitchen</h1>
                </div>
                <div className="flex items-center mb-3">
                  <img className="h-8 mr-2" src="svg/pet.svg" alt="pet" />
                  <h1>Pet allowed</h1>
                </div>
                <div className="flex items-center mb-3">
                  <img className="h-8 mr-2" src="svg/yard.svg" alt="yard" />
                  <h1>Yard</h1>
                </div>
                <div className="flex items-center mb-3">
                  <img className="h-8 mr-2" src="svg/city.svg" alt="city" />
                  <h1>City view</h1>
                </div>
                <div className="flex items-center mb-3">
                  <img className="h-8 mr-2" src="svg/washer.svg" alt="washer" />
                  <h1>Washer</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <h1 className="mb-2 font-cerealMedium text-xl">
                Select check-in date
              </h1>
              <h4 className="mb-5 opacity-60 text-sm">
                Add your travel dates for exact pricing
              </h4>
            </div>
            <div>
              <DateRangePicker
                startDate={startDate}
                startDateId="startDate"
                endDate={endDate}
                endDateId="endDate"
                onDatesChange={({ startDate, endDate }: any) => {
                  setStartDate(startDate);
                  setEndDate(endDate);
                }}
                focusedInput={focusedInput}
                onFocusChange={setFocusedInput}
                isOutsideRange={(day: any) =>
                  !isInclusivelyBeforeDay(day, moment())
                }
                initialVisibleMonth={() => moment().subtract(1, "month")}
                orientation={"horizontal"}
              />
            </div>
          </div>
        </div>
        <div className=" w-[30%]">
          <div className="border-[1.5px] rounded-lg shadow-xl sticky top-10 p-5 m-2">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center">
                <h1 className="text-2xl font-cerealMedium mr-1">300$</h1>
                <span className="font-light">night</span>
              </div>
              <div className="flex items-center">
                <img
                  className="h-5 mb-[.20rem]"
                  src="/svg/star.svg"
                  alt="star"
                />
                <h1>5.0</h1>
                <h2 className="ml-2 opacity-60 underline cursor-pointer">
                  8 reviews
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <DateRangePicker
                startDate={startDateSide}
                startDateId="startDate"
                endDate={endDateSide}
                endDateId="endDate"
                onDatesChange={({ startDateSide, endDate }: any) => {
                  setStartDateSide(startDateSide);
                  setEndDateSide(endDateSide);
                }}
                focusedInput={focusedInputSide}
                onFocusChange={setFocusedInputSide}
                isOutsideRange={(day: any) =>
                  !isInclusivelyBeforeDay(day, moment())
                }
                initialVisibleMonth={() => moment().subtract(1, "month")}
                orientation={"horizontal"}
              />
              <div
                className="mb-1 cursor-pointer border-[1.5px] border-t-0 rounded-b-lg px-3 py-1 w-[89.5%]"
                onClick={() => setIsVisible(!isVisible)}
              >
                <div>Guests</div>
                <div className="font-cerealLight text-sm">
                  {adults + children + infants} guests
                </div>
              </div>
              <div
                className={`border-[1.5px] rounded-lg p-5 w-[89.5%] ${
                  isVisible ? "block" : "hidden"
                } `}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h1 className="font-cerealMedium">Adults</h1>
                    <h3 className="text-sm font-cerealLight">Age 13+</h3>
                  </div>
                  <div>
                    <button
                      className={`border-[1.5px] rounded-full px-[.6rem] scale-[1.3]  ${
                        adults <= 1 ? "opacity-30" : "opacity-80"
                      }`}
                      disabled={adults <= 1}
                      onClick={() => setAdults(adults - 1)}
                    >
                      -
                    </button>
                    <span className="mx-3 opacity-70">{adults}</span>
                    <button
                      className="border-[1.5px] rounded-full px-[.4rem] scale-[1.3] opacity-80"
                      onClick={() => setAdults(adults + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h1 className="font-cerealMedium">Children</h1>
                    <h3 className="text-sm font-cerealLight">Ages 2-12</h3>
                  </div>
                  <div>
                    <button
                      className={`border-[1.5px] rounded-full px-[.6rem] scale-[1.3]  ${
                        children <= 0 ? "opacity-30" : "opacity-80"
                      }`}
                      disabled={children <= 0}
                      onClick={() => setChildren(children - 1)}
                    >
                      -
                    </button>
                    <span className="mx-3 opacity-70">{children}</span>
                    <button
                      className="border-[1.5px] rounded-full px-[.4rem] scale-[1.3] opacity-80"
                      onClick={() => setChildren(children + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-cerealMedium">Infants</h1>
                    <h3 className="text-sm font-cerealLight">Under 2</h3>
                  </div>
                  <div>
                    <button
                      className={`border-[1.5px] rounded-full px-[.6rem] scale-[1.3]  ${
                        infants <= 0 ? "opacity-30" : "opacity-80"
                      }`}
                      disabled={infants <= 0}
                      onClick={() => setInfants(infants - 1)}
                    >
                      -
                    </button>
                    <span className="mx-3 opacity-70">{infants}</span>
                    <button
                      className="border-[1.5px] rounded-full px-[.4rem] scale-[1.3] opacity-80"
                      onClick={() => setInfants(infants + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-sm font-cerealLight mt-8">
                    This place has a maximum of 5 guests, not including infants.
                    If you're bringing more than 2 pets, please let your host
                    know.
                  </h3>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="self-end mt-3 underline font-cerealMedium"
                  >
                    Close
                  </button>
                </div>
              </div>
              <button className="self-center text-white py-3 px-[5rem] rounded-lg btnBackground mt-3">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">aa</div>
    </div>
  );
};

export default SinglePage;
