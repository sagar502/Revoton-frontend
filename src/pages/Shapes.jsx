import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
const shapes = [
  { name: "Rounds", range: "10 mm – 600 mm", image: "images/rounds.jpg" },
  { name: "Billets", range: "100 mm – 200 mm", image: "images/bill.jpg" },
  { name: "Blooms", range: "200 mm – 400 mm", image: "images/blo.avif" },
  { name: "Slabs", range: "150 mm – 300 mm", image: "images/slab.jpeg" },
  { name: "Plates", range: "6 mm – 200 mm", image: "images/Plate.jpg" },
  { name: "Sheets / Coils", range: "0.5 mm – 6 mm", image: "images/coils.jpg" },
  { name: "Pipes & Tubes", range: "OD 10 mm – 500 mm", image: "images/pipe.jpg" },
  { name: "Hex Bars", range: "10 mm – 150 mm", image: "images/hex-bars.webp" },
  { name: "Flat Bars", range: "5 mm – 200 mm", image: "images/flat.jpg" },
];

const reveal = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Shapes() {
  return (
  
     <Layout>

      <div className="bg-gradient-to-br from-[#f5f7f8] to-[#e6eef0] min-h-screen pt-10 pb-20 px-6 md:px-20">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1
            variants={reveal}
            className="text-5xl font-semibold text-gray-800"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Steel Shapes
          </motion.h1>

          <motion.p
            variants={reveal}
            className="text-gray-500 mt-4"
          >
            Explore available steel forms and size ranges
          </motion.p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-18 max-w-7xl mx-auto"
        >
          {shapes.map((shape, i) => (
            <motion.div
              key={shape.name}
              variants={reveal}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/30 cursor-pointer"
            >
              <div className="h-42 overflow-hidden">
                <motion.img
                  src={shape.image}
                  alt={shape.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-400" />

              <div className="p-6 text-center relative z-10">
                <h2
                  className="text-xl font-semibold text-gray-800 group-hover:text-white transition"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {shape.name}
                </h2>

                <p className="text-gray-600 mt-2 text-sm group-hover:text-gray-200 transition">
                  {shape.range}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-500 text-sm max-w-xl mx-auto"
        >
        
        </motion.div>

      </div>

        </Layout>
  );
}