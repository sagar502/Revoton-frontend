import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f2f2b] via-[#0c3b36] to-[#061b18] text-white px-6 sm:px-10 md:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Newsletter
          </h2>

          <p className="text-sm text-white/70 mb-4 leading-relaxed">
            Want to get the latest updates and insights?  
            Subscribe to our mailing list.
          </p>

          <div className="flex flex-col sm:flex-row overflow-hidden rounded-md border border-white/20">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-2.5 bg-transparent outline-none text-sm"
            />
            <button className="bg-[#134e4a] px-5 py-2.5 text-sm hover:bg-[#0f3d3a] transition">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-sm tracking-wide">
            SITE MAP
          </h3>

          <div className="flex flex-col gap-1.5 text-sm text-white/70">
            <a className="hover:text-white transition">Home</a>
            <a className="hover:text-white transition">About Us</a>
            <a className="hover:text-white transition">Products</a>
            <a className="hover:text-white transition">Industries</a>
            <a className="hover:text-white transition">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-sm tracking-wide">
            ABOUT US
          </h3>

          <div className="flex flex-col gap-1.5 text-sm text-white/70">
            <a className="hover:text-white transition">Company Profile</a>
            <a className="hover:text-white transition">Global Network</a>
            <a className="hover:text-white transition">Quality</a>
            <a className="hover:text-white transition">Blogs</a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-sm tracking-wide">
            FOLLOW US
          </h3>

          <div className="flex gap-4 text-lg cursor-pointer">
            <span className="hover:text-[#4ade80] transition">🔗</span>
            <span className="hover:text-[#4ade80] transition">📷</span>
            <span className="hover:text-[#4ade80] transition">🐦</span>
            <span className="hover:text-[#4ade80] transition">▶</span>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-8 pt-5 text-center text-sm text-white/60">

        <p className="leading-relaxed">
          Revoton Steel | 107, Rajhans Montessa, Airport Road, Dumas, Surat 395007 India
        </p>

        <p className="mt-1">
          +91 9328295446 | sales@revoton.com
        </p>

        <p className="mt-3 text-xs text-white/40">
          © {new Date().getFullYear()} Revoton Steel. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;