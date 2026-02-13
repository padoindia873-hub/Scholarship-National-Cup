import React, { useEffect, useState } from "react";
import { Search, Pencil, Trash2, KeyRound, HelpCircle } from "lucide-react";

const ManageAdmins = () => {
  const [search, setSearch] = useState("");
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const res = await fetch("https://quiz-backend-aixd.onrender.com/api/auth/admins");
      const data = await res.json();
      setAdmins(data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAdmins = admins.filter((admin) =>
    admin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10 bg-gray-100 min-h-screen space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Admins</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          + Add New Admin
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search admin..."
          className="w-full pl-10 pr-4 py-2 bg-white rounded-lg shadow-md border outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Admin Table */}
      <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            ) : filteredAdmins.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-5 text-gray-500">
                  No admins found
                </td>
              </tr>
            ) : (
              filteredAdmins.map((admin) => (
                <tr
                  key={admin.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{admin.name}</td>
                  <td className="p-3">{admin.email}</td>
                  <td className="p-3">{admin.role}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        admin.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {admin.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-3 flex justify-center gap-3 flex-wrap">
                    <button
                      className="p-2 bg-yellow-100 rounded-lg hover:bg-yellow-200"
                      title="Change Password"
                    >
                      <KeyRound size={18} className="text-yellow-700" />
                    </button>

                    <button
                      className="p-2 bg-purple-100 rounded-lg hover:bg-purple-200"
                      title="Forgot Password"
                    >
                      <HelpCircle size={18} className="text-purple-700" />
                    </button>

                    <button
                      className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
                      title="Edit"
                    >
                      <Pencil size={18} className="text-blue-600" />
                    </button>

                    <button
                      className="p-2 bg-red-100 rounded-lg hover:bg-red-200"
                      title="Delete"
                    >
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAdmins;
