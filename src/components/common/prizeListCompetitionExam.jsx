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

      {/* Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
      
      >
        {list.map((p) => (
          <li key={p.id}>
            <Link
              to={`/prize/${p.id}`}
              className="block rounded-2xl p-5 sm:p-6 bg-blue-900/60 hover:bg-blue-900/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg transition-colors"
              
            >
              {/* Rank + Details */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 
                  rounded-xl bg-gradient-to-br from-yellow-400/70 to-blue-500/90 
                  flex items-center justify-center leading-none
                  text-blue-900 font-extrabold text-sm sm:text-base md:text-lg text-center"
                >
                  {p.rank}
                </div>

                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-yellow-100">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200 mt-1">
                    {p.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm text-blue-300">
                        {p.type}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-yellow-100">
                        {formatCurrency(p.amount)}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-blue-800 text-yellow-200">
                        #{p.rank.replace(" ", "")}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      className="flex-1 px-3 py-2 bg-transparent border border-blue-700 rounded-lg text-xs sm:text-sm text-yellow-100 hover:border-yellow-400 hover:text-yellow-400 transition"
                    >
                      {p.Details}
                    </button>
                    <button
                      type="button"
                      className="flex-1 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-yellow-400 text-blue-900 font-semibold text-xs sm:text-sm shadow-sm hover:scale-105 transition-transform"
                    >
                      All Prize
                    </button>
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
