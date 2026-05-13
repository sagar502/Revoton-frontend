import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f2f2b] via-[#0c3b36] to-[#061b18] text-white px-6 sm:px-10 md:px-20 py-12">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Newsletter */}
        <div>
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Newsletter
          </h2>

          <p className="text-sm text-white/70 mb-4 leading-relaxed">
            Want to get the latest updates and insights?
            <br />
            Subscribe to our mailing list.
          </p>

          <form className="flex flex-col sm:flex-row overflow-hidden rounded-md border border-white/20">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-2.5 bg-transparent outline-none text-sm"
            />

            <button
              type="submit"
              className="bg-[#134e4a] px-5 py-2.5 text-sm hover:bg-[#0f3d3a] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Site Map */}
        <div>
          <h3 className="mb-3 font-semibold text-sm tracking-wide">
            SITE MAP
          </h3>

          <div className="flex flex-col gap-2 text-sm text-white/70">
            <a href="/" className="hover:text-white transition">
              Home
            </a>

            <a href="/about" className="hover:text-white transition">
              About Us
            </a>

            <a href="/products" className="hover:text-white transition">
              Products
            </a>

            <a href="/industries" className="hover:text-white transition">
              Industries
            </a>

            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="mb-3 font-semibold text-sm tracking-wide">
            ABOUT US
          </h3>

          <div className="flex flex-col gap-2 text-sm text-white/70">
            <a href="/company-profile" className="hover:text-white transition">
              Company Profile
            </a>

            <a href="/global-network" className="hover:text-white transition">
              Global Network
            </a>

            <a href="/quality" className="hover:text-white transition">
              Quality
            </a>

            <a href="/blogs" className="hover:text-white transition">
              Blogs
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-3 font-semibold text-sm tracking-wide">
            FOLLOW US
          </h3>

          <div className="flex gap-4 text-lg">
            
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4ade80] transition"
            >
              🔗
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4ade80] transition"
            >
              📷
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4ade80] transition"
            >
              🐦
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4ade80] transition"
            >
              ▶
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-8 pt-5 text-center text-sm text-white/60">

        <p className="leading-relaxed">
          Revoton Steel | 107, Rajhans Montessa, Airport Road, Dumas, Surat
          395007 India
        </p>

        <p className="mt-1">
          <a
            href="tel:+916358043693"
            className="hover:text-white transition"
          >
            +91 6358043693
          </a>

          {" | "}

          <a
            href="mailto:sales@revoton.com"
            className="hover:text-white transition"
          >
            sales@revoton.com
          </a>
        </p>

        <p className="mt-3 text-xs text-white/40">
          © {new Date().getFullYear()} Revoton Steel. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;