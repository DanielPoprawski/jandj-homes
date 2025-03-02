import React from "react";
import { ArrowRight, Home, Wrench, Hammer, Phone } from "lucide-react";

function App() {
      return (
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700">
                  <div className="relative overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                              <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
                                          <div className="sm:text-center lg:text-left">
                                                <div className="flex items-center mb-4 text-yellow-500 font-semibold lg:justify-start sm:justify-center">
                                                      <span className="mr-2 bg-yellow-500 text-gray-900 px-3 py-1 rounded-md">
                                                            J&J HOME IMPROVEMENT LLC.
                                                      </span>
                                                </div>

                                                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                                      <span className="block xl:inline">Beautiful homes</span>{" "}
                                                      <span className="block text-yellow-500 xl:inline">
                                                            built with care
                                                      </span>
                                                </h1>

                                                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                                      Transform your dream home into reality with our expert
                                                      construction services. Quality craftsmanship and attention to
                                                      detail in every project.
                                                </p>

                                                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 text-sm lg:max-w-lg">
                                                      <div className="flex items-center text-gray-300">
                                                            <div className="mr-2 text-yellow-500">
                                                                  <Home size={18} />
                                                            </div>
                                                            <span>Cleaning</span>
                                                      </div>
                                                      <div className="flex items-center text-gray-300">
                                                            <div className="mr-2 text-yellow-500">
                                                                  <Wrench size={18} />
                                                            </div>
                                                            <span>Remodeling</span>
                                                      </div>
                                                      <div className="flex items-center text-gray-300">
                                                            <div className="mr-2 text-yellow-500">
                                                                  <Hammer size={18} />
                                                            </div>
                                                            <span>Roofing</span>
                                                      </div>
                                                      <div className="flex items-center text-gray-300">
                                                            <div className="mr-2 text-yellow-500">
                                                                  <Hammer size={18} />
                                                            </div>
                                                            <span>Tiles</span>
                                                      </div>
                                                </div>

                                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                                      <div className="rounded-md shadow">
                                                            <a
                                                                  href="#"
                                                                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
                                                            >
                                                                  Get started
                                                                  <ArrowRight className="ml-2" size={20} />
                                                            </a>
                                                      </div>
                                                      <div className="mt-3 sm:mt-0 sm:ml-3">
                                                            <a
                                                                  href="#"
                                                                  className="w-full flex items-center justify-center px-8 py-3 border border-yellow-500 text-base font-medium rounded-md text-yellow-500 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                                                            >
                                                                  Learn more
                                                            </a>
                                                      </div>
                                                </div>

                                                {/* Quick contact */}
                                                <div className="mt-8 inline-flex items-center text-gray-300 sm:justify-center lg:justify-start">
                                                      <Phone className="mr-2 text-yellow-500" size={18} />
                                                      <span>Need help? Call us: (941) 278-0528</span>
                                                </div>
                                          </div>
                                    </main>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default App;
