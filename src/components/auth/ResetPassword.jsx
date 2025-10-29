import { useState } from "react";
import { Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "../../services/api";
import resetImage from "../../assets/login_image.png";
import logo from "../../assets/CGL.png";

const ResetPassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const email = state?.email || "";
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      return toast.error("Please enter both password fields");
    }
    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);
      const { data } = await axios.post("/user/reset-password", { email, newPassword });
      toast.success(data.message || "Password reset successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full h-screen md:p-4">
      <div className="bg-white shadow-lg rounded-md flex w-full h-full overflow-hidden relative max-w-4xl mx-auto">
        
        {/* Left Side - Image */}
        <div className="w-1/2 h-full hidden md:block">
          <img src={resetImage} alt="Reset Password" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Reset Password Form */}
        <div className="w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col justify-center items-center relative">

          <div className="flex justify-center mb-4">
            <img src={logo} alt="CGL Logo" className="h-20 w-20 rounded-full object-cover" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">Reset Your Password</h2>
          <p className="text-center text-gray-600 mb-4 text-sm md:text-base">
            Set a new password for <span className="font-semibold">{email}</span>
          </p>
          
          <form onSubmit={handleResetPassword} className="w-full max-w-sm">
            
            <Input.Password
              placeholder="New Password"
              size="large"
              className="mb-3 w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <Input.Password
              placeholder="Confirm Password"
              size="large"
              className="mb-4 w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Reset Password
            </Button>

            {/* Back to Login Button */}
            <Button 
              type="default" 
              block 
              size="large" 
              onClick={() => navigate("/login")}
            >
              Back to Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
