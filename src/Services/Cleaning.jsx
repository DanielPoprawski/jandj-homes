import React from "react";
import { Link } from "react-router";
import { Check, Clock, Droplet, Home, Star } from "lucide-react";

export default function Cleaning() {
      return (
            <div className="min-h-screen bg-white">
                  {/* Hero Section */}
                  <div className="bg-gray-900 text-white">
                        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                              <div className="text-center">
                                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                          Professional Home <span className="text-yellow-500">Cleaning Services</span>
                                    </h1>
                                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                                          Keep your home spotless with our thorough cleaning services tailored to your
                                          needs.
                                    </p>
                              </div>
                        </div>
                  </div>

                  {/* Service Overview */}
                  <div className="py-12 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center">
                                    <p className="text-base font-semibold tracking-wide uppercase text-yellow-600">
                                          Cleaning Services
                                    </p>
                                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                          A Clean Home Is a Happy Home
                                    </h2>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                          At J&J Homes, we understand the importance of a clean and healthy living
                                          environment. Our cleaning services are designed to give you peace of mind and
                                          a spotless home.
                                    </p>
                              </div>

                              <div className="mt-10">
                                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                                          {/* Regular Cleaning */}
                                          <div className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="px-4 py-5 sm:p-6">
                                                      <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                                  <Home className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="ml-3 text-lg font-medium text-gray-900">
                                                                  Regular Cleaning
                                                            </h3>
                                                      </div>
                                                      <div className="mt-4 text-gray-500">
                                                            <p>
                                                                  Our regular cleaning service covers all the basics to
                                                                  keep your home consistently clean:
                                                            </p>
                                                            <ul className="mt-3 space-y-2">
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Dusting all accessible surfaces</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Vacuuming and mopping floors</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Cleaning kitchens and bathrooms</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Taking out trash and recycling</span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Deep Cleaning */}
                                          <div className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="px-4 py-5 sm:p-6">
                                                      <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                                  <Droplet className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="ml-3 text-lg font-medium text-gray-900">
                                                                  Deep Cleaning
                                                            </h3>
                                                      </div>
                                                      <div className="mt-4 text-gray-500">
                                                            <p>
                                                                  For a thorough clean that covers every nook and cranny
                                                                  of your home:
                                                            </p>
                                                            <ul className="mt-3 space-y-2">
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>All regular cleaning services</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>
                                                                              Inside appliances (fridge, oven, etc.)
                                                                        </span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Interior window cleaning</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>
                                                                              Detailed baseboards and trim cleaning
                                                                        </span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Move-In/Move-Out Cleaning */}
                                          <div className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="px-4 py-5 sm:p-6">
                                                      <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                                  <Clock className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="ml-3 text-lg font-medium text-gray-900">
                                                                  Move-In/Move-Out
                                                            </h3>
                                                      </div>
                                                      <div className="mt-4 text-gray-500">
                                                            <p>
                                                                  Start fresh in your new home or leave your old one
                                                                  spotless:
                                                            </p>
                                                            <ul className="mt-3 space-y-2">
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>All deep cleaning services</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Inside cupboards and drawers</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Walls and baseboard cleaning</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Removal of all dust and debris</span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Testimonials */}
                  <div className="bg-white py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center mb-10">
                                    <h2 className="text-3xl font-extrabold text-gray-900">What Our Customers Say</h2>
                              </div>
                              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                                          <div className="flex items-center mb-4">
                                                <div className="flex text-yellow-500">
                                                      {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="h-5 w-5 fill-current" />
                                                      ))}
                                                </div>
                                          </div>
                                          <p className="text-gray-600 italic mb-4">
                                                "J&J Homes cleaning service exceeded my expectations! They paid
                                                attention to every detail and my house has never looked better."
                                          </p>
                                          <p className="font-medium text-gray-900">- Sarah M.</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                                          <div className="flex items-center mb-4">
                                                <div className="flex text-yellow-500">
                                                      {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="h-5 w-5 fill-current" />
                                                      ))}
                                                </div>
                                          </div>
                                          <p className="text-gray-600 italic mb-4">
                                                "We've been using their regular cleaning service for over a year now,
                                                and the team is always punctual, thorough, and professional."
                                          </p>
                                          <p className="font-medium text-gray-900">- David K.</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                                          <div className="flex items-center mb-4">
                                                <div className="flex text-yellow-500">
                                                      {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="h-5 w-5 fill-current" />
                                                      ))}
                                                </div>
                                          </div>
                                          <p className="text-gray-600 italic mb-4">
                                                "Their move-out cleaning service saved me so much stress. The property
                                                manager was impressed with how clean everything was!"
                                          </p>
                                          <p className="font-medium text-gray-900">- Lisa J.</p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-gray-900">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                    <span className="block">Ready for a cleaner home?</span>
                                    <span className="block text-yellow-500">Contact us today for a free quote.</span>
                              </h2>
                              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                    <div className="inline-flex rounded-md shadow">
                                          <Link
                                                to="/contact"
                                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-600"
                                          >
                                                Get a Quote
                                          </Link>
                                    </div>
                                    <div className="ml-3 inline-flex rounded-md shadow">
                                          <a
                                                href="tel:5551234567"
                                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-500 bg-gray-800 hover:bg-gray-700"
                                          >
                                                Call Us
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
