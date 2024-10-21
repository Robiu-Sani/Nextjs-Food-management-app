"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname instead of useRouter
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import react-icons
import image from "../../_images/logo.webp";
import userImg from "../../_images/user.png"; // Renaming to avoid conflict with 'user' data
import toast, { Toaster } from "react-hot-toast";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
  const [callBox, setCallBox] = useState(false); // Toggle for the user options dropdown
  const [user, setUser] = useState(null); // State to store user data from localStorage
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // Check localStorage for user data on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set the user data in state if found
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close
  };

  const handleCallBox = () => {
    setCallBox(!callBox); // Toggle the user dropdown
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage on logout
    setUser(null); // Clear the user data from state
    toast.success("LogOut successful!");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Products", label: "Products" },
    { href: "/Menus", label: "Menus" },
    { href: "/Services", label: "Services" },
    { href: "/About", label: "About Us" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <div className="blurBg w-full p-3 fixed top-0 z-[9999]">
      <Toaster className="!z-[10000] absolute top-10" />
      <div className="container mx-auto flex justify-between items-center gap-2">
        <Link href="/" className="flex justify-center items-center gap-3">
          <Image src={image} alt="Logo" className="w-12" />
          <h2 className="text-2xl font-extrabold hidden sm:block">
            Feast-<span className="text-orange-600">Frame</span>
          </h2>
        </Link>

        <div className="flex items-center gap-3">
          {/* Menu items */}
          <div
            className={`${
              menuOpen ? "flex blurBg" : "hidden"
            } md:flex flex-col md:flex-row justify-center items-center gap-5 absolute md:static top-[60px] left-0 md:left-auto w-full md:w-auto  md:bg-transparent p-5 md:p-0 md:shadow-none shadow-lg`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-orange-600" : ""
                } font-bold hover:text-orange-600 transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Conditionally render based on user data */}
          {user ? (
            // User Profile section if user is logged in
            <div className="relative cursor-pointer">
              <Image
                src={userImg} // Display user's profile picture or default image
                alt="User photo"
                onClick={handleCallBox}
                className="w-12 rounded-full border"
              />

              <div
                onClick={handleCallBox}
                className={`border blurBg p-2  w-[200px] absolute top-[65px] flex flex-col gap-1 ${
                  callBox ? "right-0" : "-right-[20000%]"
                }`}
              >
                <h3 className="text-xl my-2 font-bold text-center">
                  {user.name}
                </h3>
                <Link
                  href="/Notifections"
                  className={`${
                    pathname === "/Notifections" ? "text-orange-600" : ""
                  } font-bold hover:text-orange-600 transition-colors`}
                >
                  Notifications
                </Link>
                <Link
                  href="/Profile"
                  className={`${
                    pathname === "/Profile" ? "text-orange-600" : ""
                  } font-bold hover:text-orange-600 transition-colors`}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout} // Call handleLogout to log the user out
                  className="font-bold p-1 rounded hover:bg-gray-100 w-full blurBg text-red-600 hover:text-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // Login button if user is not logged in
            <Link
              href="/Authcation/Login"
              className="px-4 p-2 rounded-md text-white bg-orange-500 hover:bg-orange-600"
            >
              Login
            </Link>
          )}

          {/* Menu button for small screens */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl focus:outline-none"
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
    </div>
  );
}
