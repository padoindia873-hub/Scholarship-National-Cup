import React from "react";
import { Link } from "react-router-dom";

export default function PrizeListCompetitionExam({ prizes }) {
  const defaultPrizes = [
    {
      id: 1,
      rank: "1st",
      title: "Grand Prize",
      amount: 50000,
      description: "Cash + Trophy",
    },
    {
      id: 2,
      rank: "2nd",
      title: "Runner-up",
      amount: 25000,
      description: "Cash + Certificate",
    },
    {
      id: 3,
      rank: "3rd",
      title: "Third Prize",
      amount: 10000,
      description: "Cash",
    },
    {
      id: 4,
      rank: "Top 10",
      title: "Consolation",
      amount: 2000,
      description: "Gift Voucher",
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
    <section className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 mb-6 text-center sm:text-left">
        <div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-yellow-400">
            Prize List — Competition
          </h2>
          <p className="text-xs sm:text-sm text-blue-200/80">
            Prize breakdown for the competition. Tap any card for details.
          </p>
        </div>

        {/* Always visible on all screen sizes */}
        <Link
          to="/prize-list"
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-2xl shadow-md hover:bg-blue-700 hover:scale-105 transition-transform"
        >
          View Prize List
        </Link>
      </header>

      {/* Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {list.map((p) => (
          <li key={p.id}>
            <Link
              to={`/prize/${p.id}`}
              className="block rounded-2xl p-4 sm:p-5 bg-blue-900/60 hover:bg-blue-900/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg transition-colors"
            >
              {/* Rank + Details */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-400/70 to-blue-500/90 flex items-center justify-center text-blue-900 font-bold text-base sm:text-lg">
                  {p.rank}
                </div>

                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-yellow-100">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200 mt-1">
                    {p.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm text-blue-300">
                        Prize
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
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  className="flex-1 px-3 py-2 bg-transparent border border-blue-700 rounded-lg text-xs sm:text-sm text-yellow-100 hover:border-yellow-400 hover:text-yellow-400 transition"
                >
                  Details
                </button>
                <button
                  type="button"
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-yellow-400 text-blue-900 font-semibold text-xs sm:text-sm shadow-sm hover:scale-105 transition-transform"
                >
                  Register
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer className="mt-6 text-center text-xs sm:text-sm text-blue-300">
        Tip: Pass a <code>prizes</code> prop to customize the list.
      </footer>
    </section>
  );
}
