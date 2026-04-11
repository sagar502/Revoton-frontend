import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const headingStyle = {
  fontFamily: "Playfair Display, serif",
};

const bodyStyle = {
  fontFamily: "Inter, sans-serif",
};


const blogs = [
  {
    title: "India Steel Demand Surges on Infrastructure Push",
    date: "March 2026",
    image: "images/demand.jpg",
    desc: "India’s steel consumption is rising rapidly due to strong infrastructure spending and government-led capex growth."
  },
  {
    title: "Global Steel Demand Shows Signs of Recovery",
    date: "March 2026",
    image: "images/global.avif",
    desc: "Steel demand is recovering globally, driven by growth in emerging markets and industrial expansion."
  },
  {
    title: "Scrap Steel Demand Rises Amid Sustainability Push",
    date: "March 2026",
    image: "images/scrap.jpg",
    desc: "Recycling trends and EAF technology are boosting global demand for scrap steel."
  },
  {
    title: "Green Steel Gains Momentum in Europe",
    date: "March 2026",
    image: "images/green.webp",
    desc: "Hydrogen-based steelmaking and low-emission production are becoming industry priorities."
  },
  {
    title: "EV Industry Driving Alloy Steel Demand",
    date: "March 2026",
    image: "images/allosteel.jpg",
    desc: "Electric vehicles are increasing demand for high-strength alloy steels worldwide."
  },
  {
    title: "Steel Prices Stabilize After Volatility",
    date: "March 2026",
    image: "images/invo.avif",
    desc: "Prices are stabilizing as supply chains normalize and demand balances globally."
  },
  {
    title: "China Controls Steel Output to Cut Emissions",
    date: "Feb 2026",
    image: "images/china.webp",
    desc: "China continues to regulate steel production to manage emissions and reduce overcapacity."
  },
  {
    title: "Infrastructure Boom Fuels Steel Growth",
    date: "Feb 2026",
    image: "images/infrastrurenews.jpeg",
    desc: "Mega infrastructure projects across Asia are driving strong steel demand."
  },
  {
    title: "Alloy Steel Market Expands Rapidly",
    date: "Jan 2026",
    image:"images/aluuuuu.jpg",
    desc: "High-performance steels see rising demand in automotive, aerospace, and energy sectors."
  }
];

const MediaBlogs = () => {
  return (
    <Layout>
      <div className="bg-[#f5f5f5] text-[#1f2937]" style={bodyStyle}>

  
        <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">

          <div className="absolute inset-0">
            <img
              src="images/news.webp"
              alt="background"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-3xl">

      
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="text-gray-100 pt-8 text-3xl md:text-4xl font-semibold"
            >
              Latest trends, news and market updates
            </motion.p>

            <motion.p
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-gray-300 mt-6 text-lg leading-relaxed"
            >
              Stay updated with the evolving industrial landscape, including advancements in alloy steel,
              precision machining, and modern manufacturing techniques.
            </motion.p>

          </div>

        </section>

    
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400?text=Steel+News";
                    }}
                  />

                  <div className="absolute inset-0 bg-black/40"></div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs opacity-80">{blog.date}</p>
                    <h3 className="text-lg font-semibold" style={headingStyle}>
                      {blog.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-gray-600 text-sm">{blog.desc}</p>
                </div>

              </motion.div>
            ))}

          </div>

        </section>

    
        <section className="bg-[#f9fafb] border-y overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            <div className="flex gap-12 py-4 px-6 text-gray-600 font-medium">
              🔹 Steel demand rising globally
              🔹 Green steel revolution accelerating
              🔹 Infrastructure boom continues
              🔹 Alloy steel demand increasing
            </div>
          </div>
        </section>


        <section className="py-24 text-center bg-white">

          <h2 className="text-4xl mb-4 font-semibold" style={headingStyle}>
            Stay Ahead with Steel Updates
          </h2>

          <p className="text-gray-600 mb-8">
            Get latest industry insights directly to your inbox
          </p>

          <div className="flex justify-center gap-4 max-md:flex-col items-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border border-gray-300 w-[320px] bg-gray-100 outline-none focus:border-[#134e4a]"
            />

            <button className="bg-[#134e4a] hover:opacity-90 text-white px-6 py-3 rounded-lg">
              Subscribe →
            </button>

          </div>

        </section>

  
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          `}
        </style>

      </div>
    </Layout>
  );
};

export default MediaBlogs;