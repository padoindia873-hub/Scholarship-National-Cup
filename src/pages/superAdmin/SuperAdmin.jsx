import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Line Chart Data
const lineData = [
  { name: "Mon", users: 200 },
  { name: "Tue", users: 400 },
  { name: "Wed", users: 650 },
  { name: "Thu", users: 900 },
  { name: "Fri", users: 1200 },
  { name: "Sat", users: 1500 },
  { name: "Sun", users: 1800 },
];

// Pie Chart Data
const pieData = [
  { name: "Admins", value: 12 },
  { name: "Users", value: 5483 },
  { name: "Super Admins", value: 3 },
];

const COLORS = ["#4f46e5", "#10b981", "#f59e0b"];

const SuperAdmin = () => {
  return (
    <div className="p-10 space-y-8 bg-gray-100 min-h-screen">

      {/* Summary Boxes */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-gray-500 text-sm">Total Admins</p>
          <h1 className="text-3xl font-bold">12</h1>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h1 className="text-3xl font-bold">5,483</h1>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-gray-500 text-sm">Super Admins</p>
          <h1 className="text-3xl font-bold">3</h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-2 gap-6">

        {/* Latest Activities */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Latest Activities</h2>

          <p className="text-gray-600">Admin Smith created a new user.</p>
          <p className="text-gray-400 text-sm mb-3">2 hours ago</p>

          <p className="text-gray-600">New Student registered.</p>
          <p className="text-gray-400 text-sm mb-3">4 hours ago</p>

          <p className="text-gray-600">System settings updated.</p>
          <p className="text-gray-400 text-sm">1 day ago</p>
        </div>

        {/* System Overview - Line Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">System Overview</h2>

          <div className="w-full h-56 border-dashed border rounded-xl flex items-center justify-center p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={1800}
                  animationBegin={200}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Users Distribution</h2>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
                animationDuration={1600}
                animationBegin={100}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default SuperAdmin;
