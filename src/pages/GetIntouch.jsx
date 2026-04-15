import React from "react";
import Layout from "../components/Layout";
import MapComponent from "../components/mapComponent";

const headingStyle = { fontFamily: "Playfair Display, serif" };

export default function ContactPage() {
  return (
    <Layout> 
      <div className="bg-[#f5f5f5] min-h-screen">

        <section className="py-10 px-6 pt-3 bg-white text-center">
          <h2 className="text-4xl mb-8" style={headingStyle}>
            Our Presence
          </h2>

          <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow">
            <MapComponent />
          </div>
        </section>

        <section className="text-center pt-32 pb-16 px-6 bg-[#e5e7eb]">
          <h1
            className="text-4xl md:text-5xl text-black mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Get In Touch DEMO SAMPLE
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We’ll create high-quality linkable content and build strong connections to grow your brand.
          </p>
        </section>

        <section className="px-6 md:px-20 pb-20 -mt-10">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

            <div className="bg-gradient-to-br from-[#134e4a] to-[#0f766e] text-white p-10 flex flex-col justify-between relative">
              <div>
                <h2
                  className="text-2xl font-semibold mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Contact Information
                </h2>

                <p className="text-sm text-white/80 mb-6">
                  We’ll create high-quality linkable content and build strong connections.
                </p>

                <div className="space-y-4 text-sm">
                  <p> +91 6358043693</p>
                  <p>✉ salesmdo@revotons.com</p>
                  <p> Surat, India</p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full"></div>
            </div>

            <div className="p-10">
              <form className="space-y-6">
                
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-md font-semibold text-gray-700">
                      Your Name
                    </label>
                    <input
                      required
                      className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-[#134e4a]"
                    />
                  </div>

                  <div>
                    <label className="text-md font-semibold text-gray-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-[#134e4a]"
                    />
                  </div>
                </div>

                {/* Mobile + City */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-md font-semibold text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-[#134e4a]"
                    />
                  </div>

                  <div>
                    <label className="text-md font-semibold text-gray-700">
                      City
                    </label>
                    <input
                      required
                      className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-[#134e4a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-md text-gray-700 font-semibold">
                    Your Subject
                  </label>
                  <input
                    className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-[#134e4a]"
                  />
                </div>

                <div>
                  <label className="text-md font-semibold text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-[#134e4a]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 px-8 py-3 bg-[#134e4a] text-white rounded-md hover:opacity-90 transition"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
}