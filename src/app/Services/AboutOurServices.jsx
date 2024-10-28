// AboutOurServices.jsx

import Image from "next/image";
import {
  FaUtensils,
  FaConciergeBell,
  FaPizzaSlice,
  FaAppleAlt,
  FaFish,
  FaBreadSlice,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUtensils />,
    title: "Fine Dining Experience",
    description:
      "Our fine dining service provides a luxurious atmosphere, merging high-quality ingredients with world-class service. Each dish is crafted meticulously, reflecting elegance and sophistication. Indulge in flavors from around the world, served with the finest wines and tailored to elevate your culinary journey.",
    imageUrl: "https://i.postimg.cc/ZK233BC9/images.jpg", // Replace with your actual image path in the public folder
  },
  {
    icon: <FaConciergeBell />,
    title: "Professional Catering",
    description:
      "From corporate events to family celebrations, our catering service offers a tailored dining experience. Each dish is artistically presented, catering to a variety of dietary needs while upholding the highest quality and flavor standards. Trust us to make your event memorable with a service designed for elegance and efficiency.",
    imageUrl:
      "https://i.postimg.cc/tgtVLBDP/catering-service-smile-stockcake.jpg",
  },
  {
    icon: <FaPizzaSlice />,
    title: "Quick & Delicious Fast Food",
    description:
      "Our fast food menu is crafted for speed without sacrificing quality. We use fresh ingredients to bring you a satisfying meal on the go. Our selection includes all-time favorites, from burgers and fries to unique seasonal options, perfect for a quick yet enjoyable dining experience.",
    imageUrl:
      "https://i.postimg.cc/XqhZwm7M/crispy-sweet-potato-paleo-nachos-41916-2.webp",
  },
];

export default function AboutOurServices() {
  return (
    <div className="container mx-auto px-3 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">About Our Services</h2>
        <p className="text-lg text-gray-600 mt-4">
          Discover the diverse culinary experiences we bring to every event and
          meal.
        </p>
      </div>

      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 my-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={600} // Adjust width to fit your layout
              height={400} // Adjust height to fit your layout
              className="rounded-lg  transition-transform transform  duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex items-center text-orange-500 text-3xl">
              {service.icon}
              <h3 className="text-2xl font-semibold ml-3">{service.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
