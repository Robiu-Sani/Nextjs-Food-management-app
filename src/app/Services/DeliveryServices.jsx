// DeliveryServices.jsx

import Image from "next/image";
import { FaTruck, FaClock, FaShieldAlt, FaThumbsUp } from "react-icons/fa";

export default function DeliveryServices() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Delivery Services
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Fast, secure, and reliable delivery service tailored to bring our
          delicious meals straight to your door.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://i.postimg.cc/VLhtPrwf/i-P0-Bsy-Yh0-IYg-Ach-UCKTAQqclxy-I.webp" // Replace with actual image path in the public folder
            alt="Delivery Service"
            width={600}
            height={400}
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>

        {/* Information Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Our delivery service is designed to be as efficient and convenient
            as possible. With trained drivers and dedicated customer service, we
            make sure your order arrives on time and in perfect condition.
          </p>

          <div className="space-y-4">
            {/* Delivery Speed */}
            <div className="flex items-center text-orange-500">
              <FaTruck className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Fast Delivery
                </h3>
                <p className="text-gray-700">
                  Our delivery team ensures that your food arrives quickly,
                  maintaining the quality and temperature of each dish.
                </p>
              </div>
            </div>

            {/* Timely Service */}
            <div className="flex items-center text-orange-500">
              <FaClock className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Timely Service
                </h3>
                <p className="text-gray-700">
                  We pride ourselves on prompt delivery times. Track your order
                  in real-time and get your meal exactly when you need it.
                </p>
              </div>
            </div>

            {/* Secure and Safe */}
            <div className="flex items-center text-orange-500">
              <FaShieldAlt className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Safe and Secure
                </h3>
                <p className="text-gray-700">
                  Our packaging and delivery process prioritize food safety, so
                  your order reaches you fresh and secure every time.
                </p>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="flex items-center text-orange-500">
              <FaThumbsUp className="text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Quality Assurance
                </h3>
                <p className="text-gray-700">
                  Each delivery is checked for quality and freshness, ensuring
                  an exceptional dining experience from us to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
