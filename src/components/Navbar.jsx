import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 9999;
          font-family: 'Outfit', sans-serif;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .nav-accent-bar {
          height: 5px;
          background: linear-gradient(90deg, #0f1c2e, #5A8FC4, #1a6fa8, #0f1c2e);
          background-size: 300% 100%;
          animation: shimmer 4s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 300% 0; }
        }

        .nav-inner {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(90,143,196,0.18);
          transition: all 0.4s ease;
        }

        .nav-root.scrolled .nav-inner {
          background: rgba(255,255,255,0.99);
          box-shadow: 0 4px 24px rgba(15,28,46,0.1);
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2px;
        }

        /* LOGO */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 2px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-logo img {
          height: 60px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .nav-logo:hover img {
          transform: scale(1.06) rotate(-2deg);
          filter: drop-shadow(0 4px 12px rgba(90,143,196,0.4));
        }

        /* NAV LINKS */
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 6px 12px;
          font-size: 17.5px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
          color: #050c14;
          text-decoration: none;
          border-radius: 8px;
          border: none;
          background: none;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: color 0.25s ease, background 0.25s ease;
          white-space: nowrap;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(90,143,196,0.12), rgba(26,111,168,0.08));
          border-radius: 8px;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          opacity: 1;
          transform: scale(1);
        }

        .nav-link:hover {
          color: #1a6fa8;
        }

        .nav-link.active {
          color: #0f1c2e;
          font-weight: 600;
        }

        .nav-link-text {
          position: relative;
          z-index: 1;
        }

        /* CHEVRON */
        .chevron {
          width: 13px;
          height: 13px;
          position: relative;
          z-index: 1;
          color: #5A8FC4;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          flex-shrink: 0;
        }

        .chevron.open {
          transform: rotate(180deg);
          color: #1a6fa8;
        }

        /* DROPDOWN */
        .dropdown-wrap { position: relative; }

        .dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 200px;
          background: #ffffff;
          border: 1px solid rgba(90,143,196,0.2);
          border-top: 3px solid #5A8FC4;
          border-radius: 0 0 14px 14px;
          box-shadow: 0 20px 50px rgba(15,28,46,0.13), 0 4px 16px rgba(90,143,196,0.1);
          overflow: hidden;
          animation: dropIn 0.22s cubic-bezier(0.4,0,0.2,1) forwards;
          transform-origin: top center;
        }

        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px) scaleY(0.95); }
          to   { opacity: 1; transform: translateY(0) scaleY(1); }
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 17px;
          padding: 10px 16px;
          font-size: 16.5px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
          color: #3a4a5c;
          text-decoration: none;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
          position: relative;
        }

        .dropdown-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(90,143,196,0.08), transparent);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .dropdown-item:hover {
          color: #1a6fa8;
          border-left-color: #5A8FC4;
          padding-left: 20px;
        }

        .dropdown-item:hover::after { opacity: 1; }

        .dropdown-divider {
          height: 1px;
          background: rgba(90,143,196,0.1);
          margin: 0;
        }

        /* CTA BUTTON */
        .nav-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 20px;
          font-size: 13.5px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          color: #0f1c2e;
          text-decoration: none;
          border: 1.5px solid #0f1c2e;
          border-radius: 50px;
          overflow: hidden;
          transition: border-color 0.35s ease;
          background: transparent;
          letter-spacing: 0.03em;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0f1c2e 0%, #1a4a70 100%);
          transform: translateX(-105%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        .nav-cta:hover { border-color: #1a4a70; }
        .nav-cta:hover::before { transform: translateX(0); }

        .nav-cta span,
        .cta-dot {
          position: relative;
          z-index: 1;
          transition: color 0.35s ease;
        }

        .nav-cta:hover span { color: #ffffff; }

        .cta-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #5A8FC4;
          flex-shrink: 0;
          transition: background 0.35s ease, transform 0.35s ease;
        }

        .nav-cta:hover .cta-dot {
          background: #5A8FC4;
          transform: scale(1.4);
        }

        /* HAMBURGER */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 7px;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.2s ease;
        }

        .hamburger:hover { background: rgba(15,28,46,0.06); }

        .hamburger span {
          display: block;
          width: 20px;
          height: 2px;
          background: #0f1c2e;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }

        .hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        /* MOBILE MENU */
        .mobile-menu {
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(90,143,196,0.15);
          padding: 10px 24px 18px;
          animation: slideDown 0.28s ease forwards;
        }

        .mobile-menu.hidden { display: none; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mobile-link {
          display: block;
          padding: 10px 4px;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
          color: #3a4a5c;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: color 0.2s ease;
        }

        .mobile-link:hover { color: #1a6fa8; }

        .mobile-sub { padding-left: 14px; }

        .mobile-sub .mobile-link {
          font-size: 13px;
          color: #5A8FC4;
          border-bottom: none;
          padding: 7px 4px;
        }

        @media (max-width: 1024px) {
          .nav-menu  { display: none !important; }
          .nav-cta   { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      <header className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-accent-bar" />
        <div className="nav-inner">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              <img src="/images/logo.jpeg" alt="Revoton Steel" />
            </Link>

            <nav ref={ref}>
              <ul className="nav-menu">

                <li>
                  <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                    <span className="nav-link-text">Home</span>
                  </Link>
                </li>

                <li>
                  <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
                    <span className="nav-link-text">About Us</span>
                  </Link>
                </li>

                <li className="dropdown-wrap">
                  <button
                    className={`nav-link ${open === "ip" ? "active" : ""}`}
                    onClick={() => setOpen(open === "ip" ? null : "ip")}
                  >
                    <span className="nav-link-text">Industries & Products</span>
                    <svg className={`chevron ${open === "ip" ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {open === "ip" && (
                    <div className="dropdown">
                      <Link to="/industries" onClick={() => setOpen(null)} className="dropdown-item">🏗️ Industries</Link>
                      <div className="dropdown-divider" />
                      <Link to="/categories" onClick={() => setOpen(null)} className="dropdown-item">📦 Categories</Link>
                      <div className="dropdown-divider" />
                      <Link to="/photos"     onClick={() => setOpen(null)} className="dropdown-item">📷 Photos</Link>
                    </div>
                  )}
                </li>
                <li className="dropdown-wrap">
                  <button
                    className={`nav-link ${open === "steel" ? "active" : ""}`}
                    onClick={() => setOpen(open === "steel" ? null : "steel")}
                  >
                    <span className="nav-link-text">Know Your Steel</span>
                    <svg className={`chevron ${open === "steel" ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {open === "steel" && (
                    <div className="dropdown">
                      <Link to="/grades"     onClick={() => setOpen(null)} className="dropdown-item">🔩 Grades</Link>
                      <div className="dropdown-divider" />
                      <Link to="/shapes"     onClick={() => setOpen(null)} className="dropdown-item">📐 Shapes</Link>
                      <div className="dropdown-divider" />
                      <Link to="/calculator" onClick={() => setOpen(null)} className="dropdown-item">🧮 Calculator</Link>
                      <div className="dropdown-divider" />
                      <Link to="/cutting"    onClick={() => setOpen(null)} className="dropdown-item">✂️ Cutting Tips</Link>
                    </div>
                  )}
                </li>

                <li>
                  <Link to="/blogs" className={`nav-link ${isActive("/blogs") ? "active" : ""}`}>
                    <span className="nav-link-text">Media & Blogs</span>
                  </Link>
                </li>

              </ul>
            </nav>

            <Link to="/getintouch" className="nav-cta">
              <div className="cta-dot" />
              <span>Get in Touch</span>
            </Link>
            <button
              className={`hamburger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span /><span /><span />
            </button>

          </div>
        </div>

        <div className={`mobile-menu ${mobileOpen ? "" : "hidden"}`}>
          <Link to="/"      className="mobile-link">Home</Link>
          <Link to="/about" className="mobile-link">About Us</Link>
          <div>
            <div className="mobile-link" style={{ fontWeight: 600, color: "#0f1c2e" }}>Industries & Products</div>
            <div className="mobile-sub">
              <Link to="/industries" className="mobile-link">Industries</Link>
              <Link to="/categories" className="mobile-link">Categories</Link>
              <Link to="/photos"     className="mobile-link">Photos</Link>
            </div>
          </div>
          <div>
            <div className="mobile-link" style={{ fontWeight: 600, color: "#0f1c2e" }}>Know Your Steel</div>
            <div className="mobile-sub">
              <Link to="/grades"     className="mobile-link">Grades</Link>
              <Link to="/shapes"     className="mobile-link">Shapes</Link>
              <Link to="/calculator" className="mobile-link">Calculator</Link>
              <Link to="/cutting"    className="mobile-link">Cutting Tips</Link>
            </div>
          </div>
          <Link to="/blogs" className="mobile-link">Media & Blogs</Link>
          <Link
            to="/getintouch"
            style={{
              display: "block", marginTop: "12px", textAlign: "center",
              padding: "11px", background: "linear-gradient(135deg,#0f1c2e,#1a4a70)",
              color: "#fff", borderRadius: "50px", fontWeight: 600,
              textDecoration: "none", fontFamily: "'Outfit', sans-serif", fontSize: "14px"
            }}
          >
            Get in Touch
          </Link>
        </div>

      </header>
    </>
  );
};

export default Navbar;
