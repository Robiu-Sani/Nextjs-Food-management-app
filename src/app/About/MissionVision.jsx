import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Mission & Vision
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Learn more about our purpose and the values that drive our work every
          day.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Mission Card */}
        <div className="flex-1 p-8 bg-gray-100 rounded-lg shadow-md border-l-8 border-orange-500 hover:bg-orange-500 hover:text-white transition duration-300">
          <div className="flex items-center mb-4 text-orange-500 hover:text-white text-4xl">
            <FaBullseye />
            <h3 className="text-2xl font-semibold ml-3">Our Mission</h3>
          </div>
          <p className="text-gray-700 hover:text-gray-100">
            Our mission is to deliver unparalleled services that exceed
            expectations and create meaningful value. We are dedicated to
            promoting excellence, fostering innovation, and building a trusted
            community of clients who rely on us for quality and integrity.
          </p>
        </div>

        {/* Vision Card */}
        <div className="flex-1 p-8 bg-gray-100 rounded-lg shadow-md border-l-8 border-orange-500 hover:bg-orange-500 hover:text-white transition duration-300">
          <div className="flex items-center mb-4 text-orange-500 hover:text-white text-4xl">
            <FaEye />
            <h3 className="text-2xl font-semibold ml-3">Our Vision</h3>
          </div>
          <p className="text-gray-700 hover:text-gray-100">
            Our vision is to inspire and empower positive change by setting new
            standards in our industry. We aim to expand our reach globally while
            upholding our commitment to quality, integrity, and social
            responsibility, shaping a brighter future for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
