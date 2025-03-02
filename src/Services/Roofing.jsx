import React from "react";
import { Link } from "react-router";
import { Check, Shield, Umbrella, Home, Star } from "lucide-react";

export default function Roofing() {
      return (
            <div className="min-h-screen bg-white">
                  {/* Hero Section */}
                  <div className="bg-gray-900 text-white">
                        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                              <div className="text-center">
                                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                          Expert <span className="text-yellow-500">Roofing Solutions</span>
                                    </h1>
                                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                                          Protect your biggest investment with our professional roofing services.
                                    </p>
                              </div>
                        </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="py-12 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center">
                                    <p className="text-base font-semibold tracking-wide uppercase text-yellow-600">
                                          Roofing Services
                                    </p>
                                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                          Quality Roof Work You Can Trust
                                    </h2>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                          J&J Homes has been providing exceptional roofing services for over 25 years.
                                          Our experienced team delivers quality workmanship that stands the test of
                                          time.
                                    </p>
                              </div>

                              <div className="mt-10">
                                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                                          {/* Roof Installation */}
                                          <div className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="px-4 py-5 sm:p-6">
                                                      <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                                  <Home className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="ml-3 text-lg font-medium text-gray-900">
                                                                  Roof Installation
                                                            </h3>
                                                      </div>
                                                      <div className="mt-4 text-gray-500">
                                                            <p>Our comprehensive roof installation services include:</p>
                                                            <ul className="mt-3 space-y-2">
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>
                                                                              Complete tear-off of existing roofing
                                                                        </span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>
                                                                              Quality materials from trusted suppliers
                                                                        </span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>
                                                                              Expert installation by certified roofers
                                                                        </span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>
                                                                              Extended warranties on materials and labor
                                                                        </span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Roof Repair */}
                                          <div className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="px-4 py-5 sm:p-6">
                                                      <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                                  <Shield className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="ml-3 text-lg font-medium text-gray-900">
                                                                  Roof Repair
                                                            </h3>
                                                      </div>
                                                      <div className="mt-4 text-gray-500">
                                                            <p>Fast, reliable roof repair services to fix:</p>
                                                            <ul className="mt-3 space-y-2">
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Leak detection and correction</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Missing or damaged shingles</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Flashing repair and replacement</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Storm damage assessment and repair</span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Roof Maintenance */}
                                          <div className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="px-4 py-5 sm:p-6">
                                                      <div className="flex items-center">
                                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                                  <Umbrella className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="ml-3 text-lg font-medium text-gray-900">
                                                                  Roof Maintenance
                                                            </h3>
                                                      </div>
                                                      <div className="mt-4 text-gray-500">
                                                            <p>
                                                                  Proactive maintenance programs to extend your roof's
                                                                  life:
                                                            </p>
                                                            <ul className="mt-3 space-y-2">
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Annual roof inspections</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Gutter cleaning and maintenance</span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>
                                                                              Minor repairs before they become major
                                                                        </span>
                                                                  </li>
                                                                  <li className="flex items-start">
                                                                        <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                                                        <span>Detailed roof condition reports</span>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Roofing Materials */}
                  <div className="bg-white py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center mb-10">
                                    <h2 className="text-3xl font-extrabold text-gray-900">
                                          Roofing Materials We Work With
                                    </h2>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                          We offer a variety of high-quality roofing materials to match your home's
                                          style and your budget.
                                    </p>
                              </div>
                              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="text-center">
                                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-gray-400 text-sm">Asphalt Shingle Image</span>
                                          </div>
                                          <h3 className="text-lg font-medium text-gray-900">Asphalt Shingles</h3>
                                          <p className="mt-2 text-gray-500">
                                                Affordable, durable, and available in various colors and styles.
                                          </p>
                                    </div>
                                    <div className="text-center">
                                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-gray-400 text-sm">Metal Roof Image</span>
                                          </div>
                                          <h3 className="text-lg font-medium text-gray-900">Metal Roofing</h3>
                                          <p className="mt-2 text-gray-500">
                                                Long-lasting, energy-efficient, and resistant to extreme weather.
                                          </p>
                                    </div>
                                    <div className="text-center">
                                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-gray-400 text-sm">Tile Roof Image</span>
                                          </div>
                                          <h3 className="text-lg font-medium text-gray-900">Tile Roofing</h3>
                                          <p className="mt-2 text-gray-500">
                                                Elegant appearance with excellent durability and thermal properties.
                                          </p>
                                    </div>
                                    <div className="text-center">
                                          <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <span className="text-gray-400 text-sm">Slate Roof Image</span>
                                          </div>
                                          <h3 className="text-lg font-medium text-gray-900">Slate Roofing</h3>
                                          <p className="mt-2 text-gray-500">
                                                Premium, distinctive appearance with exceptional longevity.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Testimonials */}
                  <div className="bg-gray-50 py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="lg:text-center mb-10">
                                    <h2 className="text-3xl font-extrabold text-gray-900">Customer Testimonials</h2>
                              </div>
                              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="bg-white rounded-lg p-6 shadow-sm">
                                          <div className="flex items-center mb-4">
                                                <div className="flex text-yellow-500">
                                                      {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="h-5 w-5 fill-current" />
                                                      ))}
                                                </div>
                                          </div>
                                          <p className="text-gray-600 italic mb-4">
                                                "J&J Homes replaced our entire roof after storm damage. The crew was
                                                professional, the work was completed on time, and they left our property
                                                spotless."
                                          </p>
                                          <p className="font-medium text-gray-900">- Michael T.</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-6 shadow-sm">
                                          <div className="flex items-center mb-4">
                                                <div className="flex text-yellow-500">
                                                      {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="h-5 w-5 fill-current" />
                                                      ))}
                                                </div>
                                          </div>
                                          <p className="text-gray-600 italic mb-4">
                                                "We had a leak that other companies couldn't fix. J&J Homes identified
                                                the problem right away and made the repair quickly. No more leaks!"
                                          </p>
                                          <p className="font-medium text-gray-900">- Jennifer L.</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-6 shadow-sm">
                                          <div className="flex items-center mb-4">
                                                <div className="flex text-yellow-500">
                                                      {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="h-5 w-5 fill-current" />
                                                      ))}
                                                </div>
                                          </div>
                                          <p className="text-gray-600 italic mb-4">
                                                "The annual maintenance program has saved us thousands in potential
                                                repairs. Their attention to detail during inspections is impressive."
                                          </p>
                                          <p className="font-medium text-gray-900">- Robert K.</p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-gray-900">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                    <span className="block">Need roofing work done?</span>
                                    <span className="block text-yellow-500">
                                          Schedule a free roof inspection today.
                                    </span>
                              </h2>
                              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                    <div className="inline-flex rounded-md shadow">
                                          <Link
                                                to="/contact"
                                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-600"
                                          >
                                                Get a Free Estimate
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
