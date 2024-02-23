import CoursalPage from "@/components/Home/Coursal";
import Image from "next/image";
import React from "react";
import Productcard from "../components/Cards/Productcard.jsx";
import Banner1 from "../../public/strip-desktop-single11.png";
import Banner2 from "../../public/Oversized-home-page-banner-desktop-view.jpg";
import Slider from "@/components/Slider/Slider.jsx";

function page() {
  return (
    <div className="min-h-full w-full">
      <div>
        <CoursalPage />
      </div>
      <div className="container my-10">
        <Image src={Banner1} />
      </div>
      <div className="container my-10">
        <Image src={Banner2} />
      </div>
      <div className="container min-h-screen py-10">
        <div className="flex justify-center items-center gap-4">
          <button className="border border-opacity-80 py-1 border-black px-4 rounded-full text-[14px] hover:bg-black hover:text-white ">
            NEW ARRIVALS
          </button>
          <button className="border border-opacity-80  py-1 border-black px-4 rounded-full text-[14px] hover:bg-black hover:text-white ">
            WINTER WEARS
          </button>
        </div>
        <div className="flex gap-2 mt-8">
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </div>
      <div className="container mt-10 pb-10">
        <h2 className="text-xl font-bold border-l-2 pl-2 my-6 border-black">
          BIG SAVING ZONE
        </h2>
        <Slider />
      </div>
      <div className="container min-h-full">
        <Image
          src="https://www.beyoung.in/api/catalog/homepage-3-10/desktop/strip/strip.jpg"
          width={1000}
          height={400}
        />
      </div>
    </div>
  );
}

export default page;
