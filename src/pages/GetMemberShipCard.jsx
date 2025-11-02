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
    <div className="flex flex-col items-center justify-center py-10 text-center bg-gradient-to-br from-pink-700 to-purple-800 text-white min-h-[60vh]">
      {/* Top Image */}
      <img
        src={commingSoon}
        alt="Coming Soon"
        className="w-100 md:w-100 mb-6 drop-shadow-2xl rounded-xl"
      />

      {/* <h1 className="text-3xl font-extrabold mb-3">Next Year Begins In:</h1> */}

      {timeLeft.expired ? (
        <span className="text-green-400 text-2xl font-bold animate-pulse">
          Live Now!
        </span>
      ) : (
        <div className="flex gap-3 md:gap-5 mt-6">
          {[
            { label: "weeks", key: "weeks" },
            { label: "days", key: "days" },
            { label: "hours", key: "hours" },
            { label: "min", key: "minutes" },
            { label: "sec", key: "seconds" },
          ].map(({ label, key }) => (
            <div
              key={label}
              className="w-[200px] h-[200px] bg-black/70 backdrop-blur-sm rounded-2xl shadow-md border border-gray-700 flex flex-col justify-center items-center"
            >
              <div className="text-[100px] font-extrabold text-white leading-none tracking-widest">
                {timeLeft[key]}
              </div>
              <div className=" text-[40px] uppercase text-lg text-gray-300 font-semibold mt-2">
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
