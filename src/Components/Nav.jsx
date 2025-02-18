import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import { ChevronDown, House } from "lucide-react";

export default function Nav() {
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const dropdownRef = useRef(null);
      const buttonRef = useRef(null);

      // Base styles shared by both active and inactive states
      const baseNavLinkStyle = "inline-flex items-center px-1 pt-1 border-b-2 text-md ";

      // Additional styles for active and inactive states
      const activeStyle = `${baseNavLinkStyle} border-yellow-500 text-white font-bold`;
      const inactiveStyle = `${baseNavLinkStyle} border-transparent text-gray-300 font-semibold hover:border-yellow-300 hover:text-white`;

      // Dropdown nav link styles (base + variants)
      const baseDropdownLinkStyle = "block px-4 py-2 text-sm";
      const activeDropdownStyle = `${baseDropdownLinkStyle} bg-gray-700 text-yellow-500`;
      const inactiveDropdownStyle = `${baseDropdownLinkStyle} text-gray-200 hover:bg-gray-600`;

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

      // Dropdown menu items for reuse
      const dropdownItems = [
            { to: "/services/remodeling", label: "Remodeling" },
            { to: "/services/cleaning", label: "Cleaning" },
            { to: "/services/roofing", label: "Roofing" },
            { to: "/services/tiles", label: "Tiles" },
      ];

      return (
            <nav className="px-4 mx-auto bg-gray-800 shadow-lg sticky top-0 z-50">
                  <div className="flex h-16 mx-auto max-w-7xl">
                        <div className="flex items-center flex-shrink-0">
                              <Link to="/">
                                    <House className="text-yellow-500 w-8 h-8" />
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
                                          className={`${inactiveStyle} h-full focus:outline-none cursor-pointer`}
                                          aria-expanded={isDropdownOpen}
                                          aria-haspopup="true"
                                    >
                                          Services
                                          <ChevronDown
                                                className={`ml-2 h-4 w-4 relative top-0.5 transition-transform duration-200 ${
                                                      isDropdownOpen ? "transform rotate-180" : ""
                                                }`}
                                          />
                                    </button>
                                    {isDropdownOpen && (
                                          <div
                                                ref={dropdownRef}
                                                className="absolute z-20 w-48 py-2 mt-2 bg-gray-800 rounded-md shadow-xl shadow-gray-600"
                                          >
                                                {dropdownItems.map((item) => (
                                                      <NavLink
                                                            key={item.to}
                                                            to={item.to}
                                                            className={({ isActive }) =>
                                                                  isActive ? activeDropdownStyle : inactiveDropdownStyle
                                                            }
                                                      >
                                                            {item.label}
                                                      </NavLink>
                                                ))}
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
