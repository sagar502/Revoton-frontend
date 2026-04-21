import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
const headingStyle = { fontFamily: "Playfair Display, serif" };
const bodyStyle = { fontFamily: "Inter, sans-serif" };

export default function IndustrialGallery() {
  return (
    <Layout>
  
      <section className="bg-white px-6 md:px-20 py-12" style={bodyStyle}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-5xl text-[#1f2937] mb-4" style={headingStyle}>
            — Our Gallery
          </h2>

          <p className="text-gray-500 max-w-xl text-lg">
            A refined visual collection of alloy steel, precision machining, forging, and industrial excellence.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">

          <Card img="images/allo.avif" title="Alloy Steel Bars" desc="High-performance alloy steel bars engineered for durability." />
          <Card img="images/cnc1.jpg" title="CNC Machining" desc="Precision machining delivering micron-level accuracy." />
          <Card img="images/fog.webp" title="Forging Operations" desc="Extreme forging processes for high-strength components." />
          <Card img="images/manfacture.jpg" title="Heavy Manufacturing" desc="Large-scale industrial production systems." />
          <Card img="images/processing.jpg" title="Steel Processing" desc="Modern steel production." />
          <Card img="images/fabrication.jpg" title="Metal Fabrication" desc="Advanced fabrication process." />
          <Card img="images/industrialplant.jpg" title="Industrial Plant" desc="Large manufacturing units." />
          <Card img="images/cnc2.jpg" title="Machinery" desc="Heavy industrial machines." />
          <Card img="images/facuturing.jpg" title="Manufacturing" desc="Production excellence." />
          <Card img="images/steeelll.jpg" title="Industrial Design" desc="Modern production." />
          <Card img="images/manu.jpg" title="Manufacturing Units" desc="Reliable systems." />
          <Card img="images/wh.jpeg" title="Industrial Tech" desc="Modern innovation." />

        </div>
        </section>
</Layout>
  
  );
}

const Card = ({ img, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.4 }}
    className="group cursor-pointer"
  >

    <div className="rounded-2xl overflow-hidden mb-4">
      <img
        src={img}
        className="w-full h-[180px] object-cover group-hover:scale-105 transition duration-500"
      />
    </div>

    <h3 className="text-xl text-[#1f2937]" style={headingStyle}>
      {title}
    </h3>

    <p className="text-gray-500 text-sm mt-1">
      {desc}
    </p>

  </motion.div>
);