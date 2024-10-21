import React from "react";

export default function ExtraBanner() {
  return (
    <div className="w-full  max-h-[300px] py-12">
      <div className="container mx-auto px-2 flex gap-8 justify-center items-center">
        {/* Video Container */}
        <div className="w-full flex justify-center items-center">
          <video className=" max-h-[250px] h-auto " autoPlay loop muted>
            <source
              src="https://bettermeter-s3-buckets-analytics-cache-dev.s3.amazonaws.com/assets/designstripe/assets.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
