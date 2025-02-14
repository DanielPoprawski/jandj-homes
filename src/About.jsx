export default function About() {
      return (
            <div className="min-h-screen bg-gray-900">
                  <div className="relative overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                              <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
                                          <div className="sm:text-center lg:text-left">
                                                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                                      <span className="block xl:inline">About</span>
                                                      <span className="block text-yellow-500 xl:inline">
                                                            {" "}
                                                            J&J Homes
                                                      </span>
                                                </h1>
                                                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                                      We are a family-owned construction company with over 20 years of
                                                      experience in building custom homes. Our commitment to quality and
                                                      customer satisfaction is what sets us apart.
                                                </p>
                                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                                      <div className="rounded-md shadow">
                                                            <a
                                                                  href="#contact"
                                                                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-600 md:py-4 md:text-lg md:px-10"
                                                            >
                                                                  Contact Us
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>
                                    </main>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
