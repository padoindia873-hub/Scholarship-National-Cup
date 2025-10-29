import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import loginImage from "../../assets/login_image.png";
import logo from "../../assets/CGL.png";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full h-screen md:p-4">
      <div className="bg-white shadow-lg rounded-md flex w-full h-full overflow-hidden relative max-w-4xl mx-auto">
        
        {/* Left Side - Image */}
        <div className="w-1/2 h-full hidden md:block">
          <img src={loginImage} alt="Login Illustration" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col justify-center items-center relative">
          
          <div className="flex justify-center mb-4">
            <img src={logo} alt="CGL Logo" className="h-20 w-20 rounded-full object-cover" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">Welcome to Padho India</h2>
          <p className="text-center text-gray-600 mb-4 text-sm md:text-base">Login to access your dashboard</p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            
            <Input
              name="email"
              placeholder="Email"
              size="large"
              className="mb-3 w-full"
              onChange={handleChange}
              required
            />

            <Input.Password
              name="password"
              placeholder="Password"
              size="large"
              className="mb-3 w-full"
              onChange={handleChange}
              required
            />

            {/* Forgot Password Link */}
            <div className="flex justify-end mb-3">
              <Link to="/forgot-password" className="text-blue-600 text-sm font-semibold hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Button type="primary" htmlType="submit" block size="large" className="mb-3">
              Login
            </Button>

            {/* Back to Home Button below Login */}
            <Link to="/" className="block">
              <Button type="default" block size="large">
                Back to Home
              </Button>
            </Link>
          </form>

          <p className="text-center mt-3 text-sm md:text-base">
            Don't have an account? <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-800">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
