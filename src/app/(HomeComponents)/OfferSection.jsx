"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import image from "../../_images/footer.jpg";
import Link from "next/link";
import { IoFastFood } from "react-icons/io5";
import food1 from "../../_images/1.png";
import food2 from "../../_images/barger1.png";
import food3 from "../../_images/food1.png";
import logo from "../../_images/logo.webp";

// Function to calculate remaining time
const calculateTimeLeft = () => {
  const targetDate = new Date("2024-10-31T23:59:59"); // Target date for the offer
  const currentDate = new Date();
  const difference = targetDate - currentDate;

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function OfferSection() {
  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false); // Track when the component has mounted

  useEffect(() => {
    // Set mounted to true when the component mounts
    setMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    // While waiting for the component to mount, don't render the countdown
    return null;
  }

  return (
    <div className="w-full relative py-10 flex justify-center items-center overflow-hidden min-h-[300px]">
      {/* Background image */}
      <Image
        src={image}
        alt="Offer Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="container mx-auto p-3 grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
        {/* Offer countdown section */}
        <div className="w-full px-8 flex flex-col justify-center items-center gap-5">
          <div className="w-full bg-[#ff8b2c81] p-5 rounded-md flex flex-col justify-center items-center gap-5 shadow-lg">
            <h1 className="font-extrabold text-2xl text-black">
              Our Running Offers
            </h1>
            <div className="flex justify-center items-center gap-3 text-white">
              <div className="p-4 flex flex-col justify-center items-center gap-1 bg-black bg-opacity-50 rounded-md">
                <h2 className="text-3xl font-bold">{timeLeft.days || "00"}</h2>
                <small>Days</small>
              </div>
              <div className="p-4 flex flex-col justify-center items-center gap-1 bg-black bg-opacity-50 rounded-md">
                <h2 className="text-3xl font-bold">{timeLeft.hours || "00"}</h2>
                <small>Hours</small>
              </div>
              <div className="p-4 flex flex-col justify-center items-center gap-1 bg-black bg-opacity-50 rounded-md">
                <h2 className="text-3xl font-bold">
                  {timeLeft.minutes || "00"}
                </h2>
                <small>Minutes</small>
              </div>
              <div className="p-4 flex flex-col justify-center items-center gap-1 bg-black bg-opacity-50 rounded-md">
                <h2 className="text-3xl font-bold">
                  {timeLeft.seconds || "00"}
                </h2>
                <small>Seconds</small>
              </div>
            </div>
          </div>

          {/* Order Now Button */}
          <Link
            href={"/Products"}
            className="flex text-white justify-center items-center gap-3 px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-700 transition-all duration-300"
          >
            <IoFastFood className="text-2xl" />
            <span className="font-bold">Order Now</span>
          </Link>
        </div>

        {/* Additional Design Element (Circle) */}
        <div className="w-full flex relative justify-center items-center p-8">
          <div className="w-[200px] h-[200px] rotate border-4 border-dashed border-white bg-transparent rounded-full flex justify-center items-center"></div>
          <div className="w-[200px] h-[200px] absolute bg-transparent rounded-full flex justify-center items-center">
            <Image
              src={food1}
              alt="food1"
              className="w-[120px] absolute -top-16"
            />
            <Image
              src={food2}
              alt="food2"
              className="w-[120px] absolute -left-12 bottom-2"
            />
            <Image
              src={food3}
              alt="food3"
              className="w-[120px] absolute -right-12 bottom-2"
            />
            <Image src={logo} alt="our logo" className="w-[60px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
