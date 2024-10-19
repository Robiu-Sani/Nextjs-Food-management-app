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
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="embla w-full h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {/* Slide 1 */}
          <div className="embla__slide relative min-w-full h-full flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/65R9df9x/banner1.png"
              alt="Banner 1"
              className="absolute object-cover"
              fill
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-6xl lg:text-[100px] font-bold leading-tight">
                Discover Endless Possibilities
              </h2>
              <button className="mt-4 px-8 py-3 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-800 transition duration-300">
                Order Now
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="embla__slide relative min-w-full h-full flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/bNFQt8NB/banner2.jpg"
              alt="Banner 2"
              className="absolute object-cover"
              fill
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-6xl lg:text-[100px] font-bold leading-tight">
                Innovation Meets Excellence
              </h2>
              <button className="mt-4 px-8 py-3 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-800 transition duration-300">
                Order Now
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="embla__slide relative min-w-full h-full flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/tgr52PX9/banner3.jpg"
              alt="Banner 3"
              className="absolute object-cover"
              fill
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-6xl lg:text-[100px] font-bold leading-tight">
                Your Journey to Success Starts Here
              </h2>
              <button className="mt-4 px-8 py-3 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-800 transition duration-300">
                Order Now
              </button>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="embla__slide relative min-w-full h-full flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/d1L9X11r/banner4.png"
              alt="Banner 4"
              className="absolute object-cover"
              fill
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-6xl lg:text-[100px] font-bold leading-tight">
                Crafting the Future, Today
              </h2>
              <button className="mt-4 px-8 py-3 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-800 transition duration-300">
                Order Now
              </button>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="embla__slide relative min-w-full h-full flex items-center justify-center">
            <Image
              src={banner5}
              alt="Banner 5"
              className="absolute object-cover"
              fill
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-6xl lg:text-[100px] font-bold leading-tight">
                Empowering Ideas, Transforming Lives
              </h2>
              <button className="mt-4 px-8 py-3 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-800 transition duration-300">
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
