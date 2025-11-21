import React, { useState } from "react";
import { motion } from "framer-motion";

/* SAMPLE WINNERS */
const sampleWinners = [
  {
    id: 1,
    name: "Riya Sharma",
    roll: "A-102",
    phone: "+91 98765 43210",
    school: "Sunnydale High School",
    prize: "First Prize - Trophy + Certificate",
    merit: "Top scorer (98%)",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    isTop: true,
  },
  {
    id: 2,
    name: "Arjun Das",
    roll: "B-215",
    phone: "+91 91234 56789",
    school: "Green Valley School",
    prize: "Second Prize - Medal",
    merit: "Runner Up",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    isTop: false,
  },
  {
    id: 3,
    name: "Sana Khan",
    roll: "C-331",
    phone: "+91 90123 45678",
    school: "Riverdale Academy",
    prize: "Third Prize - Gift Hamper",
    merit: "Third Place",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    isTop: false,
  },
];

/* 🎊 CONFETTI RAIN COMPONENT */
const ConfettiRain = () => {
  const pieces = Array.from({ length: 45 });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-40">
      {pieces.map((_, i) => (
        <motion.img
          key={i}
          src="/mnt/data/d5880e4f-f246-4705-9d1a-40d5d8e88458.png"
          initial={{
            y: -50,
            x: Math.random() * window.innerWidth,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: window.innerHeight + 100,
            x: Math.random() * window.innerWidth,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-7 h-7 absolute opacity-90"
        />
      ))}
    </div>
  );
};

/* 🎉 CELEBRATION SCREEN */
const CelebrationScreen = ({ winner, onClose }) => {
  if (!winner) return null;

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-500 flex flex-col items-center justify-center text-white">
      <ConfettiRain />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-xl"
      >
        <img src={winner.image} className="w-full h-full object-cover" alt="winner" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mt-6"
      >
        🎉 Congratulations 🎉
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-3xl font-semibold mt-2"
      >
        {winner.name}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg mt-3 bg-white/20 px-4 py-2 rounded-xl backdrop-blur"
      >
        🏆 {winner.prize}
      </motion.p>

      <button
        onClick={onClose}
        className="mt-6 px-6 py-2 bg-black/40 rounded-xl text-white border hover:bg-black/60"
      >
        Close
      </button>
    </div>
  );
};

/* 🏆 TOP WINNERS LIST (MAIN COMPONENT) */
export default function TopWinnersList({ winners = sampleWinners }) {
  const [selectedWinner, setSelectedWinner] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {selectedWinner && (
        <CelebrationScreen
          winner={selectedWinner}
          onClose={() => setSelectedWinner(null)}
        />
      )}

      <h2 className="text-2xl font-semibold mb-4">Top Winners</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {winners.map((w) => (
          <article
            key={w.id}
            onClick={() => setSelectedWinner(w)}
            className={`cursor-pointer p-4 rounded-2xl shadow-md border bg-white overflow-hidden flex flex-col items-center text-center ${
              w.isTop ? "ring-4 ring-yellow-300" : ""
            }`}
          >
            <img
              src={w.image}
              className="w-28 h-28 rounded-full border-4 border-white shadow-sm -mt-6"
            />

            <h3 className="text-lg font-medium mt-3">{w.name}</h3>
            <p className="text-sm text-gray-600">{w.school}</p>
            <p className="text-sm text-gray-500 mt-1">
              Roll: {w.roll} • {w.merit}
            </p>

            <div className="mt-3 px-3 py-2 bg-gray-50 rounded-md">
              <p className="text-sm font-semibold">{w.prize}</p>
              <p className="text-xs text-gray-600">Phone: {w.phone}</p>
            </div>

            <span className="mt-4 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
              Winner
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
