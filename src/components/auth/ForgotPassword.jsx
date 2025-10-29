import { useState } from "react";
import { Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "../../services/api";
import forgotImage from "../../assets/login_image.png";
import logo from "../../assets/CGL.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    try {
      setLoading(true);
      const { data } = await axios.post("/user/forgot-password", { email });
      toast.success(data.message || "OTP sent to your email");
      navigate("/confirm-otp", { state: { email } });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full h-screen md:p-4">
      <div className="bg-white shadow-lg rounded-md flex w-full h-full overflow-hidden relative max-w-4xl mx-auto">

        {/* Left Side - Image */}
        <div className="w-1/2 h-full hidden md:block">
          <img src={forgotImage} alt="Forgot Password Illustration" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col justify-center items-center relative">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="h-20 w-20 rounded-full object-cover" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">Forgot Password?</h2>
          <p className="text-center text-gray-600 mb-4 text-sm md:text-base">
            Enter your email and we'll send you a password reset OTP.
          </p>

          {/* Form */}
          <div className="w-full max-w-sm">
            <form onSubmit={handleSubmit}>

              <Input
                type="email"
                placeholder="Enter your email"
                size="large"
                className="mb-4 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button 
                type="primary" 
                htmlType="submit" 
                block 
                size="large" 
                loading={loading} 
                className="mb-3"
              >
                Send OTP
              </Button>

              {/* Back to Home Button */}
              <Link to="/" className="block">
                <Button type="default" block size="large">
                  Back to Home
                </Button>
              </Link>

            </form>
          </div>

          <p className="text-center mt-3 text-sm md:text-base">
            Remembered your password?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-800">
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
