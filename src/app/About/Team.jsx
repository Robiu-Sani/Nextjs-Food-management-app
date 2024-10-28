import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    description:
      "Alice is a visionary leader with over 15 years of experience in the tech industry, driving innovation and strategic growth.",
    imageUrl:
      "https://img.freepik.com/free-photo/bearded-man-with-striped-shirt_273609-7180.jpg",
  },
  {
    name: "Michael Brown",
    role: "Chief Technology Officer",
    description:
      "Michael leads the tech team with a passion for developing scalable and robust solutions that drive company success.",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Sophia Lee",
    role: "Head of Marketing",
    description:
      "Sophia is a creative mind who builds brands, drives engagement, and creates meaningful connections with our audience.",
    imageUrl:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
  },
];

export default function Team() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Team</h2>
        <p className="text-lg text-gray-600 mt-2">
          Meet the talented individuals who bring our vision to life.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-6 transition duration-300 hover:bg-orange-500 hover:text-white"
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={member.imageUrl}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-orange-500"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 text-center">{member.role}</p>
            <p className="text-center mt-3 text-gray-700 hover:text-gray-100">
              {member.description}
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
