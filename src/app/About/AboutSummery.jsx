import { FaArrowRight } from "react-icons/fa";

export default function AboutSummery() {
  const sections = [
    {
      title: "About Us",
      content:
        "We are located in [Your Location], committed to enhancing community wellbeing by providing quality services. Our focus is on comprehensive solutions and customer satisfaction.",
    },
    {
      title: "Our Mission & Vision",
      content:
        "Our mission is to bridge quality services and sustainable solutions for communities, always prioritizing safety and excellence.",
    },
    {
      title: "Team",
      content:
        "Our team is composed of dedicated professionals, bringing expertise and innovation to ensure exceptional service and customer satisfaction.",
    },
  ];

  const highlights = [
    "Coming Together is Beginning",
    "Checkout Our Products",
    "Working Together is Success",
    "Our Regulatory Services",
    "Keeping Together is Progress",
    "Our Global Presence",
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Upper Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md border-t-4 border-orange-500"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-700">{section.content}</p>
            <button className="flex items-center mt-4 text-orange-500 font-medium hover:text-orange-600">
              Read More <FaArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>

      {/* Lower Highlight Section */}
      <div className="grid md:grid-cols-3 gap-4">
        {highlights.map((text, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg text-center shadow-md ${
              index % 2 == 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <h3
              className={`text-lg font-semibold ${
                index % 2 == 1 ? "text-white" : "text-gray-800"
              }`}
            >
              {text}
            </h3>
            <button
              className={`mt-4 flex items-center justify-center ${
                index % 2 == 1 ? "text-white" : "text-orange-500"
              } hover:text-orange-600`}
            >
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
