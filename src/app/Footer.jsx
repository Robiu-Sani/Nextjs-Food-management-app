import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-gray-950 text-white py-10 px-5">
      <div className="container mx-auto grid md:grid-cols-4 gap-5">
        {/* Logo and App Store Links */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Feast-Frame</h2>
          <p className="mb-3">Delicious food at your doorstep. Order now!</p>
          <div className="flex space-x-3 mb-3">
            {/* <img
              src="/path-to-playstore-image.png"
              alt="Download on PlayStore"
              className="w-32 h-auto"
            />
            <img
              src="/path-to-appstore-image.png"
              alt="Download on AppStore"
              className="w-32 h-auto"
            /> */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:underline">
              <a href="#">Home</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Products</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Menus</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Services</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Important Links & Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-3">Important Links</h3>
          <ul>
            <li className="mb-2 hover:underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">FAQs</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        {/* Subscribe Section */}
        <div className="container mx-auto mt-5">
          <h3 className="text-xl font-bold mb-3 text-center">
            Subscribe to our Newsletter
          </h3>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md w-64 border-none text-black"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
              Subscribe
            </button>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 border-t border-gray-700 pt-3">
        <p>&copy; 2024 Feast-Frame. All Rights Reserved.</p>
      </div>
    </div>
  );
}
