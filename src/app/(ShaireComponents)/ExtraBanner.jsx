import React from "react";

export default function ExtraBanner() {
  return (
    <div className="w-full  min-h-[70vh] py-12">
      <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center">
        {/* Video Container */}
        <div className="w-full flex justify-center items-center">
          <video className="max-w-[70%] max-h-full h-auto " autoPlay loop muted>
            <source
              src="https://bettermeter-s3-buckets-analytics-cache-dev.s3.amazonaws.com/assets/designstripe/assets.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Container */}
        <div className="w-full flex flex-col justify-center items-start space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Discover Innovative Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Our platform provides cutting-edge tools to help you monitor and
            analyze your data with ease. Take advantage of our advanced features
            to improve your business operations.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
