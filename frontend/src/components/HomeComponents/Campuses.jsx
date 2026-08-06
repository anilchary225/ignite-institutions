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
    <section className="py-14 px-4 sm:px-8 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-green-700 uppercase mb-2">
            Our Locations
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            Our Campuses
          </h2>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Explore Ignite branches across Hyderabad
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-green-700 text-white shadow-sm shadow-green-700/30"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-green-700/10 hover:text-green-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div
          key={activeTab}
          className={`grid gap-5 ${
            activeTab === "Schools"
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {campusData[activeTab].map((campus, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={campus.image}
                alt={campus.name}
                className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                  activeTab === "Schools" ? "h-72 sm:h-96" : "h-52 sm:h-64"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm">{campus.name}</p>
                <div className="mt-1 flex items-center gap-1.5 text-white/80 text-xs">
                  <MapPin size={12} />
                  <span>{campus.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
