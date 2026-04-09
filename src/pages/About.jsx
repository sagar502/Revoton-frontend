import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Layout from "../components/Layout";

import "swiper/css";

const headingStyle = { fontFamily: "Playfair Display, serif" };

export default function About() {
  return (
      <Layout>
    <div className="bg-[#f5f5f5] text-[#1f2937]">
      <section className="py-10 px-6 md:px-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold mb-8 text-black leading-tight" style={headingStyle}>
              About Revoton
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Revoton Steel is a global distributor of high-performance alloy and
              specialty steels, delivering precision-engineered materials to industries
              that demand strength, reliability, and consistency.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              With a strong foundation built on expertise and trust, we ensure seamless
              supply solutions tailored to modern industrial needs. Our sourcing network
              spans across multiple regions, enabling us to provide premium steel grades
              with assured quality and competitive pricing.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              From procurement to delivery, every step is optimized for efficiency and
              transparency. We don’t just supply steel — we build long-term partnerships
              that support growth, performance, and operational excellence.
            </p>

            <div className="space-y-3 text-gray-800 text-base">
              <p>✔ Strong global sourcing network across trusted suppliers</p>
              <p>✔ Wide range of premium alloy and specialty steel grades</p>
              <p>✔ Efficient logistics ensuring fast and reliable delivery</p>
              <p>✔ Customer-first approach with long-term partnerships</p>
            </div>

          </div>

          <div className="relative">

            <div className="absolute -top-6 -left-6 w-full h-full bg-gray-200 rounded-3xl"></div>

            <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                src="/images/Glow.png"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

          </div>

        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 px-6 md:px-20">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 text-gray-900" style={headingStyle}>
            Our Core Strength
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Forging excellence in alloy steel with innovation, precision, and trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Mission",
              text: "To deliver high-performance alloy steel with unmatched strength and reliability for industrial excellence.",
              img: "images/mis.webp"
            },
            {
              title: "Vision",
              text: "To become a globally trusted leader in advanced alloy steel manufacturing and innovation.",
              img: "images/visionn.jpg"
            },
            {
              title: "Core Values",
              text: "Integrity, precision, durability, and continuous innovation in every alloy we produce.",
              img: "images/valuess.jpg"
            }
          ].map((item, i) => (

            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">

              <div className="h-56 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>

              <div className="p-7 text-left">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.text}</p>
              </div>

            </div>
          ))}

        </div>

      </section>



  <section className="py-8 px-6 md:px-20 bg-gradient-to-b from-[#f8fafc] to-[#eef2f3] text-center">
  <h2
    className="text-4xl md:text-6xl text-[#0f172a] mb-6 leading-tight"
    style={headingStyle}
  >
    Engineering Strength <br /> One Alloy At A Time
  </h2>

  <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
    Our expertise combines advanced metallurgy, global sourcing, and precision engineering to deliver high-performance alloy steel solutions.
  </p>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">

    <div className="bg-[#e6f4f1] p-8 rounded-2xl shadow-xl max-w-sm rotate-[-6deg] hover:rotate-0 transition duration-500">

      <h3 className="text-xl font-semibold mb-3 text-[#134e4a]">
        Who We Are
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        Revoton Steel is a global distributor of alloy and speciality steels,
        delivering strength, precision, and reliability to critical industries worldwide.
      </p>

    </div>
    <div className="bg-[#eaf2ff] p-10 rounded-2xl shadow-2xl max-w-md z-10">

      <h3 className="text-xl font-semibold mb-3 text-[#1e3a8a]">
        What We Do
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        We supply high-performance alloy steels including EN19, EN24, EN31 and more,
        backed by a global sourcing network and certified quality assurance.
      </p>

    </div>
    <div className="bg-[#f3e8e2] p-8 rounded-2xl shadow-xl max-w-sm rotate-[6deg] hover:rotate-0 transition duration-500">

      <h3 className="text-xl font-semibold mb-3 text-[#7c2d12]">
        How We Do It
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        With global procurement, strong supply chains, and technical expertise,
        we ensure fast delivery, competitive pricing, and consistent material quality.
      </p>

    </div>

  </div>
  <div className="mt-20">
    <div className="w-full h-24 bg-[#f1f5f9] rounded-t-[100%]"></div>
  </div>

