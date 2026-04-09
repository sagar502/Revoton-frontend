import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
const headingStyle = { fontFamily: "Playfair Display, serif" };
const bodyStyle = { fontFamily: "Inter, sans-serif" };

const industriesData = [
  {
    name: "Automotive Manufacturing",
    desc: "High-strength alloy steels for shafts, gears, and bearings.",
    img: "/images/automative.jpg",
  },
  {
    name: "Mining Equipment",
    desc: "Wear-resistant steels for extreme mining conditions.",
    img: "images/miness.jpg",
  },
  {
    name: "Construction Machinery",
    desc: "Robust steel for infrastructure and heavy machinery.",
    img: "/images/construct.jpg",
  },
  {
    name: "Oil & Gas",
    desc: "Alloys for high pressure and temperature environments.",
    img: "/images/oil.jpg",
  },
  {
    name: "Energy Sector",
    desc: "Durable steel solutions for power generation systems.",
    img: "images/sector.webp",
  },
  {
    name: "Industrial Manufacturing",
    desc: "Reliable steel for heavy industrial production systems.",
    img: "/images/industrialmanufacturing.jpg",
  },
  {
    name: "Precision Engineering",
    desc: "Ultra-precise alloys for high accuracy applications.",
    img: "/images/gold.avif",
  },
  {
    name: "Aerospace",
    desc: "Lightweight high-strength alloys for aviation.",
    img: "/images/aeroo.avif",
  },
  {
    name: "Railways",
    desc: "High durability steel for railway infrastructure.",
    img: "images/rail.png",
  },
];

export default function Industries() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout>
      

      <section
        className="bg-[#f8fafc] py-8 px-6 md:px-20 min-h-screen"
        style={bodyStyle}
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-6xl text-gray-900 mb-6"
            style={headingStyle}
          >
            Industries We Serve
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Delivering high-performance alloy steel solutions across global industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">

          {industriesData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-500"
            >

              <div className="h-50 overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3
                  className="text-2xl font-semibold mb-2 text-gray-900"
                  style={headingStyle}
                >
                  {item.name}
                </h3>

                <p className="text-gray-600 text-[15px] mb-2">
                  {item.desc}
                </p>

                <button
                  onClick={() => setSelected(item)}
                  className="px-5 py-2 border border-[#134e4a] text-[#134e4a] rounded-md hover:bg-[#134e4a] hover:text-white transition text-sm"
                >
                  View Details 
                </button>
              </div>

            </motion.div>
          ))}

        </div>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl"
            >

              <img
                src={selected.img}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-3 text-gray-800"
                  style={headingStyle}
                >
                  {selected.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {selected.desc}
                </p>

                <ul className="text-sm text-gray-400 space-y-1">
                  <li>✔ High Strength Alloys</li>
                  <li>✔ Precision Engineering</li>
                  <li>✔ Global Supply Network</li>
                  <li>✔ Certified Quality</li>
                </ul>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 px-5 py-2 bg-[#134e4a] text-white rounded-md"
                >
                  Close
                </button>
              </div>

            </motion.div>

          </motion.div>
        )}

      </section>
    </Layout>
  );
}