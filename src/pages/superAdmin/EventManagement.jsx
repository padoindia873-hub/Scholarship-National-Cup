import React, { useState } from "react";

const EventManagement = () => {
  const today = new Date();

  // Marked Dates List (add as many as you want)
  const markedDates = [
    { date: new Date("2025-11-05"), label: "Holiday" },
    { date: new Date("2025-11-10"), label: "Parent Meeting" },
    { date: new Date("2025-11-15"), label: "Sports Day" },
    { date: new Date("2025-11-20"), label: "Extra Class" },
  ];

  // Next Exam Date (highlighted differently)
  const nextExamDate = new Date("2025-11-22");

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    let calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push("");
    }

    for (let d = 1; d <= totalDays; d++) {
      calendarDays.push(d);
    }

    return calendarDays;
  };

  const calendarDays = generateCalendar(currentMonth, currentYear);

  // Month navigation
  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Date Format
  const formatDate = (d) =>
    `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Event Management</h2>

      {/* Next Exam Card */}
      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        <h3>Next Exam Date</h3>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {formatDate(nextExamDate)}
        </p>
      </div>

      {/* Calendar Section */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            fontSize: "18px",
          }}
        >
          <button onClick={goPrevMonth}>◀</button>

          <strong>
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentYear}
          </strong>

          <button onClick={goNextMonth}>▶</button>
        </div>

        {/* Week Days */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Calendar Days */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          {calendarDays.map((day, index) => {
            if (!day) return <div key={index}></div>;

            const isExamDay =
              day === nextExamDate.getDate() &&
              currentMonth === nextExamDate.getMonth() &&
              currentYear === nextExamDate.getFullYear();

            const isMarked = markedDates.some(
              (m) =>
                day === m.date.getDate() &&
                currentMonth === m.date.getMonth() &&
                currentYear === m.date.getFullYear()
            );

            return (
              <div
                key={index}
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  margin: "2px",
                  background: isExamDay
                    ? "#FFEB3B"
                    : isMarked
                    ? "#42A5F5"
                    : "#f2f2f2",
                  color: isMarked ? "#fff" : "#000",
                  fontWeight: isExamDay || isMarked ? "bold" : "normal",
                }}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