</section>
<section className="py-12 px-6 md:px-20 bg-[#f1f5f9] text-[#1f2937]">
  <div className="text-center mb-8">
    <h2
      className="text-4xl md:text-5xl"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      Meet Our Directors
    </h2>
  </div>
  <div className="max-w-5xl mx-auto flex flex-col gap-4 md:gap-6">

    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-[220px] md:w-[280px] h-[260px] md:h-[320px] bg-white rounded-xl shadow-sm flex items-center justify-center">
        <img
          src="/images/madhavSir.png"
          className="h-full object-contain p-4"
        />
      </div>
      <div className="max-w-md">
        <p className="text-[16px] tracking-widest text-[#0284c7] mb-1">
          MANAGING DIRECTOR
        </p>

        <h3
          className="text-2xl md:text-3xl mb-1"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Madhav Lakhotia
        </h3>

        <div className="w-12 h-[2px] bg-[#0284c7] mb-2"></div>

        <p className="text-gray-600 text-md leading-relaxed">
          Madhav Lakhotia brings 12+ years of experience in the steel industry.
          He leads operations, sales, and expansion with precision.
        </p>
      </div>

    </div>
    <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:-mt-4">
      <div className="w-[220px] md:w-[280px] h-[260px] md:h-[320px] bg-white rounded-xl shadow-sm flex items-center justify-center md:-mt-20">
        <img
          src="/images/mam.jpeg"
          className="h-full object-contain p-4"
        />
      </div>
      <div className="max-w-md">
        <p className="text-[16px] tracking-widest text-[#0284c7] mb-1">
          DIRECTOR
        </p>

        <h3
          className="text-xl md:text-2xl mb-1"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Suchetna Lakhotia
        </h3>

        <div className="w-12 h-[2px] bg-[#0284c7] mb-2"></div>

        <p className="text-gray-600 text-md leading-relaxed">
          Suchetna Lakhotia handles finance, HR, and operations ensuring smooth growth.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="py-24 px-6 md:px-20 bg-white text-center">
  <h2
    className="text-4xl md:text-5xl mb-6 text-[#1f2937]"
    style={{ fontFamily: "Playfair Display, serif" }}
  >
    Quality & Certifications
  </h2>

  <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
    We adhere to globally recognized standards ensuring superior quality,
    consistency, and reliability in every steel product we deliver.
  </p>
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div className="bg-[#f9fafb] p-10 rounded-2xl shadow-md hover:shadow-xl transition">

      <div className="text-5xl mb-4">🏅</div>

      <h3 className="text-2xl font-semibold mb-3 text-[#134e4a]">
        ISO 9001 Certified
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        Ensuring consistent quality management systems and continuous improvement
        across all operations.
      </p>

    </div>

    <div className="bg-[#f9fafb] p-10 rounded-2xl shadow-md hover:shadow-xl transition">

      <div className="text-5xl mb-4">🔬</div>

      <h3 className="text-2xl font-semibold mb-3 text-[#134e4a]">
        Advanced Testing
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        Ultrasonic, spectro, and full traceability checks to ensure material
        precision and durability.
      </p>

    </div>

    <div className="bg-[#f9fafb] p-10 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-3 text-[#134e4a]">
        Trusted Globally
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        Supplying high-grade alloy steel to industries worldwide with complete
        reliability and transparency.
      </p>

    </div>

  </div>

</section>
     <section className="py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-16 bg-[#f9fafb]">

        <div className="max-w-xl">
          <h2 className="text-4xl mb-6" style={headingStyle}>
            CSR & ESG Commitment
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We integrate sustainability, ethical governance, and social responsibility
            into every aspect of our operations — ensuring long-term value for society and business.
          </p>
        </div>

        <div className="w-[520px] h-[320px] rounded-2xl overflow-hidden shadow">

          <Swiper modules={[Autoplay]} autoplay={{ delay: 2000 }} loop>
            <SwiperSlide>
              <img src="/images/csr.avif" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/esg.jpeg" className="w-full h-full object-cover" />
            </SwiperSlide>
             <SwiperSlide>
              <img src="/images/New.png" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>

        </div>

      </section>
  

    </div>
      </Layout>
  );
}
