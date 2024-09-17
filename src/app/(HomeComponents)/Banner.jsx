"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import banner1 from "../../_images/banner1.jpg";
import banner2 from "../../_images/banner2.jpg";
import banner3 from "../../_images/banner3.jpeg";
import banner4 from "../../_images/banner4.jpg";
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
          <div className="embla__slide min-w-full flex items-center justify-center min-h-screen relative">
            <Image
              src={banner1}
              alt="Banner 1"
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <h2>Welcome to Slide 1</h2>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="embla__slide min-w-full flex items-center justify-center min-h-screen relative">
            <Image
              src={banner2}
              alt="Banner 2"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <h2>Welcome to Slide 2</h2>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="embla__slide min-w-full flex items-center justify-center min-h-screen relative">
            <Image
              src={banner3}
              alt="Banner 3"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <h2>Welcome to Slide 3</h2>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="embla__slide min-w-full flex items-center justify-center min-h-screen relative">
            <Image
              src={banner4}
              alt="Banner 4"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <h2>Welcome to Slide 4</h2>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="embla__slide min-w-full flex items-center justify-center min-h-screen relative">
            <Image
              src={banner5}
              alt="Banner 5"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <h2>Welcome to Slide 5</h2>
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