export default function Remodeling() {
      return (
            <div className="min-h-screen py-[5%] px-[10%] bg-gray-900">
                  <h1 className="mb-10 font-bold text-white text-7xl">Remodeling Services</h1>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                              <img
                                    src="https://placehold.co/600x400/030712/FFF"
                                    alt="Kitchen Remodeling"
                                    className="w-full rounded-lg shadow-lg"
                              />
                              <h2 className="text-3xl font-semibold text-white">Kitchen Remodeling</h2>
                              <p className="text-gray-400">
                                    Transform your kitchen into a modern, functional space. We handle everything from
                                    countertops to cabinets.
                              </p>
                        </div>

                        <div className="space-y-4">
                              <img
                                    src="https://placehold.co/600x400/030712/FFF"
                                    alt="Bathroom Remodeling"
                                    className="w-full rounded-lg shadow-lg"
                              />
                              <h2 className="text-3xl font-semibold text-white">Bathroom Remodeling</h2>
                              <p className="text-gray-400">
                                    Create your dream bathroom with our expert remodeling services. From tubs to tiles,
                                    we do it all.
                              </p>
                        </div>

                        <div className="space-y-4">
                              <img
                                    src="https://placehold.co/600x400/030712/FFF"
                                    alt="Room Additions"
                                    className="w-full rounded-lg shadow-lg"
                              />
                              <h2 className="text-3xl font-semibold text-white">Room Additions</h2>
                              <p className="text-gray-400">
                                    Need more space? We can help you expand your home with custom room additions.
                              </p>
                        </div>

                        <div className="space-y-4">
                              <img
                                    src="https://placehold.co/600x400/030712/FFF"
                                    alt="Whole House Renovation"
                                    className="w-full rounded-lg shadow-lg"
                              />
                              <h2 className="text-3xl font-semibold text-white">Whole House Renovation</h2>
                              <p className="text-gray-400">
                                    Complete home makeovers that transform your living space while increasing your
                                    property value.
                              </p>
                        </div>
                  </div>
            </div>
      );
}
