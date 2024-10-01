"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname instead of useRouter
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import react-icons

import image from "../../_images/logo.webp";
import user from "../../_images/user.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
  const [CallBox, setCallBox] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close
  };

  const HandleCallBox = () => {
    setCallBox(!CallBox);
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
    <div className="blurBg w-full p-3 fixed top-0 z-[9999999]">
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

          {/* User icon */}
          <div className="relative cursor-pointer">
            <Image
              src={user}
              alt="User photo"
              onClick={HandleCallBox}
              className="w-12 rounded-full border"
            />
            <div className="flex justify-center items-center bg-red-600 w-5 h-5 rounded-full absolute top-0 -right-2 text-white text-sm">
              55
            </div>
            <div
              onClick={HandleCallBox}
              className={`border blurBg p-2 px-5 absolute  top-[65px] flex flex-col gap-1 ${
                CallBox ? "right-0" : "-right-[20000%]"
              }`}
            >
              <Link
                href="/Notifections"
                className={`${
                  pathname === navLinks.href ? "text-orange-600" : ""
                } font-bold hover:text-orange-600 transition-colors`}
              >
                Notifications
              </Link>
              <Link
                href="/Profile"
                className={`${
                  pathname === navLinks.href ? "text-orange-600" : ""
                } font-bold hover:text-orange-600 transition-colors`}
              >
                Profile
              </Link>
              <Link
                href="/LogOut"
                className={`${
                  pathname === navLinks.href ? "text-orange-600" : ""
                } font-bold hover:text-orange-600 transition-colors`}
              >
                LogOut
              </Link>
            </div>
          </div>
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
