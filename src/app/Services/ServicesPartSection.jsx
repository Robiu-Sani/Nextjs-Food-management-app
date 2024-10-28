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
    title: "Fine Dining",
    description:
      "Experience an unforgettable, luxurious dining experience with top-notch service, carefully crafted meals, and an ambiance that enhances every bite.",
  },
  {
    icon: <FaConciergeBell />,
    title: "Catering",
    description:
      "Our catering services bring elegance to your events, providing tailored menus and exceptional service to meet all your special occasion needs.",
  },
  {
    icon: <FaPizzaSlice />,
    title: "Fast Food",
    description:
      "Satisfy your cravings quickly with a delicious selection of fast food items that don’t compromise on taste or quality.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Healthy Eating",
    description:
      "Delicious and nutritious meals curated to support a healthy lifestyle, without sacrificing flavor or variety.",
  },
  {
    icon: <FaFish />,
    title: "Seafood",
    description:
      "Indulge in the freshest seafood dishes, prepared to perfection, bringing you flavors straight from the ocean.",
  },
  {
    icon: <FaBreadSlice />,
    title: "Bakery",
    description:
      "Enjoy a variety of freshly baked goods, from breads to pastries, each crafted with quality ingredients and love.",
  },
];

export default function ServicesPartSection() {
  return (
    <div className="container mx-auto px-3">
      <div className="py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600">
            Explore our range of services designed to elevate your dining
            experience
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200  shadow-md text-center transition duration-300 transform hover:bg-orange-500 hover:!text-white hover:-translate-y-2"
            >
              <div className="flex items-center justify-center text-orange-500 hover:text-white text-5xl mb-4 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700 hover:text-gray-100 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
