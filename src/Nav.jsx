export default function Nav() {
      return (
            <nav className="bg-gray-800 shadow-lg">
                  <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-between h-16">
                              <div className="flex">
                                    <div className="flex-shrink-0 flex items-center">
                                          <svg
                                                className="h-8 w-8 text-yellow-500"
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
                                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                          <a
                                                href="#"
                                                className="border-yellow-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                          >
                                                Home
                                          </a>
                                          <a
                                                href="#"
                                                className="border-transparent text-gray-300 hover:border-yellow-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                          >
                                                About
                                          </a>
                                          <a
                                                href="#"
                                                className="border-transparent text-gray-300 hover:border-yellow-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                          >
                                                Contact
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </nav>
      );
}
