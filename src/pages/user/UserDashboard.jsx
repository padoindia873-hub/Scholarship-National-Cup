import React from "react";

const UserDashboard = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      
      {/* ----- Top Cards Section ----- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Government Student */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Government Student</h2>
          <p className="text-gray-600 text-sm mb-4">
            Government School/ executing from one side to the National(Q)
            competitions...
          </p>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
            Entry: Rs.100/-
          </button>
        </div>

        {/* Private Student */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Private Student</h2>
          <p className="text-gray-600 text-sm mb-4">
            Private School & College Student with Secondary to the National(Q)
            competitions...
          </p>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
            Entry: Rs.200/-
          </button>
        </div>

        {/* Public & Guardian's */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Public & Guardian’s</h2>
          <p className="text-gray-600 text-sm mb-4">
            Private School & College Student with Public School Faciles and from
            one side to the National(Q) Competitions...
          </p>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
            Entry: Rs.200/-
          </button>
        </div>
      </div>

      {/* ----- Steps Section ----- */}
      <h3 className="text-xl font-bold mb-4">Steps</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="border rounded-xl py-3 px-5 text-sm font-medium hover:bg-gray-100 transition">
          For Qualifying Exam & get Membership Card
        </button>

        <button className="border rounded-xl py-3 px-5 text-sm font-medium hover:bg-gray-100 transition">
          Qualify Exam (Offline)
        </button>

        <button className="border rounded-xl py-3 px-5 text-sm font-medium hover:bg-gray-100 transition">
          School & College Level (Offline)
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
