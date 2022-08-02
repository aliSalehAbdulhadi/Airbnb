import React from "react";
import ReservationSide from "./reservationSide/ReservationSide";

const AboutSection = () => {
  return (
    <div className="flex">
      <div className="w-[70%]">
        <div>
          <div>
            <h1 className="font-cerealMedium text-8xl">
              Entire rental unit hosted by Wilhelm
            </h1>
            <div>
              <span className="ml-1 font-light">5 guests</span>
              <span className="ml-1 font-light">2 bedrooms</span>
              <span className="ml-1 font-light">5 beds</span>
              <span className="ml-1 font-light">1 bath</span>
            </div>
            <div>image here</div>
          </div>
        </div>

        <div>
          <div>
            <div>icon here</div>
            <div>
              <h2>Wilhelm is a Superhost</h2>
              <h4>
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </h4>
            </div>
          </div>
          <div>
            <div>icon here</div>
            <div>
              <h2>Great location</h2>
              <h4>100% of recent guests gave the location a 5-star rating.</h4>
            </div>
          </div>
          <div>
            <div>icon here</div>
            <div>
              <h2>Free cancellation before May 1.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-200 w-[30%]">
        <ReservationSide />
      </div>
    </div>
  );
};

export default AboutSection;
