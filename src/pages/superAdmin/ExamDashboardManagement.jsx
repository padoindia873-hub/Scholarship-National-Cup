import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dashboardData = {
  totalRegistered: 7,
  overview: [
    {
      title: "Qualify Level Overview",
      chartColor: "#34D399", // Tailwind green-400
      totalCandidates: 362962126,
      roomCapacity: 53,
      totalRooms: 6848342,
      winners: 0,
      online: true,
    },
    {
      title: "School Level Overview",
      chartColor: "#3B82F6", // Tailwind blue-400
      totalCandidates: 6848342,
      roomCapacity: 53,
      totalRooms: 129214,
      winners: 0,
      online: true,
    },
    {
      title: "Block Level Overview",
      chartColor: "#F59E0B", // Tailwind orange-400
      totalCandidates: 129214,
      roomCapacity: 53,
      totalRooms: 2438,
      winners: 0,
      online: true,
    },
    {
      title: "District Level Overview",
      chartColor: "#EF4444", // Tailwind red-400
      totalCandidates: 2438,
      roomCapacity: 53,
      totalRooms: 46,
      winners: 0,
      online: false,
    },
  ],
};

const ExamDashboardManagement = () => {
  return (
    <div className="p-6">
      {/* Total Registered Candidates */}
      <div className="mb-6 text-center">
        <div className="text-blue-600 text-3xl mb-2">👤</div>
        <h2 className="text-lg font-semibold">Total Registered Candidates</h2>
        <p className="text-green-600 text-2xl">
          {dashboardData.totalRegistered}
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardData.overview.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
            <h3 className="font-semibold mb-2">{item.title}</h3>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={180}>
              <BarChart
                data={[
                  {
                    name: item.title,
                    value: item.totalCandidates,
                  },
                ]}
              >
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />

                <YAxis
                  domain={[0, "dataMax"]}
                  tickFormatter={(value) => value.toLocaleString()} // SHOW VALUES
                  tick={{ fontSize: 10 }}
                />

                <Tooltip formatter={(value) => value.toLocaleString()} />

                <Bar dataKey="value" fill={item.chartColor} barSize={50} />
              </BarChart>
            </ResponsiveContainer>

            {/* Details */}
            <ul className="text-sm space-y-1">
              <li>Total Candidates: {item.totalCandidates.toLocaleString()}</li>
              <li>Room Capacity: {item.roomCapacity}</li>
              <li>Total Rooms: {item.totalRooms.toLocaleString()}</li>
              <li>Winners: {item.winners}</li>
              <li>
                Online:{" "}
                <span
                  className={item.online ? "text-green-600" : "text-red-600"}
                >
                  {item.online ? "Yes" : "No"}
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamDashboardManagement;
