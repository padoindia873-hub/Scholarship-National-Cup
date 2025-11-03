import React, { useEffect, useState } from "react";
import commingSoon from "../assets/comming_soon.webp";

const GetMemberShipCard = () => {
  const targetDate = new Date("January 1, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    weeks: "00",
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    expired: false,
  });

  const formatNumber = (num) => num.toString().padStart(2, "0");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { expired: true };
    }

    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;

    return {
      weeks: formatNumber(weeks),
      days: formatNumber(days),
      hours: formatNumber(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ),
      minutes: formatNumber(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      ),
      seconds: formatNumber(Math.floor((difference % (1000 * 60)) / 1000)),
      expired: false,
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center bg-gradient-to-br from-pink-700 to-purple-800 text-white min-h-[60vh]">
      {/* Top Image */}
      <img
        src={commingSoon}
        alt="Coming Soon"
        className="w-full max-w-[300px] mb-6 drop-shadow-2xl rounded-lg"
      />

      {timeLeft.expired ? (
        <span className="text-green-400 text-xl md:text-2xl font-bold animate-pulse">
          Live Now!
        </span>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mt-4 w-full max-w-4xl">
          {[
            { label: "weeks", key: "weeks" },
            { label: "days", key: "days" },
            { label: "hours", key: "hours" },
            { label: "min", key: "minutes" },
            { label: "sec", key: "seconds" },
          ].map(({ label, key }) => (
            <div
              key={label}
              className="bg-black/60 backdrop-blur-sm rounded-xl border border-gray-700 shadow-md flex flex-col justify-center items-center p-3 sm:p-4"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-none tracking-wider">
                {timeLeft[key]}
              </div>
              <div className="text-sm sm:text-base md:text-lg uppercase text-gray-300 font-medium mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetMemberShipCard;
