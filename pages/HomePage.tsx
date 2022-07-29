import React from "react";
import HomeCard from "../src/components/homeCard/HomeCard";
import IconsSwiper from "../src/components/iconsSwiper/IconsSwiper";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-10">
        <IconsSwiper />
      </div>
      <HomeCard />
    </div>
  );
};

export default HomePage;
