"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import banner5 from "../../_images/banner5.png";

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [intervalId, setIntervalId] = useState(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      scrollNext();
    };

    const id = setInterval(autoplay, 4000);
    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, [emblaApi, scrollNext]);

  return (
    <div className="relative w-full flex justify-center items-center h-screen overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {/* Slide 1 */}
          <div className="embla__slide min-w-full flex  items-center justify-center min-h-screen relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000ab]"></div>
            <Image
              src="https://i.postimg.cc/65R9df9x/banner1.png"
              alt="Banner 1"
              className="object-cover min-h-full min-w-[100vw]"
              priority
              fill
            />
            <div className="absolute inset-0 flex flex-col gap-7 items-center justify-center text-white text-4xl font-bold">
              <h2 className=" text-3xl text-center md:text-6xl px-8 lg:text-[100px] text-shadow-lg">
                Discover Endless Possibilities
              </h2>
              <button className="text-white font-bold text-xl px-5 py-2 rounded-md hover:bg-orange-800 bg-orange-600 border transition delay-300  border-orange-900">
                Order Now
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="embla__slide min-w-full flex items-center justify-center min-h-screen relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000ab]"></div>
            <Image
              src="https://i.postimg.cc/bNFQt8NB/banner2.jpg"
              alt="Banner 2"
              className="object-cover min-h-full min-w-[100vw]"
              fill
            />
            <div className="absolute inset-0 flex flex-col gap-7 items-center justify-center text-white text-4xl font-bold">
              <h2 className=" text-3xl text-center md:text-6xl px-8 lg:text-[100px] text-shadow-lg">
                Innovation Meets Excellence
              </h2>
              <button className="text-white font-bold text-xl px-5 py-2 rounded-md hover:bg-orange-800 bg-orange-600 border transition delay-300   border-orange-900">
                Order Now
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="embla__slide min-w-full flex  items-center justify-center min-h-screen relative">
            <div className="absolute top-0 left-0 w-full h-full  bg-[#000000ab]"></div>
            <Image
              src="https://i.postimg.cc/tgr52PX9/banner3.jpg"
              alt="Banner 3"
              className="object-cover min-h-full min-w-[100vw]"
              fill
            />
            <div className="absolute inset-0 flex flex-col gap-7 items-center justify-center text-white text-4xl font-bold">
              <h2 className=" text-3xl text-center md:text-6xl px-8 lg:text-[100px] text-shadow-lg">
                Your Journey to Success Starts Here
              </h2>
              <button className="text-white font-bold text-xl px-5 py-2 rounded-md hover:bg-orange-800 bg-orange-600 border transition delay-300  border-orange-900">
                Order Now
              </button>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="embla__slide min-w-full flex  items-center justify-center min-h-screen relative">
            <div className="absolute top-0 left-0 w-full h-full  bg-[#000000ab]"></div>
            <Image
              src="https://i.postimg.cc/d1L9X11r/banner4.png"
              alt="Banner 4"
              className="object-cover min-h-full min-w-[100vw]"
              fill
            />
            <div className="absolute inset-0 flex flex-col gap-7 items-center justify-center text-white text-4xl font-bold">
              <h2 className=" text-3xl text-center md:text-6xl px-8 lg:text-[100px] text-shadow-lg">
                Crafting the Future, Today
              </h2>
              <button className="text-white font-bold text-xl px-5 py-2 rounded-md hover:bg-orange-800 bg-orange-600 border transition delay-300  border-orange-900">
                Order Now
              </button>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="embla__slide min-w-full flex  items-center justify-center min-h-screen relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000ab]"></div>
            <Image
              src={banner5}
              alt="Banner 5"
              className="object-cover min-h-full min-w-[100vw]"
              // fill
            />
            <div className="absolute inset-0 flex flex-col gap-7 items-center justify-center text-white text-4xl font-bold">
              <h2 className=" text-3xl text-center md:text-6xl lg:text-[100px] px-8 text-shadow-lg">
                Empowering Ideas, Transforming Lives
              </h2>
              <button className="text-white font-bold text-xl px-5 py-2 rounded-md hover:bg-orange-800 bg-orange-600 border transition delay-300  border-orange-900">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 text-white rounded-full"
        onClick={scrollPrev}
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 text-white rounded-full"
        onClick={scrollNext}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Banner;
