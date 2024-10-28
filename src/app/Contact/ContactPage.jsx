"use client";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaClock,
  FaHeadset,
} from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    // Here you can add functionality to send the form data to your backend.
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 text-gray-800 py-16 px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-600">Get In Touch</h1>
        <p className="text-lg text-gray-600 mt-2">
          We’re here to answer any questions you may have. Reach out to us and
          we’ll respond as soon as we can.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {/* Contact Form */}
        <div className="col-span-1 md:col-span-2 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-orange-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <FaPhone className="text-orange-600 mr-3" size={20} />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaEnvelope className="text-orange-600 mr-3" size={20} />
              <span>contact@frestframe.com</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="text-orange-600 mr-3" size={20} />
              <span>123 Main St, Anytown, USA</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaClock className="text-orange-600 mr-3" size={20} />
              <span>Business Hours: Mon - Fri, 9 AM - 5 PM</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaHeadset className="text-orange-600 mr-3" size={20} />
              <span>Live Support: 24/7</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-orange-600 transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-600 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-600 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-600 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
