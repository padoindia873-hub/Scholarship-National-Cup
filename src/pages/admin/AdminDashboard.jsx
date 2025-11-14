import React, { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  
} from "recharts";

const AdminDashboard = () => {
    const [summary, setSummary] = useState([]);

  useEffect(() => {
    calculateDateData();
  }, []);

  const calculateDateData = () => {
    // Set summary data
    setSummary([
      { label: "School And Collage Level Candidates", value: 1 },
      { label: "Block Level Candidates", value: 1 },
      { label: "District Level (Offline)", value: 1 },
      { label: "State Level (Offline)", value: 1 },

    ]);
  };
  const upcomingExams = [
    { name: "Asia Cup", date: "June 23, 10 AM" },
    { name: "World Cup", date: "June 23, 10 AM" },

  ];

  const recentExams = [
    { name: "GK & IQ Exam (40 Marks)", date: "June 20, 2024" },
    { name: "Academy Exam (60 Marks)", date: "June 20, 2024" },
   
  ];

  const performanceData = [
    { month: "Jan", score: 60 },
    { month: "Feb", score: 75 },
    { month: "Mar", score: 70 },
    { month: "Apr", score: 80 },
    { month: "May", score: 78 },
    { month: "Jun", score: 90 },
  ];

  const participationData = [
    { day: "Mon", students: 120 },
    { day: "Tue", students: 150 },
    { day: "Wed", students: 130 },
    { day: "Thu", students: 170 },
    { day: "Fri", students: 220 },
    { day: "Sat", students: 190 },
    { day: "Sun", students: 180 },
  ];

  const tournament = [
    {label: "Qualifying Exam" , score : 90},
    {label: "School And Collage Level" , score : 80},
    {label: "Block Level" , score : 70}, 
    {label: "District Level (Offline)" , score : 60},
    {label: "State Level (Offline)" , score : 50},
    {label: "National Level (Offline)" , score : 40},

  ]

  const subjects = [
    { name: "Academy", score: 87 },
    { name: "GK & IQ", score: 79 },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#10b981] drop-shadow-[0_0_8px_#10b981]">
        Admin Dashboard
        </h1>

      {/* Summary Cards */}
       <div className="p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {summary.map((item) => (
          <div
            key={item.label}
            className="bg-gray-800 rounded-2xl p-5 text-center shadow-lg hover:shadow-blue-500/20 transition"
          >
            <p className="text-gray-300 text-lg font-semibold mb-4">{item.label}</p>
            <h2 className="text-3xl font-bold mt-1 text-blue-400">
              {item.value}
            </h2>
          </div>
        ))}
      </div>
    </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Exams */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-[#10b981]">Upcoming Exams</h3>    
          {upcomingExams.map((exam) => (
            <div
              key={exam.name}
              className="flex justify-between border-b border-gray-700 py-2 text-lg font-semibold mb-4"
            >
              <span>{exam.name}</span>
              <span className="text-gray-400 text-sm ">{exam.date}</span>
            </div>
          ))}
        </div>

        {/* Recently Conducted Exams */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-[#10b981]">Recently Conducted Exams</h3>
          {recentExams.map((exam) => (
            <div
              key={exam.name}
              className="flex justify-between border-b border-gray-700 py-2 border-b border-gray-700 py-2 text-lg font-semibold mb-4" 
            >
              <span>{exam.name}</span>
              <span className="text-gray-400 text-sm">{exam.date}</span>
            </div>
          ))}
        </div>

        {/* Performance Trends (Line Chart) */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-[#10b981]">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performing Subjects */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-[#10b981]">Top Performing Subjects</h3>
          {subjects.map((subject) => (
            <div key={subject.name} className="mb-4">
              <div className="flex justify-between mb-1 border-b border-gray-700 py-2 text-lg font-semibold mb-4">
                <span>{subject.name}</span>
                <span className="text-gray-400">{subject.score}</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${subject.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Student Participation (Bar Chart) */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-lg md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-[#10b981]">Candidates Participation</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={participationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="students" fill="#3b82f6" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

         {/* Student tournament (Bar Chart) */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-lg md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-[#10b981]">Candidates Tournament</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={tournament}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="label" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
