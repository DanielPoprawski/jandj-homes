import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Nav() {
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);

      const NavLinkStyles = "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
      const defaultNavLinkStyles = `border-transparent text-gray-300 hover:border-yellow-300 hover:text-white ${NavLinkStyles}`;

      const activeStyle =
            "inline-flex items-center px-1 pt-1 border-b-2 border-yellow-500 text-white text-sm font-medium";
      const inactiveStyle =
            "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-gray-300 hover:border-yellow-300 hover:text-white text-sm font-medium";

      return (
            <nav className="px-4 mx-auto bg-gray-800 shadow-lg">
                  <div className="flex h-16 mx-auto max-w-7xl">
                        <div className="flex items-center flex-shrink-0">
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
                                    <a
                                          href="#"
                                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                          className={`${inactiveStyle} h-full`}
                                    >
                                          Services
                                          <svg
                                                className="ml-2 h-4 w-4 relative top-0.5"
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
                                    </a>
                                    <div
                                          className={`absolute z-20 w-48 py-2 mt-2 bg-gray-800 rounded-md shadow-xl shadow-gray-600 ${
                                                !isDropdownOpen && "hidden"
                                          }`}
                                    >
                                          <NavLink
                                                onClick={() => {
                                                      setIsDropdownOpen(false);
                                                }}
                                                to={`/services/remodeling`}
                                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                                          >
                                                Remodeling
                                          </NavLink>
                                          <NavLink
                                                onClick={() => {
                                                      setIsDropdownOpen(false);
                                                }}
                                                to={`/services/cleaning`}
                                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                                          >
                                                Cleaning
                                          </NavLink>
                                          <NavLink
                                                onClick={() => {
                                                      setIsDropdownOpen(false);
                                                }}
                                                to={`/services/roofing`}
                                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                                          >
                                                Roofing
                                          </NavLink>
                                          <NavLink
                                                onClick={() => {
                                                      setIsDropdownOpen(false);
                                                }}
                                                to={`/services/tiles`}
                                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                                          >
                                                Tiles
                                          </NavLink>
                                    </div>
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
