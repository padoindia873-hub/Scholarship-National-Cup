import React, { useEffect, useState } from "react";

const GetMemberShipCard = () => {
  const targetDate = new Date("January 1, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    expired: false,
  });

  const formatNumber = (num) =>
    num.toString().padStart(2, "0"); //  Always 2 digits

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { expired: true };
    }

    return {
      days: formatNumber(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ),
      hours: formatNumber(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ),
      minutes: formatNumber(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      ),
      seconds: formatNumber(
        Math.floor((difference % (1000 * 60)) / 1000)
      ),
      expired: false,
    };
  };

  useEffect(() => {
    // Update immediately when component loads
    setTimeLeft(calculateTimeLeft());

    // Then update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <h1 className="text-3xl font-extrabold mb-3">Get Membership Card</h1>
      <h2 className="text-base md:text-lg font-medium text-gray-700 mb-6">
        Will Start from{" "}
        <span className="font-bold text-[#FF9500]">1 January 2026</span>
      </h2>

      {timeLeft.expired ? (
        <span className="text-green-600 text-2xl font-bold animate-pulse">
          🎉 Live Now!
        </span>
      ) : (
        <div className="flex gap-3 md:gap-6 text-center">
          {[
            { label: "Days", key: "days" },
            { label: "Hours", key: "hours" },
            { label: "Min", key: "minutes" },
            { label: "Sec", key: "seconds" },
          ].map(({ label, key }) => (
            <div
              key={label}
              className="bg-white border shadow-lg rounded-lg p-3 md:p-4 flex flex-col items-center w-20 md:w-24"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#FF9500]">
                {timeLeft[key]}
              </div>
              <div className="text-xs md:text-sm font-medium text-gray-600">
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
