import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
      return (
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 py-16">
                  <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden rounded-xl shadow-2xl">
                              <div className="grid grid-cols-1 lg:grid-cols-3">
                                    <div className="relative px-6 py-12 bg-gradient-to-br from-yellow-500 to-yellow-400 sm:px-10 xl:p-12">
                                          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
                                          <p className="max-w-3xl mt-4 mb-6 text-lg/tight  text-gray-800">
                                                Ready to build your dream home? Our team is here to help bring your
                                                vision to life.
                                          </p>

                                          <div className="space-y-3">
                                                <div className="flex items-center">
                                                      <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 rounded-full">
                                                            <Phone />
                                                      </div>
                                                      <span className="ml-3 text-lg font-semibold tracking-wide text-gray-900">
                                                            (941) 278-0528
                                                      </span>
                                                </div>

                                                <div className="flex items-center">
                                                      <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 rounded-full">
                                                            <Mail />
                                                      </div>
                                                      <span className="ml-3 text-lg font-semibold tracking-wide text-gray-900">
                                                            joe@jandj-homes.com
                                                      </span>
                                                </div>

                                                <div className="flex items-center">
                                                      <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 rounded-full">
                                                            <MapPin />
                                                      </div>
                                                      <span className="ml-3 text-lg font-semibold tracking-wide text-gray-900">
                                                            Sarasota, Florida
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="mt-10">
                                                <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                                                <div className="text-lg space-y-1 text-gray-800">
                                                      <p>Monday - Friday: 9AM - 6PM</p>
                                                      <p>Saturday: 10AM - 4PM</p>
                                                      <p>Sunday: Closed</p>
                                                </div>
                                          </div>
                                    </div>
                                    {/* Form Panel */}
                                    <div className="px-6 py-10 bg-gray-800 sm:px-10 lg:col-span-2 xl:p-12">
                                          <h3 className="text-2xl font-bold text-white">Send us a message</h3>
                                          <p className="mt-2 text-gray-400">
                                                We'll get back to you as soon as possible
                                          </p>
                                          <form className="grid grid-cols-1 mt-8 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                                <div>
                                                      <label
                                                            htmlFor="firstName"
                                                            className="block text-sm font-medium text-gray-100"
                                                      >
                                                            First Name
                                                      </label>
                                                      <input
                                                            type="text"
                                                            name="firstName"
                                                            id="firstName"
                                                            className="block w-full px-4 py-3 mt-1 text-white placeholder-gray-500 bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                            placeholder="John"
                                                      />
                                                </div>
                                                <div>
                                                      <label
                                                            htmlFor="lastName"
                                                            className="block text-sm font-medium text-gray-100"
                                                      >
                                                            Last Name
                                                      </label>
                                                      <input
                                                            type="text"
                                                            name="lastName"
                                                            id="lastName"
                                                            className="block w-full px-4 py-3 mt-1 text-white placeholder-gray-500 bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                            placeholder="Doe"
                                                      />
                                                </div>
                                                <div>
                                                      <label
                                                            htmlFor="email"
                                                            className="block text-sm font-medium text-gray-100"
                                                      >
                                                            Email
                                                      </label>
                                                      <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            className="block w-full px-4 py-3 mt-1 text-white placeholder-gray-500 bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                            placeholder="you@example.com"
                                                      />
                                                </div>
                                                <div>
                                                      <label
                                                            htmlFor="phone"
                                                            className="block text-sm font-medium text-gray-100"
                                                      >
                                                            Phone
                                                      </label>
                                                      <input
                                                            type="tel"
                                                            name="phone"
                                                            id="phone"
                                                            className="block w-full px-4 py-3 mt-1 text-white placeholder-gray-500 bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                            placeholder="(123) 456-7890"
                                                      />
                                                </div>
                                                <div className="sm:col-span-2">
                                                      <label
                                                            htmlFor="subject"
                                                            className="block text-sm font-medium text-gray-100"
                                                      >
                                                            Subject
                                                      </label>
                                                      <input
                                                            type="text"
                                                            name="subject"
                                                            id="subject"
                                                            className="block w-full px-4 py-3 mt-1 text-white placeholder-gray-500 bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                            placeholder="How can we help you?"
                                                      />
                                                </div>
                                                <div className="sm:col-span-2">
                                                      <label
                                                            htmlFor="message"
                                                            className="block text-sm font-medium text-gray-100"
                                                      >
                                                            Message
                                                      </label>
                                                      <textarea
                                                            name="message"
                                                            id="message"
                                                            rows="5"
                                                            className="block w-full px-4 py-3 mt-1 text-white placeholder-gray-500 bg-gray-700 border-0 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none resize-none"
                                                            placeholder="Tell us about your project..."
                                                      ></textarea>
                                                </div>
                                                <div className="sm:col-span-2">
                                                      <button
                                                            type="submit"
                                                            className="inline-flex items-center justify-center w-full px-6 py-4 mt-2 font-bold text-xl text-gray-900 transition duration-200 bg-yellow-500 border border-transparent rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-gray-800"
                                                      >
                                                            Send Message
                                                      </button>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
