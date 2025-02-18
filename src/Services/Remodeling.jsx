import React from "react";
import { Link } from "react-router";
import { ArrowRight, Check, Hammer, Home, PaintBucket, Star, Clock, Droplet } from "lucide-react";

export default function Remodeling() {
      return (
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
                  {/* Hero Section - Using a more dramatic layout with a gradient overlay */}
                  <div className="relative">
                        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                        <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
                              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                                    Transform Your <span className="text-yellow-400">Living Space</span>
                              </h1>
                              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                                    Premium remodeling services that bring your vision to life with expert craftsmanship
                                    and attention to detail.
                              </p>
                              <div className="mt-10 flex justify-center">
                                    <Link
                                          to="/contact"
                                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300"
                                    >
                                          Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                              </div>
                        </div>
                  </div>

                  {/* Featured Projects - Using a diagonal layout for visual interest */}
                  <div className="py-16 bg-gray-800 skew-y-3">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -skew-y-3">
                              <div className="lg:text-center mb-12">
                                    <p className="text-base font-semibold tracking-wide uppercase text-yellow-400">
                                          Showcased Work
                                    </p>
                                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                                          Our Latest Transformations
                                    </h2>
                              </div>

                              {/* Project Grid with hover effects */}
                              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
                                    {/* Kitchen Project */}
                                    <div className="overflow-hidden rounded-xl shadow-lg group">
                                          <div className="relative">
                                                <img
                                                      src="/api/placeholder/800/500"
                                                      alt="Kitchen Remodeling"
                                                      className="w-full object-cover h-64 transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                                                <div className="absolute bottom-0 left-0 p-6">
                                                      <h3 className="text-3xl font-bold text-white">
                                                            Luxury Kitchen Renovation
                                                      </h3>
                                                      <p className="mt-2 text-gray-300">Westlake Hills, Austin</p>
                                                </div>
                                          </div>
                                          <div className="p-6 bg-gray-900">
                                                <p className="text-gray-300">
                                                      Complete transformation featuring custom cabinetry, quartz
                                                      countertops, and professional-grade appliances.
                                                </p>
                                                <div className="mt-4 flex items-center">
                                                      <div className="flex text-yellow-400">
                                                            {[...Array(5)].map((_, i) => (
                                                                  <Star key={i} className="h-4 w-4 fill-current" />
                                                            ))}
                                                      </div>
                                                      <p className="ml-2 text-sm text-gray-400">Completed in 6 weeks</p>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Bathroom Project */}
                                    <div className="overflow-hidden rounded-xl shadow-lg group">
                                          <div className="relative">
                                                <img
                                                      src="/api/placeholder/800/500"
                                                      alt="Bathroom Remodeling"
                                                      className="w-full object-cover h-64 transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                                                <div className="absolute bottom-0 left-0 p-6">
                                                      <h3 className="text-3xl font-bold text-white">
                                                            Spa-Inspired Bathroom
                                                      </h3>
                                                      <p className="mt-2 text-gray-300">Barton Creek, Austin</p>
                                                </div>
                                          </div>
                                          <div className="p-6 bg-gray-900">
                                                <p className="text-gray-300">
                                                      Floor-to-ceiling marble, rainfall shower, freestanding tub, and
                                                      smart technology throughout.
                                                </p>
                                                <div className="mt-4 flex items-center">
                                                      <div className="flex text-yellow-400">
                                                            {[...Array(5)].map((_, i) => (
                                                                  <Star key={i} className="h-4 w-4 fill-current" />
                                                            ))}
                                                      </div>
                                                      <p className="ml-2 text-sm text-gray-400">Completed in 4 weeks</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Our Services - Using a unique card design */}
                  <div className="py-24 bg-gray-900">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center mb-16">
                                    <p className="text-base font-semibold tracking-wide uppercase text-yellow-400">
                                          Comprehensive Solutions
                                    </p>
                                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                                          Premium Remodeling Services
                                    </h2>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                                          From concept to completion, our expert team delivers exceptional craftsmanship
                                          and attention to detail.
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                                    {/* Kitchen Remodeling */}
                                    <div className="relative group">
                                          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                                          <div className="relative bg-gray-800 p-6 rounded-lg h-full flex flex-col">
                                                <div className="h-14 w-14 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center">
                                                      <PaintBucket className="h-8 w-8 text-gray-900" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">
                                                      Kitchen Remodeling
                                                </h3>
                                                <p className="text-gray-400 mb-6 flex-grow">
                                                      Transform your kitchen into a modern, functional space with custom
                                                      cabinets, premium countertops, and high-end appliances.
                                                </p>
                                                <ul className="space-y-2">
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Custom cabinetry
                                                            </span>
                                                      </li>
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Premium countertops
                                                            </span>
                                                      </li>
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Designer fixtures
                                                            </span>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>

                                    {/* Bathroom Remodeling */}
                                    <div className="relative group">
                                          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                                          <div className="relative bg-gray-800 p-6 rounded-lg h-full flex flex-col">
                                                <div className="h-14 w-14 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center">
                                                      <Droplet className="h-8 w-8 text-gray-900" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">
                                                      Bathroom Remodeling
                                                </h3>
                                                <p className="text-gray-400 mb-6 flex-grow">
                                                      Create your dream bathroom with luxury fixtures, premium
                                                      materials, and expert installation for a spa-like experience.
                                                </p>
                                                <ul className="space-y-2">
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Custom shower designs
                                                            </span>
                                                      </li>
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Luxury bathtubs
                                                            </span>
                                                      </li>
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Premium tile work
                                                            </span>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>

                                    {/* Room Additions */}
                                    <div className="relative group">
                                          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                                          <div className="relative bg-gray-800 p-6 rounded-lg h-full flex flex-col">
                                                <div className="h-14 w-14 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center">
                                                      <Home className="h-8 w-8 text-gray-900" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">Room Additions</h3>
                                                <p className="text-gray-400 mb-6 flex-grow">
                                                      Expand your living space with custom room additions, seamlessly
                                                      integrated with your existing home architecture.
                                                </p>
                                                <ul className="space-y-2">
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Architectural design
                                                            </span>
                                                      </li>
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Permit management
                                                            </span>
                                                      </li>
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Complete construction
                                                            </span>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>

                                    {/* Whole House Renovation */}
                                    <div className="relative group">
                                          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                                          <div className="relative bg-gray-800 p-6 rounded-lg h-full flex flex-col">
                                                <div className="h-14 w-14 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center">
                                                      <Hammer className="h-8 w-8 text-gray-900" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">
                                                      Whole House Renovation
                                                </h3>
                                                <p className="text-gray-400 mb-6 flex-grow">
                                                      Complete home transformation with comprehensive remodeling
                                                      services for every room in your house.
                                                </p>
                                                <ul className="space-y-2">
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Design consultation
                                                            </span>
                                                      </li>
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Project management
                                                            </span>
                                                      </li>
                                                      <li className="flex items-start">
                                                            <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                                                            <span className="text-gray-300 text-sm">
                                                                  Complete renovation
                                                            </span>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Our Process - Timeline format */}
                  <div className="py-24 bg-gray-800">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center mb-16">
                                    <p className="text-base font-semibold tracking-wide uppercase text-yellow-400">
                                          Our Approach
                                    </p>
                                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                                          The J&J Homes Remodeling Process
                                    </h2>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                                          We follow a streamlined process to ensure your project is completed on time,
                                          within budget, and exceeds your expectations.
                                    </p>
                              </div>

                              <div className="relative">
                                    {/* Vertical line */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>

                                    {/* Step 1 */}
                                    <div className="relative mb-16">
                                          <div className="flex items-center justify-center">
                                                <div className="flex items-center justify-center z-10 w-12 h-12 bg-yellow-400 rounded-full text-gray-900 font-bold text-xl">
                                                      1
                                                </div>
                                          </div>
                                          <div className="mt-6 bg-gray-900 rounded-lg p-6 shadow-lg">
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                      Consultation & Design
                                                </h3>
                                                <p className="text-gray-400 mb-4">
                                                      We begin with an in-depth consultation to understand your vision,
                                                      needs, and budget. Our designers then create detailed plans and 3D
                                                      renderings of your project.
                                                </p>
                                                <div className="flex items-center text-yellow-400">
                                                      <Clock className="h-5 w-5 mr-2" />
                                                      <span className="text-sm">Timeline: 1-2 weeks</span>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative mb-16">
                                          <div className="flex items-center justify-center">
                                                <div className="flex items-center justify-center z-10 w-12 h-12 bg-yellow-400 rounded-full text-gray-900 font-bold text-xl">
                                                      2
                                                </div>
                                          </div>
                                          <div className="mt-6 bg-gray-900 rounded-lg p-6 shadow-lg">
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                      Material Selection & Planning
                                                </h3>
                                                <p className="text-gray-400 mb-4">
                                                      Select your materials, finishes, and fixtures with guidance from
                                                      our design experts. We'll create a detailed project plan and
                                                      timeline.
                                                </p>
                                                <div className="flex items-center text-yellow-400">
                                                      <Clock className="h-5 w-5 mr-2" />
                                                      <span className="text-sm">Timeline: 2-3 weeks</span>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="relative mb-16">
                                          <div className="flex items-center justify-center">
                                                <div className="flex items-center justify-center z-10 w-12 h-12 bg-yellow-400 rounded-full text-gray-900 font-bold text-xl">
                                                      3
                                                </div>
                                          </div>
                                          <div className="mt-6 bg-gray-900 rounded-lg p-6 shadow-lg">
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                      Demolition & Construction
                                                </h3>
                                                <p className="text-gray-400 mb-4">
                                                      Our skilled team carefully removes existing structures and begins
                                                      the construction phase, with regular updates on progress.
                                                </p>
                                                <div className="flex items-center text-yellow-400">
                                                      <Clock className="h-5 w-5 mr-2" />
                                                      <span className="text-sm">Timeline: Varies by project scope</span>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="relative">
                                          <div className="flex items-center justify-center">
                                                <div className="flex items-center justify-center z-10 w-12 h-12 bg-yellow-400 rounded-full text-gray-900 font-bold text-xl">
                                                      4
                                                </div>
                                          </div>
                                          <div className="mt-6 bg-gray-900 rounded-lg p-6 shadow-lg">
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                      Final Touches & Walkthrough
                                                </h3>
                                                <p className="text-gray-400 mb-4">
                                                      We complete all finishing details and conduct a thorough
                                                      walkthrough to ensure everything meets our high standards and your
                                                      expectations.
                                                </p>
                                                <div className="flex items-center text-yellow-400">
                                                      <Clock className="h-5 w-5 mr-2" />
                                                      <span className="text-sm">Timeline: 1-2 weeks</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gray-900 py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="bg-yellow-400 rounded-2xl shadow-xl overflow-hidden">
                                    <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
                                          <div>
                                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                                      <span className="block">Ready to transform your home?</span>
                                                      <span className="block">
                                                            Schedule your free consultation today.
                                                      </span>
                                                </h2>
                                                <p className="mt-4 text-lg text-gray-800">
                                                      Our expert team is ready to help you bring your vision to life.
                                                      Contact us now to get started on your dream remodeling project.
                                                </p>
                                          </div>
                                          <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                                                <div className="inline-flex rounded-md shadow">
                                                      <Link
                                                            to="/contact"
                                                            className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-lg font-medium rounded-md text-yellow-400 bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
                                                      >
                                                            Get Started
                                                      </Link>
                                                </div>
                                                <div className="mt-4 lg:mt-0 lg:ml-4 inline-flex">
                                                      <a
                                                            href="tel:5551234567"
                                                            className="inline-flex items-center justify-center px-6 py-4 border border-gray-900 text-lg font-medium rounded-md text-gray-900 bg-transparent hover:bg-gray-900 hover:text-yellow-400 transition-colors duration-300"
                                                      >
                                                            Call Us
                                                      </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
