import React from "react";
import { Link } from "react-router-dom";

export default function PrizeListCompetitionExam({ prizes }) {
  const defaultPrizes = [
    {
      id: 1,
      rank: "1st Level",
      title: "Top Rank Prize",
      amount: 5000,
      description: "School and Collage",
      Details: "Online",
      type: "cash",
    },
    {
      id: 2,
      rank: "2nd Level",
      title: "Top Rank Prize",
      amount: 50000,
      description: "Block Level",
      Details: "Online",
      type: "cash",
    },
    {
      id: 3,
      rank: "3rd Level",
      title: "Top Rank Prize",
      amount: 500000,
      description: "District Level",
      Details: "Offline",
      type: "cash",
    },
    {
      id: 4,
      rank: "4th Level",
      title: "Top Rank Prize",
      amount: 5000000,
      description: "State Level",
      Details: "Offline",
      type: "cash",
    },
  ];

  const list = prizes && prizes.length ? prizes : defaultPrizes;

  const formatCurrency = (n) => {
    try {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(n);
    } catch {
      return `₹${n}`;
    }
  };

  // 🔥 Background colors pattern (repeats every 4 cards)
  const bgColors = [
    "bg-[#339CFFFF]/80", // saffron
    "bg-[#138808]/80",
    "bg-[#339CFFFF]/80",
    "bg-[#138808]/80",

  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <Link
          to="/prize-list"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-2xl sm:text-3xl md:text-4xl font-extrabold rounded-2xl shadow-md text-center hover:bg-blue-700 hover:scale-105 transition-transform"
        >
          Level Wise Prize List
        </Link>
      </header>

      {/* Prize Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {list.map((p, i) => (
          <li key={p.id}>
            <Link
              to={`/prize/${p.id}`}
              className={`block rounded-2xl p-5 sm:p-6 shadow-lg hover:scale-[1.02] transition-all ${bgColors[i % bgColors.length]}`}
            >
              <div className="flex items-start gap-4">
                
                {/* Rank Badge */}
                <div
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-400/70 to-blue-500/90 flex items-center justify-center font-extrabold text-blue-900 text-sm sm:text-base md:text-lg"
                >
                  {p.rank}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">{p.title}</h3>
                  <p className="text-xs sm:text-sm opacity-80 mt-1">{p.description}</p>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm opacity-75">{p.type}</div>
                      <div className="text-base sm:text-lg font-bold">{formatCurrency(p.amount)}</div>
                    </div>

                    <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-black/20">
                      #{p.rank.replace(" ", "")}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <button className="flex-1 px-3 py-2 bg-transparent border border-black/30 rounded-lg text-xs sm:text-sm hover:border-black hover:text-black transition">
                      {p.Details}
                    </button>

                    <Link to="/PrizeLists" className="flex-1">
                      <button className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-yellow-400 text-black font-semibold text-xs sm:text-sm shadow-sm hover:scale-105 transition-transform">
                        All Prize
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer className="mt-8 text-center text-xs sm:text-sm text-blue-300">
        💡 Tip: Pass a <code>prizes</code> prop to customize the list.
      </footer>
    </section>
  );
}
