"use client";
import { FaGithub, FaLinkedin, FaBlog, FaInstagram } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add scroll listener to toggle navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`h-16 bg-purple-700 flex justify-between items-center text-white px-5 sm:px-10 relative z-50 ${
        isScrolled ? "fixed top-0 left-0 w-full shadow-lg" : ""
      }`}
    >
      {/* Logo */}
      <div className="logo font-bold text-2xl">
        <Link href="/">
          <img src="/log.png" width={200} height={100} alt="" />
        </Link>
      </div>

      {/* Hamburger Menu for small devices */}
      {!isMenuOpen && (
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            <FaBars size={24} />
          </button>
        </div>
      )}

      {/* Menu Items */}
      <ul
        className={`fixed sm:static top-0 left-0 w-full sm:w-auto h-full sm:h-auto bg-purple-700 flex flex-col sm:flex-row items-center gap-6 sm:gap-4 justify-start transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        style={{ zIndex: 40 }}
      >
        {/* Add padding above the first link (only for small devices) */}
        <style jsx>{`
          @media (max-width: 640px) {
            ul li:first-of-type {
              margin-top: 1rem;
            }
          }
        `}</style>

        {/* Close Icon */}
        {isMenuOpen && (
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white focus:outline-none sm:hidden"
            aria-label="Close Menu"
          >
            <FaTimes size={24} />
          </button>
        )}

        <Link href="/" onClick={closeMenu}>
          <li className="py-2 sm:py-0 text-center text-white w-full sm:w-auto">
            Home
          </li>
        </Link>
        <Link href="/about" onClick={closeMenu}>
          <li className="py-2 sm:py-0 text-center text-white w-full sm:w-auto">
            About
          </li>
        </Link>
        <Link href="/shorten" onClick={closeMenu}>
          <li className="py-2 sm:py-0 text-center text-white w-full sm:w-auto">
            Shorten
          </li>
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          <li className="py-2 sm:py-0 text-center text-white w-full sm:w-auto">
            Contact
          </li>
        </Link>

        {/* Buttons */}
        <li className="flex flex-col sm:flex-row gap-3 items-center justify-center py-4 sm:py-0">
          <Link href="/shorten">
            <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-purple-600 transition-all duration-300">
              Try Now
            </button>
          </Link>
          <Link href="https://github.com/Codewithsalim12">
            <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold flex justify-center gap-2 hover:bg-purple-600 transition-all duration-300">
              <a
                href="https://github.com/Codewithsalim12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:text-purple-300 text-black" />
              </a>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
