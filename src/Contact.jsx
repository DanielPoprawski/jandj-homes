export default function About() {
      return (
            <div className="min-h-screen bg-gray-900">
                  <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative bg-gray-800 rounded-lg shadow-xl">
                              <div className="grid grid-cols-1 lg:grid-cols-3">
                                    <div className="relative px-6 py-10 overflow-hidden bg-yellow-500 rounded-l-lg sm:px-10 xl:p-12">
                                          <h3 className="text-xl font-bold text-gray-900">Contact information</h3>
                                          <p className="max-w-3xl my-6 text-base text-gray-900">
                                                Get in touch with us to discuss your dream home.
                                          </p>

                                          <div className="flex items-center gap-2 mb-2">
                                                <svg
                                                      className="flex-shrink-0 w-6 h-6"
                                                      fill="currentColor"
                                                      viewBox="0 0 24 24"
                                                >
                                                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                                </svg>
                                                <span>(941) 278 - 0528</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <svg
                                                      className="flex-shrink-0 w-6 h-6"
                                                      fill="currentColor"
                                                      viewBox="0 0 24 24"
                                                >
                                                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                                </svg>
                                                <span>joe@jandj-homes.com</span>
                                          </div>
                                    </div>

                                    <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                                          <h3 className="text-lg font-bold text-white">Leave us a message</h3>
                                          <form className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                                <div className="col-span-2">
                                                      <label
                                                            htmlFor="fullName"
                                                            className="block text-sm font-medium text-gray-300"
                                                      >
                                                            Full Name
                                                      </label>
                                                      <input
                                                            type="text"
                                                            name="fullName"
                                                            id="fullName"
                                                            className="block w-full mt-1 text-white bg-gray-700 border-gray-600 rounded-md"
                                                      />
                                                </div>
                                                <div>
                                                      <label
                                                            htmlFor="email"
                                                            className="block text-sm font-medium text-gray-300"
                                                      >
                                                            Email
                                                      </label>
                                                      <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            className="block w-full mt-1 text-white bg-gray-700 border-gray-600 rounded-md"
                                                      />
                                                </div>
                                                <div>
                                                      <label
                                                            htmlFor="phone"
                                                            className="block text-sm font-medium text-gray-300"
                                                      >
                                                            Phone
                                                      </label>
                                                      <input
                                                            type="phone"
                                                            name="phone"
                                                            id="phone"
                                                            className="block w-full mt-1 text-white bg-gray-700 border-gray-600 rounded-md"
                                                      />
                                                </div>
                                                <div className="sm:col-span-2">
                                                      <label
                                                            htmlFor="message"
                                                            className="block text-sm font-medium text-gray-300"
                                                      >
                                                            Message
                                                      </label>
                                                      <textarea
                                                            name="message"
                                                            id="message"
                                                            rows="4"
                                                            className="block w-full mt-1 text-white bg-gray-700 border-gray-600 rounded-md"
                                                      ></textarea>
                                                </div>
                                                <div className="sm:col-span-2">
                                                      <button
                                                            type="submit"
                                                            className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-900 bg-yellow-500 border border-transparent rounded-md shadow-sm hover:bg-yellow-600"
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
