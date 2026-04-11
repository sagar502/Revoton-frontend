import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import MapComponent from "../components/mapComponent";
import { useNavigate } from "react-router-dom";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function useCounter(end, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
}

function StatCard({ value, suffix, label }) {
  const [trigger, setTrigger] = useState(false);
  const count = useCounter(trigger ? value : 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      onViewportEnter={() => setTrigger(true)}
      onViewportLeave={() => setTrigger(false)}
      className="bg-white p-6 rounded-xl text-center border shadow-sm hover:shadow-xl transition"
    >
      <h3 className="text-2xl font-bold text-[#134e4a]">
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="text-gray-500 mt-2">{label}</p>
    </motion.div>
  );
}

const headingStyle = { fontFamily: "Playfair Display, serif" };
const bodyStyle = { fontFamily: "Inter, sans-serif" };

const Home = () => {
  const navigate = useNavigate();

  return (
 <Layout>

    <div className="bg-[#f5f5f5] text-[#1f2937] scroll-smooth" style={bodyStyle}>
      <Hero />
     <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#f8fafc]">

  <h2
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-14"
    style={{ fontFamily: "Playfair Display, serif" }}
  >
    Our Authority in Numbers CHECK PIPELINE IS WORKING OR NOT
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">

    <StatCard value={50000} suffix="+" label="Steel Products Sold" />
    <StatCard value={2000000} suffix="+" label="Scrap Sold" />
    <StatCard value={250000} suffix=" sqft" label="Warehouse Space" />
    <StatCard value={100} suffix="+" label="Customers" />
    <StatCard value={10} suffix="+" label="Supply Partners" />
    <StatCard value={30} suffix="+ Years" label="Experience" />
    <StatCard value={8} suffix="+" label="State Presence" />
    <StatCard value={7} suffix="+" label="Warehouses" />

  </div>

</section>
      <section className="py-24 px-10 bg-[#eef2f3] text-center">
        <h2 className="text-4xl md:text-5xl mb-14" style={headingStyle}>
          Our Value Proposition
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "On Time Delivery", img: "/images/orders.jpeg" },
            { title: "Cut to Order", img: "/images/cutt.jpeg" },
            { title: "Quality Assurance", img: "/images/qualities.jpeg" },
            { title: "Inventory Management", img: "/images/in.jpg" },
            { title: "Door Step Delivery", img: "/images/doorstep.jpeg" },
            { title: "Supply Chain Partner", img: "/images/sup.jpeg" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img src={item.img} className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 style={headingStyle}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-20 px-10 bg-white">
        <h2 className="text-4xl md:text-5xl text-center mb-12" style={headingStyle}>
          Products
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Alloy Steel Bars", img: "/images/allo.avif" },
            { title: "Engineering Steel", img: "/images/engine.jpeg" },
            { title: "Bearing Steel", img: "/images/bear.webp" },
            { title: "Tool Steel", img: "/images/tooo.jpeg" },
            { title: "Case Hardening Steel", img: "/images/case.jpeg" },
            { title: "Heat Resistant Steel", img: "/images/heatresistant.jpg" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
            >
              <img src={item.img} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h3 style={headingStyle}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

<motion.section
  initial="hidden"
  whileInView="show"
  variants={container}
  className="py-24 px-10 bg-[#eef2f3] text-center"
>
  <h2 className="text-4xl md:text-5xl mb-14" style={headingStyle}>
    Industries We Serve
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl  mx-auto">
    {[
      { title: "Automotive", img: "/images/autos.jpg" },
      { title: "Oil & Gas", img: "/images/oil.jpg" },
      { title: "Mining", img: "/images/minee.jpg" },
      { title: "Aerospace", img: "/images/aero.png" },
      { title: "Defence", img: "/images/defence.jpg" },
      { title: "Manufacturing", img: "/images/Wmanufacturing.jpeg" },
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={card}
        whileHover={{ scale: 1.05 }}
        className="group bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
      >
      
        <div className="overflow-hidden relative">
          <motion.img
            src={item.img}
            className="h-40 w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
        </div>

        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#134e4a] transition">
            {item.title}
          </h3>

          <span className="block w-0 h-[2px] bg-[#134e4a] group-hover:w-full transition-all duration-300 mt-2 mx-auto"></span>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

      <section className="py-20 px-10 bg-[#e5e7eb] text-center">
        <h2 className="text-4xl md:text-5xl mb-12" style={headingStyle}>
          Quality Check
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            { title: "MTC", img: "/images/mtcc.jpg" },
            { title: "Traceability", img: "/images/close.jpg" },
            { title: "Ultrasonic", img: "/images/ultrasonic.jpg" },
            { title: "Spectro", img: "/images/tro.jpg" },
            { title: "Inspection", img: "/images/visual.png" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img src={item.img} className="h-32 w-full object-cover" />
              <div className="p-3">
                <h3 style={headingStyle}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl mb-10" style={headingStyle}>
          Our Presence
        </h2>

        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow">
          <MapComponent />
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9fafb] text-center">
        <h2 className="text-4xl mb-6" style={headingStyle}>
          Get In Touch
        </h2>

        <button
          onClick={() => navigate("/getintouch")}
          className="px-8 py-3 bg-[#134e4a] text-white rounded-md hover:scale-105 transition"
        >
          Contact Us
        </button>
      </section>

  
    </div>

    </Layout>
  );
};

export default Home;