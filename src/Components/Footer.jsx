import React from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
      const currentYear = new Date().getFullYear();

      return (
            <footer className="bg-gray-800 text-gray-200 mt-auto">
                  <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div>
                                    <h3 className="text-yellow-500 font-bold text-lg mb-4">J&J Home Improvement</h3>
                                    <p className="mb-4">Quality European remodeling and cleaning services.</p>
                                    <div className="flex items-center mb-2">
                                          <Phone size={16} className="mr-2 text-yellow-500" />
                                          <span>(941) 278-0528</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                          <Mail size={16} className="mr-2 text-yellow-500" />
                                          <span>info@jandj-homes.com</span>
                                    </div>
                                    <div className="flex items-center">
                                          <MapPin size={16} className="mr-2 text-yellow-500" />
                                          <span>500 Clark Road, Sarasota, Florida 34231</span>
                                    </div>
                              </div>

                              <div>
                                    <h3 className="text-yellow-500 font-bold text-lg mb-4">Services</h3>
                                    <ul className="space-y-2">
                                          <li>
                                                <Link
                                                      to="/services/remodeling"
                                                      className="hover:text-yellow-500 transition-colors"
                                                >
                                                      Remodeling
                                                </Link>
                                          </li>
                                          <li>
                                                <Link
                                                      to="/services/cleaning"
                                                      className="hover:text-yellow-500 transition-colors"
                                                >
                                                      Cleaning
                                                </Link>
                                          </li>
                                          <li>
                                                <Link
                                                      to="/services/roofing"
                                                      className="hover:text-yellow-500 transition-colors"
                                                >
                                                      Roofing
                                                </Link>
                                          </li>
                                          <li>
                                                <Link
                                                      to="/services/tiles"
                                                      className="hover:text-yellow-500 transition-colors"
                                                >
                                                      Tiles
                                                </Link>
                                          </li>
                                    </ul>
                                    <h3 className="text-yellow-500 font-bold text-lg mt-4 mb-2">Company</h3>
                                    <ul className="space-y-2">
                                          <li>
                                                <Link to="/about" className="hover:text-yellow-500 transition-colors">
                                                      About Us
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to="/contact" className="hover:text-yellow-500 transition-colors">
                                                      Contact
                                                </Link>
                                          </li>
                                    </ul>
                              </div>

                              <div>
                                    <h3 className="text-yellow-500 font-bold text-lg mb-4">Business Hours</h3>
                                    <div className="space-y-2">
                                          <div className="flex items-center">
                                                <Clock size={16} className="mr-2 text-yellow-500" />
                                                <span className="font-medium">Monday - Saturday:</span>
                                                <span className="ml-auto">9:00 AM - 5:00 PM</span>
                                          </div>
                                          <div className="flex items-center">
                                                <Clock size={16} className="mr-2 text-yellow-500" />
                                                <span className="font-medium">Sunday:</span>
                                                <span className="ml-auto">Closed</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div className="bg-gray-900 py-4 px-4">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                              <div className="mb-2 md:mb-0">
                                    Copyright &copy; {currentYear} J&J Home Improvement. All rights reserved.
                              </div>
                        </div>
                  </div>
            </footer>
      );
}
