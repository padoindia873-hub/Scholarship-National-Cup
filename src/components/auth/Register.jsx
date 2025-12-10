import { useState } from "react";
import { Input, Button, DatePicker } from "antd";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assets/login_image.png";
import logo from "../../assets/CGL.png";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import {
  registerStudent,
  createAdmin,
  createSuperAdmin,
} from "../../services/api";
import { toast } from "react-hot-toast";
import dayjs from "dayjs";

const Register = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState("date");
  const [errors, setErrors] = useState({});
  const [previewUrl, setPreviewUrl] = useState("");

  // const handleChangePin = (e) => {
  //   const { name, value } = e.target;

  //   if (name === "pin" && !/^\d{0,6}$/.test(value)) return; // prevent non-numeric

  //   setFormData({ ...formData, [name]: value });

  //   if (name === "pin" && value.length !== 6) {
  //     setErrors({ ...errors, pin: "PIN must be exactly 6 digits." });
  //   } else {
  //     setErrors({ ...errors, pin: "" });
  //   }
  // };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    phone: "",
    userType: "STUDENT",

    // Student
    dateOfBirth: "",
    whatsappNumber: "",
    address: "",
    district: "",
    state: "",
    pin: "",
    schoolName: "",
    studentClass: "",
    schoolAddress: "",
    aadharCardNumber: "",
    bankTransaction: "",
    section: "",
    schoolRoll: "",
    buyRoll: "",
    profileImage: "",
    startTime: "",
    endTime: "",
    rollActive: "",
    rollInactive: "",
    rank: "",
    academyMarks: "",
    gkMarks: "",
    fistLevel: "",
    secLevel: "",
    thirdLevel: "",
    winnerDetails: "",
    oneUserBuyRoll: "",
    oneUserWinner:"",
    bankTransactionStudent: "",
    // Admin Secret Code
    adminSecretCode: "",


    // Super Admin fields
    superAdminCode: "",
    department: "",
    permissionLevel: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfBirth: date ? date.format("YYYY-MM-DD") : "",
    });
  };

  // Fix year-dropdown issue
  const handlePanelChange = (value, panelMode) => {
    setMode(panelMode);

    if (panelMode === "date" && value) {
      setFormData({
        ...formData,
        dateOfBirth: value.format("YYYY-MM-DD"),
      });
    }
  };

  const handleToggleUserType = (type) => {
    setFormData({ ...formData, userType: type });
  };
  const handleProfileImageUpload = ({ file }) => {
    setFormData({ ...formData, profileImage: file });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const fd = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "profileImage") {
        if (formData.profileImage) {
          fd.append("profileImage", formData.profileImage);
        }
      } else {
        fd.append(key, formData[key]);
      }
    });

    let response;

    if (formData.userType === "STUDENT") {
      response = await registerStudent(fd);
    }

    if (formData.userType === "ADMIN") {
      fd.set("adminSecretCode", formData.adminSecretCode);
      response = await createAdmin(fd);
    }

    if (formData.userType === "SUPER_ADMIN") {
      fd.set("adminSecretCode", formData.superAdminCode); // IMPORTANT
      fd.delete("superAdminCode");
      response = await createSuperAdmin(fd);
    }

    toast.success(response.data.message || "Registration Successful");
    navigate("/login");
  } catch (error) {
    toast.error(error.response?.data?.message || "Registration failed");
  }
};
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    setPreviewUrl(file.url || file.preview);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     let response;

  //     if (formData.userType === "STUDENT") {
  //       response = await registerStudent(formData);
  //     }

  //     if (formData.userType === "ADMIN") {
  //       response = await createAdmin({
  //         ...formData,
  //         adminSecretCode: formData.adminSecretCode,
  //       });
  //     }

  //     if (formData.userType === "SUPER_ADMIN") {
  //       response = await createSuperAdmin({
  //         ...formData,
  //         adminSecretCode: formData.superAdminCode,
  //       });
  //     }

  //     toast.success(response.data.message || "Registration Successful");
  //     navigate("/login");
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "Registration failed");
  //   }
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full h-screen md:p-4">
      <div className="bg-white shadow-lg rounded-md flex w-full h-full overflow-hidden relative max-w-4xl mx-auto">
        {/* Left Image */}
        <div className="w-1/2 h-full hidden md:block">
          <img
            src={registerImage}
            alt="Register Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 h-full p-6 md:p-8 flex flex-col justify-center items-center relative">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-20 rounded-full object-cover"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">
            Welcome to Padho India
          </h2>
          <p className="text-center text-gray-600 mb-4 text-sm md:text-base">
            Create an account to access your dashboard
          </p>

          {/* Scrollable Form */}
          <div
            className="w-full max-w-sm overflow-y-auto"
            style={{ maxHeight: "70vh" }}
          >
            <form onSubmit={handleSubmit}>
              {/* User Type Buttons */}
              <div className="flex mb-4 w-full justify-between gap-2">
                <Button
                  type={formData.userType === "STUDENT" ? "primary" : "default"}
                  onClick={() => handleToggleUserType("STUDENT")}
                  className="w-full"
                >
                  Student
                </Button>
                <Button
                  type={formData.userType === "ADMIN" ? "primary" : "default"}
                  onClick={() => handleToggleUserType("ADMIN")}
                  className="w-full"
                >
                  Admin
                </Button>
                <Button
                  type={
                    formData.userType === "SUPER_ADMIN" ? "primary" : "default"
                  }
                  onClick={() => handleToggleUserType("SUPER_ADMIN")}
                  className="w-full"
                >
                  Super Admin
                </Button>
              </div>

              {/* Common Fields */}
              {/* Profile Image Upload */}
              <div className="flex justify-center mb-4">
                {/* <Upload
                  listType="picture-card"
                  maxCount={1}
                  accept="image/png, image/jpeg"
                  beforeUpload={() => false} // prevent auto upload
                  onPreview={handlePreview}
                  onChange={({ file }) =>
                    handleProfileImageUpload({ file: file.originFileObj })
                  }
                > */}
                <Upload
                  listType="picture-card"
                  maxCount={1}
                  accept="image/png, image/jpeg"
                  beforeUpload={() => false}
                  onPreview={handlePreview}
                  onChange={({ fileList }) =>
                    setFormData({
                      ...formData,
                      profileImage: fileList[0]?.originFileObj || null,
                    })
                  }
                >
                  {!formData.profileImage && (
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  )}
                </Upload>
              </div>

              {previewUrl && (
                <div className="text-center mb-3">
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="h-24 w-24 rounded-full object-cover mx-auto"
                  />
                </div>
              )}

              <Input
                name="firstName"
                placeholder="First Name"
                size="large"
                className="mb-3 w-full"
                onChange={handleChange}
                required
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                size="large"
                className="mb-3 w-full"
                onChange={handleChange}
                required
              />
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
              <Input
                name="country"
                placeholder="Country"
                size="large"
                className="mb-3 w-full"
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                size="large"
                className="mb-3 w-full"
                onChange={handleChange}
                required
              />

              {/* Student Fields */}
              {formData.userType === "STUDENT" && (
                <>
                  <DatePicker
                    value={
                      formData.dateOfBirth ? dayjs(formData.dateOfBirth) : null
                    }
                    onChange={handleDateChange}
                    placeholder="Date of Birth"
                    className="mb-3 w-full"
                    size="large"
                    mode={mode}
                    format="DD-MM-YYYY"
                    onPanelChange={handlePanelChange}
                  />

                  <Input
                    name="whatsappNumber"
                    placeholder="WhatsApp Number"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="address"
                    placeholder="Address"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="district"
                    placeholder="District"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="state"
                    placeholder="State"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="pin"
                    placeholder="PIN"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="schoolName"
                    placeholder="School Name"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="studentClass"
                    placeholder="Class"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />

                  {/* New Added Fields */}
                  <Input
                    name="schoolRoll"
                    placeholder="School Roll"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="section"
                    placeholder="Section"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  {/* <Input
                    name="pin"
                    placeholder="PIN"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChangePin}
                    required
                    maxLength={6}
                    minLength={6}
                    pattern="[0-9]{6}"
                    inputMode="numeric"
                  /> */}
                  <Input
                    name="schoolAddress"
                    placeholder="School Address"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="aadharCardNumber"
                    placeholder="Aadhar Card Number"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                </>
              )}

              {/* Admin Secret Code */}
              {formData.userType === "ADMIN" && (
                <Input
                  name="adminSecretCode"
                  placeholder="Admin Secret Code"
                  size="large"
                  className="mb-3 w-full"
                  onChange={handleChange}
                  required
                />
              )}

              {/* Super Admin Fields */}
              {formData.userType === "SUPER_ADMIN" && (
                <>
                  <Input
                    name="superAdminCode"
                    placeholder="Super Admin Secret Code"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="department"
                    placeholder="Department"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="permissionLevel"
                    placeholder="Permission Level"
                    size="large"
                    className="mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                </>
              )}

              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="mb-3"
              >
                Register
              </Button>

              <Link to="/" className="block">
                <Button type="default" block size="large">
                  {" "}
                  Back to Home{" "}
                </Button>
              </Link>
            </form>
          </div>

          <p className="text-center mt-3 text-sm md:text-base">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              {" "}
              Sign In{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
