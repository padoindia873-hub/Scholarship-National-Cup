import React from "react";

const CompetitorsInputSection = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-10 text-white">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">Competitors Management</h2>

        {/* Manage Button */}
        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-semibold">
            Manage
          </button>
        </div>

        {/* Input Section */}
        <div className="space-y-6">
          {/* Admin Name */}
          <div>
            <label className="block text-gray-300 mb-1">Admin Name</label>
            <input
              type="text"
              placeholder="Enter admin name..."
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter admin email..."
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-gray-300 mb-1">Assign Role</label>
            <select className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:ring focus:ring-blue-500 outline-none">
              <option>Super Admin</option>
              <option>Admin Manager</option>
              <option>Student Admin</option>
            </select>
          </div>

          {/* Permissions */}
          <div>
            <label className="block text-gray-300 mb-3">Permissions</label>

            <div className="grid grid-cols-2 gap-3 text-gray-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Add Admin
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Edit Admin
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Delete Admin
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Assign Roles
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> View Logs
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Manage Permissions
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-lg">
              Cancel
            </button>

            <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg">
              Save Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorsInputSection;
