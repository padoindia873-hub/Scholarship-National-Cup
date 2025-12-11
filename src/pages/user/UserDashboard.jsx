import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      
      {/* ----- Top Cards Section ----- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Government Student */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">First Category </h2>
          <p className="text-gray-600 text-sm mb-4">
            Examination will be till 13th District Champions....
          </p>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
            Entry: Rs.121/-
          </button>
        </div>

        {/* Private Student */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Second Category</h2>
          <p className="text-gray-600 text-sm mb-4">
           Examination will be till Next 20th District Champions.
          </p>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
            Entry: Rs.171/-
          </button>
        </div>

        {/* Public & Guardian's */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Third Category</h2>
          <p className="text-gray-600 text-sm mb-4">
            Examination will be till Next 20th District Champions.
          </p>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
            Entry: Rs.221/-
          </button>
        </div>
      </div>

      {/* ----- Steps Section ----- */}
      <h3 className="text-xl font-bold mb-4">Steps</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <Link to="/BuyRoll">
        <button className="border rounded-xl py-3 px-5 text-sm font-medium hover:bg-gray-100 transition">
          Qualifying Exam (Online)
        </button>
        </Link>

        <Link to="/">
         <button className="border rounded-xl py-3 px-5 text-sm font-medium hover:bg-gray-100 transition">
          School & College Level (Online)
        </button>
        </Link>

        <Link to="/">
          <button className="border rounded-xl py-3 px-5 text-sm font-medium hover:bg-gray-100 transition">
          Block Level (Online)
        </button>
        </Link>
       

      
      </div>
    </div>
  );
};

export default UserDashboard;
