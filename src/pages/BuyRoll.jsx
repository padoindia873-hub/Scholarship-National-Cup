import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyRoll = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheckUser = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        "https://quiz-backend-aixd.onrender.com/api/auth/find-user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, phone }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResult(data);
        setTimeout(() => {
          navigate("/StudentPayments", { state: { email } });
        }, 1000);
      } else {
        setError(data.message || "User not found");

        //  Redirect to register page after 1 second
        setTimeout(() => {
          navigate("/register");
        }, 1000);
      }
    } catch (err) {
      setError("Network error. Try again.");

      setTimeout(() => {
        navigate("/register");
      }, 1000);
    }

    setLoading(false);
  };
  const handleCheckUsers = async () => {
    setTimeout(() => {
      navigate("/register");
    }, 1000);
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">User Login</h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          className="w-full border p-2 rounded"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Phone Number</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button
        onClick={handleCheckUser}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-4"
      >
        {loading ? "Checking..." : "Check User"}
      </button>

      <button
        onClick={handleCheckUsers}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        User Login
      </button>
    </div>
  );
};

export default BuyRoll;
