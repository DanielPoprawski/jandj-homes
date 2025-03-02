import React from "react";
import { Link } from "react-router";
import { Check, Grid, Home, Star, Sparkles } from "lucide-react";

export default function Tiles() {
      return (
            <div className="min-h-screen bg-white">
                  {/* Hero Section */}
                  <div className="bg-gray-900 text-white">
                        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                              <div className="text-center">
                                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                          Beautiful <span className="text-yellow-500">Tile Solutions</span>
                                    </h1>
                                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                                          Transform your space with our premium tile installation and repair services.
                                    </p>
                              </div>
                        </div>
                  </div>

                  {/* Service Overview */}
                  <div className="py-12 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center">
                                    <p className="text-base font-semibold tracking-wide uppercase text-yellow-600">
                                          Tile Services
                                    </p>
                                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                          Expert Tile Installation and Repair
                                    </h2>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                          At J&J Homes, we specialize in high-quality tile installations that enhance
                                          the beauty and value of your home. Our expert craftsmen deliver impeccable
                                          results that last.
                                    </p>
                              </div>

                              <div className="mt-10">
                                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                                          {/* Floor Tile Installation */}
                                          <div className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="px-4 py-5 sm:p-6">
                                                      <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                                  <Grid className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="ml-3 text-lg font-medium text-gray-900">
                                                                  Floor Tile Installation
                                                            </h3>
                                                      </div>
                                                      <div className="mt-4 text-gray-500">
                                                            <p>
                                                                  Transform your floors with our professional tile
                                                                  installation:
                                                            </p>
                                                            <ul className="mt-3 space-y-2">
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>
                                                                              Ceramic, porcelain, and natural stone
                                                                        </span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Custom patterns and designs</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Radiant floor heating installation</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Subfloor preparation and leveling</span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Wall Tile Installation */}
                                          <div className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="px-4 py-5 sm:p-6">
                                                      <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                                  <Home className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="ml-3 text-lg font-medium text-gray-900">
                                                                  Wall Tile Installation
                                                            </h3>
                                                      </div>
                                                      <div className="mt-4 text-gray-500">
                                                            <p>
                                                                  Add style to your walls with our expert tile services:
                                                            </p>
                                                            <ul className="mt-3 space-y-2">
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Kitchen backsplashes</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Bathroom shower and tub surrounds</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Decorative accent walls</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Mosaic and glass tile installations</span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Tile Repair & Maintenance */}
                                          <div className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="px-4 py-5 sm:p-6">
                                                      <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                                  <Sparkles className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="ml-3 text-lg font-medium text-gray-900">
                                                                  Repair & Maintenance
                                                            </h3>
                                                      </div>
                                                      <div className="mt-4 text-gray-500">
                                                            <p>Restore and maintain your existing tile work:</p>
                                                            <ul className="mt-3 space-y-2">
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Cracked or broken tile replacement</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Grout repair and recoloring</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Sealing and waterproofing</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Tile cleaning and restoration</span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Tile Types */}
                  <div className="bg-white py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center mb-10">
                                    <h2 className="text-3xl font-extrabold text-gray-900">Tile Options We Offer</h2>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                          We work with a wide variety of tile materials to suit any style and budget.
                                    </p>
                              </div>
                              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="text-center">
                                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-gray-400 text-sm">Ceramic Tile Image</span>
                                          </div>
                                          <h3 className="text-lg font-medium text-gray-900">Ceramic Tile</h3>
                                          <p className="mt-2 text-gray-500">
                                                Versatile, affordable, and available in countless colors and patterns.
                                          </p>
                                    </div>
                                    <div className="text-center">
                                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-gray-400 text-sm">Porcelain Tile Image</span>
                                          </div>
                                          <h3 className="text-lg font-medium text-gray-900">Porcelain Tile</h3>
                                          <p className="mt-2 text-gray-500">
                                                Extremely durable with low water absorption, perfect for wet areas.
                                          </p>
                                    </div>
                                    <div className="text-center">
                                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-gray-400 text-sm">Natural Stone Image</span>
                                          </div>
                                          <h3 className="text-lg font-medium text-gray-900">Natural Stone</h3>
                                          <p className="mt-2 text-gray-500">
                                                Marble, granite, travertine, and slate for a luxurious natural look.
                                          </p>
                                    </div>
                                    <div className="text-center">
                                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-gray-400 text-sm">Glass Tile Image</span>
                                          </div>
                                          <h3 className="text-lg font-medium text-gray-900">Glass & Mosaic</h3>
                                          <p className="mt-2 text-gray-500">
                                                Reflective, colorful options for striking accent features and
                                                backsplashes.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Our Process */}
                  <div className="bg-gray-50 py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center mb-10">
                                    <h2 className="text-3xl font-extrabold text-gray-900">
                                          Our Tile Installation Process
                                    </h2>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                          We follow a detailed process to ensure your tile project is completed to
                                          perfection.
                                    </p>
                              </div>
                              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                                    <div className="relative">
                                          <div
                                                className="absolute top-0 left-1/2 -ml-px h-full w-0.5 bg-gray-200 md:hidden"
                                                aria-hidden="true"
                                          ></div>
                                          <div className="relative flex items-start md:flex-col md:items-center">
                                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                                                      1
                                                </div>
                                                <div className="ml-4 md:ml-0 md:mt-4">
                                                      <h3 className="text-lg font-medium text-gray-900">
                                                            Consultation
                                                      </h3>
                                                      <p className="mt-1 text-gray-500">
                                                            We discuss your project needs, design preferences, and
                                                            budget considerations.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="relative">
                                          <div
                                                className="absolute top-0 left-1/2 -ml-px h-full w-0.5 bg-gray-200 md:hidden"
                                                aria-hidden="true"
                                          ></div>
                                          <div className="relative flex items-start md:flex-col md:items-center">
                                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                                                      2
                                                </div>
                                                <div className="ml-4 md:ml-0 md:mt-4">
                                                      <h3 className="text-lg font-medium text-gray-900">Measurement</h3>
                                                      <p className="mt-1 text-gray-500">
                                                            We take precise measurements and prepare the site for
                                                            installation.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="relative">
                                          <div
                                                className="absolute top-0 left-1/2 -ml-px h-full w-0.5 bg-gray-200 md:hidden"
                                                aria-hidden="true"
                                          ></div>
                                          <div className="relative flex items-start md:flex-col md:items-center">
                                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                                                      3
                                                </div>
                                                <div className="ml-4 md:ml-0 md:mt-4">
                                                      <h3 className="text-lg font-medium text-gray-900">
                                                            Installation
                                                      </h3>
                                                      <p className="mt-1 text-gray-500">
                                                            Our skilled craftsmen carefully install your tiles with
                                                            attention to detail.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="relative">
                                          <div className="relative flex items-start md:flex-col md:items-center">
                                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                                                      4
                                                </div>
                                                <div className="ml-4 md:ml-0 md:mt-4">
                                                      <h3 className="text-lg font-medium text-gray-900">
                                                            Final Inspection
                                                      </h3>
                                                      <p className="mt-1 text-gray-500">
                                                            We review the completed work with you to ensure your
                                                            complete satisfaction.
                                                      </p>
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
                                                "J&J Homes installed our kitchen backsplash and bathroom tile. The
                                                attention to detail was impressive, and the finished product looks
                                                amazing."
                                          </p>
                                          <p className="font-medium text-gray-900">- Amanda R.</p>
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
                                                "We had porcelain tile installed throughout our main floor. The team was
                                                professional, clean, and finished on schedule. Couldn't be happier."
                                          </p>
                                          <p className="font-medium text-gray-900">- Thomas W.</p>
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
                                                "J&J Homes restored our natural stone tile floors that other companies
                                                said needed to be replaced. Their knowledge and expertise saved us
                                                thousands."
                                          </p>
                                          <p className="font-medium text-gray-900">- Sophia L.</p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-gray-900">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                    <span className="block">Ready to transform your space?</span>
                                    <span className="block text-yellow-500">
                                          Contact us for a free tile consultation.
                                    </span>
                              </h2>
                              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                    <div className="inline-flex rounded-md shadow">
                                          <Link
                                                to="/contact"
                                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-600"
                                          >
                                                Get a Free Quote
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
