"use client";
import { useState } from "react";
import Image from "next/image";
import user1 from "../../_images/user.jpeg";
import user2 from "../../_images/user1.png";
import user3 from "../../_images/user2.jpeg";
import testImage from "../../_images/testmonial.jpeg"; // Replace this with the correct path to your background image

export default function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      review: "This service was amazing! I would highly recommend it.",
      profile: user1, // Place your profile images in the 'public/images' folder
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "Great experience, friendly staff, and excellent service.",
      profile: user2, // Ensure these images exist in the 'public/images' folder
      rating: 4,
    },
    {
      name: "Alice Johnson",
      review: "The food was delicious and delivered on time!",
      profile: user3, // Make sure image paths are correct
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Testimonial Section */}
        <div className="col-span-1 sm:col-span-2 flex w-full flex-col items-center gap-5">
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={previousTestimonial}
              className="text-xl p-2 rounded-full bg-gray-200 hover:bg-gray-400 transition"
            >
              {"<"}
            </button>

            {/* Testimonial Card */}
            <div className="flex flex-col items-center p-5 w-full">
              <Image
                src={testimonials[currentIndex].profile}
                alt={testimonials[currentIndex].name}
                // layout="fill"
                className="!w-[80px] !h-[80px] rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold mt-3">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {testimonials[currentIndex].review}
              </p>
              <div className="flex mt-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="text-xl p-2 rounded-full bg-gray-200 hover:bg-gray-400 transition"
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Background Image Section */}
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src={testImage}
            alt="Background"
            className="w-[80%] rounded-lg"
            // layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
