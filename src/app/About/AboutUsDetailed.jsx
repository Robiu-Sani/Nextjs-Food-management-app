import { FaBullseye, FaHandshake, FaUsers, FaAward } from "react-icons/fa";

const AboutUsDetailed = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover our mission, vision, and dedication to delivering exceptional
          services.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission Section */}
        <div className="flex flex-col items-start p-6 bg-gray-100 rounded-lg shadow-md border-t-4 border-orange-500">
          <div className="flex items-center text-orange-500 text-4xl mb-4">
            <FaBullseye />
            <h3 className="text-2xl font-semibold ml-3">Our Mission</h3>
          </div>
          <p className="text-gray-700">
            Our mission is to provide high-quality services that enhance the
            lives of our clients and contribute to the community. We strive to
            set standards of excellence in every project, focusing on
            innovation, professionalism, and integrity.
          </p>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-start p-6 bg-gray-100 rounded-lg shadow-md border-t-4 border-orange-500">
          <div className="flex items-center text-orange-500 text-4xl mb-4">
            <FaHandshake />
            <h3 className="text-2xl font-semibold ml-3">Our Vision</h3>
          </div>
          <p className="text-gray-700">
            Our vision is to become a leader in our industry, known for
            delivering outstanding service and innovative solutions. We aim to
            foster a positive impact on the community and inspire others to work
            toward a better future.
          </p>
        </div>

        {/* Values Section */}
        <div className="flex flex-col items-start p-6 bg-gray-100 rounded-lg shadow-md border-t-4 border-orange-500">
          <div className="flex items-center text-orange-500 text-4xl mb-4">
            <FaUsers />
            <h3 className="text-2xl font-semibold ml-3">Our Values</h3>
          </div>
          <p className="text-gray-700">
            We value integrity, respect, and teamwork. Our team is dedicated to
            maintaining a culture of trust and collaboration, always
            prioritizing our clients’ needs and working towards shared goals. We
            believe in continuous growth and learning.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="flex flex-col items-start p-6 bg-gray-100 rounded-lg shadow-md border-t-4 border-orange-500">
          <div className="flex items-center text-orange-500 text-4xl mb-4">
            <FaAward />
            <h3 className="text-2xl font-semibold ml-3">Our Achievements</h3>
          </div>
          <p className="text-gray-700">
            Over the years, we have accomplished numerous milestones and
            received various awards for excellence in our field. These
            achievements are a testament to our dedication to quality and our
            clients' trust in our expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDetailed;
