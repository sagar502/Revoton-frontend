import React, { useState } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
const headingStyle = {
  fontFamily: "Playfair Display, serif",
};

const bodyStyle = {
  fontFamily: "Inter, sans-serif",
};

const smoothEase = [0.22, 1, 0.36, 1];

const smoothSpring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.8,
};

const categories = [
  {
    name: "Engineering Steel",
    desc: "Versatile steels engineered for mechanical strength and reliability.",
    details: {
      intro:
        "Engineering steel forms the foundation of modern industrial manufacturing, offering an exceptional balance of strength, durability, and machinability. These steels are widely used in precision components that require reliable performance under varying loads and operating conditions.",
      usage: [
        "Automotive components such as shafts, gears, and axles",
        "Heavy machinery and industrial equipment",
        "Construction and infrastructure applications",
        "Oil & gas mechanical systems"
      ],
      offering:
        "We supply premium engineering steel grades including EN8, EN9, and EN24 with consistent quality, precise specifications, and reliable global delivery."
    }
  },
  {
    name: "Alloy Steel Bars",
    desc: "High-performance alloy steels built for strength and endurance.",
    details: {
      intro:
        "Alloy steel bars are developed by incorporating elements such as chromium, nickel, and molybdenum, significantly enhancing mechanical strength and wear resistance. These steels are designed for high-performance applications where durability and reliability are critical.",
      usage: [
        "Automotive crankshafts and transmission components",
        "Aerospace structural systems",
        "Oil & gas drilling equipment",
        "Heavy engineering machinery"
      ],
      offering:
        "We offer alloy steel grades such as EN19 and EN24 sourced from certified mills, ensuring superior performance and long service life."
    }
  },
  {
    name: "Bearing Steel",
    desc: "High wear resistance steels used in precision applications.",
    details: {
      intro:
        "Bearing steel is a high-carbon chromium steel known for its exceptional hardness, fatigue strength, and wear resistance. It is specifically engineered for precision applications requiring smooth motion and long service life.",
      usage: [
        "Automotive bearings and transmission systems",
        "Industrial rotating machinery",
        "Precision engineering components"
      ],
      offering:
        "We supply EN31 / AISI 52100 bearing steel with strict quality standards ensuring durability and consistent performance."
    }
  },
  {
    name: "Case Hardening Steel",
    desc: "Steels designed for surface hardness with a tough core.",
    details: {
      intro:
        "Case hardening steel is engineered to achieve a hardened outer layer while maintaining a tough inner core. This makes it ideal for components subjected to wear and impact.",
      usage: [
        "Automotive gears and camshafts",
        "Mechanical shafts and components",
        "Construction equipment parts"
      ],
      offering:
        "We provide case hardening grades like 16MnCr5 and 20MnCr5 with consistent metallurgical quality and performance."
    }
  },
  {
    name: "Tool Steel",
    desc: "Precision steels for cutting, forming, and tooling.",
    details: {
      intro:
        "Tool steel is designed for manufacturing cutting tools, dies, and molds. It offers high hardness, wear resistance, and the ability to retain strength under extreme conditions.",
      usage: [
        "Cutting tools such as drills and cutters",
        "Molds and dies",
        "Punches and forming tools"
      ],
      offering:
        "We supply premium tool steels including H13, D2, and OHNS for high precision and durability."
    }
  },
  {
    name: "Heat Resistant Steel",
    desc: "Steels that perform under extreme temperatures.",
    details: {
      intro:
        "Heat resistant steel is designed to maintain its mechanical properties even at elevated temperatures. It resists oxidation and thermal stress, making it essential for high-temperature environments.",
      usage: [
        "Power plant boilers and turbines",
        "Furnaces and heat treatment systems",
        "Petrochemical plants"
      ],
      offering:
        "We provide heat resistant grades such as H11 and H13 suitable for extreme temperature applications."
    }
  },
  {
    name: "Speciality Steel",
    desc: "Custom engineered steels for specialized applications.",
    details: {
      intro:
        "Speciality steel includes customized steel grades developed to meet unique industrial requirements. These steels offer enhanced properties such as corrosion resistance, high strength, and superior performance.",
      usage: [
        "Aerospace and defense industries",
        "Medical equipment manufacturing",
        "Precision engineering"
        
      ],
      offering:
        "We develop and supply tailored speciality steel solutions based on specific client requirements."
    }
  }
];

export default function PremiumSteelPage() {
  const [selected, setSelected] = useState(null);

  return (
     <Layout>
    <div
      className="bg-gradient-to-b from-[#f8fafc] to-[#eef2f3] min-h-screen"
      style={bodyStyle}
    >
      

      <AnimatePresence mode="wait">
        {!selected && (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="px-6 py-10">

              <div className="text-center mb-8">
                <h1 className="text-5xl font-semibold text-gray-800  " style={headingStyle}>
                  Steel Categories
                </h1>
                <p className="text-gray-500 mt-4 text-lg">
                  Explore our premium range of engineered steel solutions
                </p>
              </div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10"
              >
                {categories.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 60, scale: 0.94 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.8,
                          ease: smoothEase,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.07,
                      y: -12,
                      rotateX: 8,
                      rotateY: -8,
                      boxShadow: "0px 30px 80px rgba(0,0,0,0.12)",
                      transition: smoothSpring,
                    }}
                    whileTap={{
                      scale: 0.96,
                      transition: { duration: 0.2, ease: smoothEase },
                    }}
                    onClick={() => setSelected(item)}
                    className="relative overflow-hidden cursor-pointer bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 shadow-lg"
                  >

                    <motion.div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        background:
                          "radial-gradient(circle at 50% 0%, rgba(19,78,74,0.15), transparent 70%)",
                      }}
                    />

                    <h3 className="text-2xl font-semibold text-[#134e4a]" style={headingStyle}>
                      {item.name}
                    </h3>

                    <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    <p className="mt-6 text-sm font-semibold text-[#134e4a]">
                      View Details →
                    </p>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </motion.div>
        )}

        {selected && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.92, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -40 }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="px-6 py-6 max-w-5xl mx-auto mt-5"
          >

            <button
              onClick={() => setSelected(null)}
              className="mb-6 text-[#134e4a] font-medium hover:underline"
            >
              ← Back to Categories
            </button>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border">

              <div className="bg-gray-100 px-6 py-4 text-lg font-semibold rounded-t-2xl">
                ℹ️ Detailed Overview
              </div>

              <div className="p-8 text-gray-700 leading-relaxed">

                <h1 className="text-4xl mb-6 text-[#134e4a]" style={headingStyle}>
                  {selected.name}
                </h1>

                <p className="text-lg">{selected.details.intro}</p>

                <h3 className="mt-8 text-lg text-[#134e4a]" style={headingStyle}>
                  Recommended Applications
                </h3>

                <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
                  {selected.details.usage.map((u, i) => (
                    <li key={i}>{u}</li>
                  ))}
                </ul>

                <h3 className="mt-8 text-lg text-[#134e4a]" style={headingStyle}>
                  Our Offering
                </h3>

                <p className="mt-3 text-sm">{selected.details.offering}</p>

              </div>
            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
        </Layout>
  
  );
}