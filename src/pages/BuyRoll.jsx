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
      console.log(data);
      if (response.ok) {
        setResult(data);
        setTimeout(() => {
          navigate("/StudentPayments", { state: { email } });
        }, 1000);
      } else {
        setError(data.message || "User not found");
        setTimeout(() => {
          navigate("/register");
        }, 1000);
      }
    } catch (err) {
      setError("Network error. Try again.");
      setTimeout(() => {
        navigate("/StudentPayments");
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
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(176deg, rgb(131 90 255), rgb(69 145 239 / 59%))" }}
    >
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">🎓</div>
          <h1 className="text-2xl font-bold text-white mb-2">User Login</h1>
          <p className="text-white/70 text-sm">Enter your credentials to continue</p>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
            ❌ {error}
          </div>
        )}

        {/* Success Message */}
        {result && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-sm text-center">
            ✅ Login successful! Redirecting...
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Email Address</label>
            <input
              type="email"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all duration-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Phone Number</label>
            <input
              type="text"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all duration-300"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button
            onClick={handleCheckUser}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Checking...
              </span>
            ) : (
              "Check User"
            )}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-white/50">OR</span>
            </div>
          </div>

          <button
            onClick={handleCheckUsers}
            className="w-full bg-white/10 border border-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            New User? Register Here
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white/40 text-xs">
            🔒 Secure Login • Your data is protected
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyRoll;