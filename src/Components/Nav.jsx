import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";

export default function Nav() {
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const dropdownRef = useRef(null);
      const buttonRef = useRef(null);

      const activeStyle =
            "inline-flex items-center px-1 pt-1 border-b-2 border-yellow-500 text-white text-sm font-medium";
      const inactiveStyle =
            "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-gray-300 hover:border-yellow-300 hover:text-white text-sm font-medium";

      // Handle clicks outside of dropdown to close it
      useEffect(() => {
            function handleClickOutside(event) {
                  if (
                        isDropdownOpen &&
                        dropdownRef.current &&
                        !dropdownRef.current.contains(event.target) &&
                        buttonRef.current &&
                        !buttonRef.current.contains(event.target)
                  ) {
                        setIsDropdownOpen(false);
                  }
            }

            // Add event listener when dropdown is open
            if (isDropdownOpen) {
                  document.addEventListener("mousedown", handleClickOutside);
            }

            // Cleanup event listener
            return () => {
                  document.removeEventListener("mousedown", handleClickOutside);
            };
      }, [isDropdownOpen]);

      // Close dropdown when route changes
      useEffect(() => {
            return () => {
                  setIsDropdownOpen(false);
            };
      }, []);

      // Handle escape key press to close dropdown
      useEffect(() => {
            function handleKeyDown(e) {
                  if (e.key === "Escape" && isDropdownOpen) {
                        setIsDropdownOpen(false);
                  }
            }

            window.addEventListener("keydown", handleKeyDown);

            return () => {
                  window.removeEventListener("keydown", handleKeyDown);
            };
      }, [isDropdownOpen]);

      return (
            <nav className="px-4 mx-auto bg-gray-800 shadow-lg sticky top-0 z-50">
                  <div className="flex h-16 mx-auto max-w-7xl">
                        <div className="flex items-center flex-shrink-0">
                              <Link to="/">
                                    <svg
                                          className="w-8 h-8 text-yellow-500"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                    >
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                          />
                                    </svg>
                              </Link>
                        </div>
                        <div className="sm:ml-6 sm:flex sm:space-x-8">
                              <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                                    Home
                              </NavLink>
                              <NavLink
                                    to="/about"
                                    className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                              >
                                    About
                              </NavLink>
                              <div className="relative">
                                    <button
                                          ref={buttonRef}
                                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                          className={`${inactiveStyle} h-full focus:outline-none`}
                                          aria-expanded={isDropdownOpen}
                                          aria-haspopup="true"
                                    >
                                          Services
                                          <svg
                                                className={`ml-2 h-4 w-4 relative top-0.5 transition-transform duration-200 ${
                                                      isDropdownOpen ? "transform rotate-180" : ""
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M19 9l-7 7-7-7"
                                                />
                                          </svg>
                                    </button>
                                    {isDropdownOpen && (
                                          <div
                                                ref={dropdownRef}
                                                className="absolute z-20 w-48 py-2 mt-2 bg-gray-800 rounded-md shadow-xl shadow-gray-600"
                                          >
                                                <NavLink
                                                      to="/services/remodeling"
                                                      className={({ isActive }) =>
                                                            `block px-4 py-2 text-sm ${
                                                                  isActive
                                                                        ? "bg-gray-700 text-yellow-500"
                                                                        : "text-gray-200 hover:bg-gray-600"
                                                            }`
                                                      }
                                                >
                                                      Remodeling
                                                </NavLink>
                                                <NavLink
                                                      to="/services/cleaning"
                                                      className={({ isActive }) =>
                                                            `block px-4 py-2 text-sm ${
                                                                  isActive
                                                                        ? "bg-gray-700 text-yellow-500"
                                                                        : "text-gray-200 hover:bg-gray-600"
                                                            }`
                                                      }
                                                >
                                                      Cleaning
                                                </NavLink>
                                                <NavLink
                                                      to="/services/roofing"
                                                      className={({ isActive }) =>
                                                            `block px-4 py-2 text-sm ${
                                                                  isActive
                                                                        ? "bg-gray-700 text-yellow-500"
                                                                        : "text-gray-200 hover:bg-gray-600"
                                                            }`
                                                      }
                                                >
                                                      Roofing
                                                </NavLink>
                                                <NavLink
                                                      to="/services/tiles"
                                                      className={({ isActive }) =>
                                                            `block px-4 py-2 text-sm ${
                                                                  isActive
                                                                        ? "bg-gray-700 text-yellow-500"
                                                                        : "text-gray-200 hover:bg-gray-600"
                                                            }`
                                                      }
                                                >
                                                      Tiles
                                                </NavLink>
                                          </div>
                                    )}
                              </div>
                              <NavLink
                                    to="/contact"
                                    className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                              >
                                    Contact
                              </NavLink>
                        </div>
                  </div>
            </nav>
      );
}
