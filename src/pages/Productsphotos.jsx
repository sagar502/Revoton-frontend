import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const headingStyle = {
  fontFamily: "Playfair Display, serif",
};

const bodyStyle = {
  fontFamily: "Inter, sans-serif",
};

export default function IndustrialGallery() {
  const galleryItems = [
 
    {
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
      title: "CNC Machining",
      desc: "Precision machining delivering micron-level accuracy.",
    },
    {
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      title: "Forging Operations",
      desc: "Extreme forging processes for high-strength components.",
    },
   
   
    {
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      title: "Metal Fabrication",
      desc: "Advanced fabrication process with modern technology.",
    },
    {
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      title: "Industrial Plant",
      desc: "Large industrial manufacturing units and plants.",
    },
    {
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
      title: "Industrial Machinery",
      desc: "Heavy-duty industrial machinery and automation.",
    },
    {
      img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop",
      title: "Manufacturing",
      desc: "Modern production excellence and systems.",
    },
    {
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      title: "Industrial Design",
      desc: "Contemporary industrial production design.",
    },
    {
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      title: "Manufacturing Units",
      desc: "Reliable industrial systems and operations.",
    },
    {
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      title: "Industrial Tech",
      desc: "Modern industrial innovation and technology.",
    },
  ];

  return (
    <Layout>
      <section
        className="bg-[#f8fafc] px-6 md:px-20 py-14"
        style={bodyStyle}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl text-[#1f2937] mb-4"
            style={headingStyle}
          >
            — Our Gallery
          </h2>

          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
            A refined visual collection of alloy steel, precision machining,
            forging, and industrial excellence.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

const Card = ({ img, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.4 }}
    className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
  >
    {/* Image */}
    <div className="overflow-hidden">
      <img
        src={img}
        alt={title}
        loading="lazy"
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop";
        }}
        className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-700"
      />
    </div>

    {/* Content */}
    <div className="p-6">
      <h3
        className="text-2xl text-[#111827] mb-2"
        style={headingStyle}
      >
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);