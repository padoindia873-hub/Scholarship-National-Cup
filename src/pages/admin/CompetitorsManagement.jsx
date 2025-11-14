import React from "react";
import { Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const CompetitorsManagement = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-10 space-y-10">
      {/* Competitors Management */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold">Competitors Management</h2>
          </div>
          <Link
            to="/competitorsInputSection"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold text-white"
          >
            Manage
          </Link>
        </div>

        <ul className="mt-4 space-y-2 list-disc pl-8 text-gray-300">
          <li>Add/Edit/Delete </li>
          <li>Assign roles & permissions</li>
        </ul>
      </div>

      {/* Candidates Management */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold">Candidates Management</h2>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
            Manage
          </button>
        </div>

        <ul className="mt-4 space-y-2 list-disc pl-8 text-gray-300">
          <li>Register Candidates Online (Admin and Student Admin both)</li>
          <li>
            Manage Candidates profiles (name, email, class, create roll, phone
            number, address, WhatsApp number)
          </li>
          <li>Suspend and blacklist or delete inactive Candidates</li>
          <li>Import/export Candidate data</li>
        </ul>
      </div>
    </div>
  );
};

export default CompetitorsManagement;
