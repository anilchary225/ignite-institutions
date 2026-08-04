import React, { useState } from "react";
import { MapPin } from "lucide-react";

const campusData = {
  Colleges: [
    { name: "Ignite Junior College", location: "Kukatpally, Hyderabad", image: "https://placehold.co/600x420/0f172a/f97316?text=Ignite+College+1" },
    { name: "Ignite Junior College", location: "Madhapur, Hyderabad", image: "https://placehold.co/600x420/0f172a/f97316?text=Ignite+College+2" },
    { name: "Ignite Junior College", location: "Dilsukhnagar, Hyderabad", image: "https://placehold.co/600x420/0f172a/f97316?text=Ignite+College+3" },
  ],
  Schools: [
    { name: "Ignite High School", location: "Miyapur, Hyderabad", image: "https://placehold.co/1200x500/1e293b/22c55e?text=Ignite+School" },
  ],
};

export default function Campuses() {
  const [activeTab, setActiveTab] = useState("Colleges");
  const tabs = Object.keys(campusData);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          Our Campuses
        </h2>
        <p className="mt-2 text-slate-500 text-center">
          Explore Ignite branches across Hyderabad
        </p>

        {/* Tabs */}
        <div className="mt-10 flex justify-center gap-10 border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-4 text-base font-semibold transition-colors duration-300 ${
                activeTab === tab
                  ? "text-orange-600"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              {tab}
              <span
                className={`absolute left-0 -bottom-[1px] h-[3px] w-full rounded-full bg-orange-600 transition-transform duration-300 ease-out origin-left ${
                  activeTab === tab ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div
          key={activeTab}
          className={`mt-12 grid gap-6 animate-[fadeIn_0.4s_ease-out] ${
            activeTab === "Schools"
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {campusData[activeTab].map((campus, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={campus.image}
                alt={campus.name}
                className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${
                  activeTab === "Schools" ? "h-96" : "h-64"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <p className="text-white font-semibold text-sm">
                  {campus.name}
                </p>
                <div className="mt-1 flex items-center gap-1 text-white/80 text-xs">
                  <MapPin size={12} />
                  <span>{campus.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}