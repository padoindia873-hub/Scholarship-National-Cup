import { useState, useRef } from "react";
import { Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "../../services/api";
import otpImage from "../../assets/login_image.png";
import logo from "../../assets/CGL.png";

const ConfirmOtp = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const email = state?.email || "";
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) return toast.error("Please enter the complete OTP");

    try {
      setLoading(true);
      const { data } = await axios.post("/user/confirm-otp", { email, otp: enteredOtp });
      toast.success(data.message || "OTP verified successfully");
      navigate("/reset-password", { state: { email, otp: enteredOtp } });
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full h-screen md:p-4">
      <div className="bg-white shadow-lg rounded-md flex w-full h-full overflow-hidden relative max-w-4xl mx-auto">

        {/* Left Side - Image */}
        <div className="w-1/2 h-full hidden md:block">
          <img src={otpImage} alt="OTP Illustration" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - OTP Form */}
        <div className="w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col justify-center items-center relative">

          <div className="flex justify-center mb-4">
            <img src={logo} alt="CGL Logo" className="h-20 w-20 rounded-full object-cover" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">OTP Verification</h2>
          <p className="text-center text-gray-600 mb-4 text-sm md:text-base">
            Enter the 6-digit OTP sent to <span className="font-semibold">{email}</span>
          </p>

          <form onSubmit={handleVerifyOtp} className="w-full max-w-sm">
            
            {/* OTP Input */}
            <div className="flex justify-center gap-2 mb-4">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  size="large"
                  className="w-12 h-12 text-center text-xl"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  required
                />
              ))}
            </div>

            <Button type="primary" htmlType="submit" block size="large" loading={loading} className="mb-3">
              Verify OTP
            </Button>

            {/* Back to Home Button */}
            <Button type="default" block size="large" onClick={() => navigate("/")} className="mb-3">
              Back to Home
            </Button>

          </form>

          <p className="text-center mt-3 text-sm md:text-base">
            Didn't receive the OTP?{" "}
            <button
              type="button"
              className="text-blue-600 font-semibold hover:text-blue-800"
              onClick={() => toast.info("Resend OTP not implemented yet")}
            >
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOtp;
