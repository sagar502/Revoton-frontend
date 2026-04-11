import React, { useState } from "react";
import Layout from "../components/Layout";
export default function KnowYourSteel() {

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const data = [
    { name: "H13", category: "Hot Work", desc: "Hot work tool steel" },
    { name: "H11", category: "Hot Work", desc: "High toughness steel" },
    { name: "D2", category: "Cold Work", desc: "High wear resistance" },
    { name: "A2", category: "Cold Work", desc: "Air hardening steel" },
    { name: "4140", category: "Engineering", desc: "Alloy steel EN19" },
    { name: "4340", category: "Engineering", desc: "High strength steel" },
    { name: "EN31", category: "Bearing", desc: "Bearing steel" },
  ];

  const categories = ["All", "Hot Work", "Cold Work", "Engineering", "Bearing"];
  const filtered = data.filter((item) => {
    return (
      (activeCategory === "All" || item.category === activeCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bg-[#0b1c2c] text-white min-h-screen pt-28 px-6 md:px-20">
      <div className="mb-16">
        <h1 className="text-5xl font-semibold mb-4">Know Your Steel</h1>
        <p className="text-gray-400">Explore high-performance steel grades</p>
      </div>

      <div className="grid md:grid-cols-4 gap-10">

        <div className="md:col-span-1 bg-white/5 p-6 rounded-2xl border border-white/10 h-fit">

          <h3 className="text-lg mb-4">Filters</h3>

          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`block w-full text-left px-4 py-2 mb-2 rounded-md transition ${
                activeCategory === cat
                  ? "bg-[#14b8a6] text-black"
                  : "hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        <div className="md:col-span-3">
          <input
            type="text"
            placeholder="Search grade..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-8 px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <div className="grid md:grid-cols-3 gap-8">

            {filtered.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelected(item)}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 cursor-pointer hover:scale-105 hover:shadow-[0_0_25px_#14b8a6] transition duration-300"
              >
                <h2 className="text-xl text-[#14b8a6]">{item.name}</h2>
                <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>

                <button className="mt-4 text-sm text-[#14b8a6]">
                  View Details →
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0b1c2c] max-w-3xl w-full p-8 rounded-2xl border border-white/10 animate-fadeIn"
          >
            <h2 className="text-3xl mb-4">{selected.name}</h2>
            <p className="text-gray-400 mb-6">{selected.desc}</p>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white/5 p-4 rounded-xl">
                <h3 className="mb-2">Properties</h3>
                <p>Hardness: 50 HRC</p>
                <p>Strength: High</p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl">
                <h3 className="mb-2">Applications</h3>
                <p>• Automotive</p>
                <p>• Tooling</p>
              </div>

            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 px-6 py-2 bg-[#14b8a6] rounded-full text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}