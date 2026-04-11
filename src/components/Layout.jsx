import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <TopHeader />
        <Navbar />
      </div>

      <main className="mt-[90px] flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}