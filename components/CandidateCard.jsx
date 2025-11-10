"use client";
import React from "react";
import { motion } from "framer-motion";

const CandidateCard = ({ current }) => {
  return (
    <motion.div
      className="relative max-w-5xl mx-auto bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-2xl border border-blue-200 rounded-2xl overflow-hidden flex flex-col md:flex-row mt-16 backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ✨ Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-blue-200/20"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left: Video */}
      <motion.div
        className="relative md:w-1/2 w-full overflow-hidden rounded-l-2xl"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <video
          src={current.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-l-2xl"
        />
        <div className="absolute bottom-3 left-3 text-white bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg">
          <h3 className="font-semibold text-lg">{current.name}</h3>
          <p className="text-sm opacity-90">{current.role}</p>
        </div>
      </motion.div>

      {/* Right: Info */}
      <div className="relative z-10 p-6 flex flex-col justify-center md:w-1/2 w-full">
        <div className="flex items-center mb-4">
          <motion.img
            src={current.photo}
            className="w-14 h-14 rounded-full border-4 border-blue-400 shadow-md mr-4"
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <div>
            <h2 className="text-xl font-bold text-blue-800">{current.name}</h2>
            <p className="text-gray-600 text-sm">{current.role}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{current.description}</p>

        <div className="space-y-2 text-gray-600 text-sm">
          <p>📍 {current.location}</p>
          <p>📞 {current.phone}</p>
          <p>✉️ {current.email}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          <span className="text-lg">⬇️</span> Resume
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CandidateCard;
