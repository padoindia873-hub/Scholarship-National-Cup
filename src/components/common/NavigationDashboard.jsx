import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Avatar, Dropdown, Menu, Drawer, message } from "antd";
import { LogoutOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import DrawerComponent from "../../utils/DrawerComponent";
import logo from "../../assets/tp_logo.png";

const NavigationDashboard = () => {
  const { user, logout, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openPermissionMenu, setOpenPermissionMenu] = useState(false);
  if (!user) return null;

  /* -----------------------------
        STUDENT PHOTO UPLOAD
  ------------------------------*/
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("photo", file);
    formData.append("userId", user._id);

    try {
      const res = await fetch(
        "http://localhost:5000/api/upload-student-photo",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        message.success("Photo updated successfully!");

        // update global context user photo so UI refreshes immediately
        updateUser({ ...user, photo: data.photoUrl });
      } else {
        message.error("Upload failed");
      }
    } catch (error) {
      message.error("Server error");
    }
  };

  /* -----------------------------
           LOGOUT
  ------------------------------*/
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  /* -----------------------------
           PROFILE MENU
  ------------------------------*/
  const menu = (
    <Menu>
      <Menu.Item
        key="profile"
        icon={<UserOutlined />}
        onClick={() => setOpenDrawer(true)}
      >
        Profile
      </Menu.Item>

      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {/* TOP NAVIGATION BAR */}
      <nav className="bg-gradient-to-r from-teal-600 via-blue-500 to-indigo-700 text-white py-3 px-6 flex justify-between items-center shadow-md h-14">
        <div className="flex items-center space-x-3">
          {/* ADMIN / SUPER ADMIN SIDEBAR TOGGLE */}
          {(user.userType === "ADMIN" || user.userType === "SUPER_ADMIN") && (
            <MenuOutlined
              className="text-white text-lg cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            />
          )}

          {/* STUDENT MOBILE MENU */}
          {user.userType === "STUDENT" && (
            <MenuOutlined
              className="text-white text-lg cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}

          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </Link>
        </div>

        {/* DESKTOP STUDENT NAVIGATION */}
        {user.userType === "STUDENT" && (
          <div className="hidden md:flex space-x-6 text-lg font-semibold">
            <Link to="/registration">Your Registration</Link>
            <Link to="/registered-details">Registered Details</Link>
            <Link to="/events">Events</Link>
          </div>
        )}

        {/* USER AVATAR */}
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar
            className="cursor-pointer bg-indigo-500 border-2 border-white shadow-lg"
            size={32}
            src={user.photo}
          >
            {user.firstName[0]}
          </Avatar>
        </Dropdown>
      </nav>

      {/* ================================
             STUDENT SIDEBAR DRAWER
      ================================= */}
      {user.userType === "STUDENT" && (
        <Drawer
          placement="left"
          closable={true}
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          style={{ backgroundColor: "#0A2A6B", padding: 0 }}
          bodyStyle={{
            backgroundColor: "#0A2A6B",
            padding: 20,
            color: "white",
          }}
          headerStyle={{
            backgroundColor: "#0A2A6B",
            color: "white",
            textAlign: "center",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
          title={
            <div className="flex flex-col items-center text-white">
              <Avatar
                src={user.photo}
                size={80}
                className="border-2 border-blue-300 shadow-md"
              />

              <p className="mt-2 font-semibold">Student Photo</p>

              {/* UPLOAD BUTTON */}
              <label className="mt-2 text-sm bg-white text-blue-700 px-3 py-1 rounded cursor-pointer font-semibold">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
          }
        >
          <ul className="space-y-6 text-base font-medium">
            <li>
              <Link
                to="/WelcomePopup"
                className="flex items-center gap-3 text-white"
              >
                🏠 Exam
              </Link>
            </li>
            <li>
              <Link
                to="/result-details"
                className="flex items-center gap-3 text-white"
              >
                📄 Result Details
              </Link>
            </li>
            <li>
              <Link
                to="/subject-details"
                className="flex items-center gap-3 text-white"
              >
                💡 Subject Details
              </Link>
            </li>
            <li>
              <Link
                to="/payment-details"
                className="flex items-center gap-3 text-white"
              >
                💳 Payment Details
              </Link>
            </li>
            <li>
              <Link
                to="/prize-list"
                className="flex items-center gap-3 text-white"
              >
                🏆 Winning Prize Checking
              </Link>
            </li>
            <li>
              <Link
                to="/LiveStream"
                className="flex items-center gap-3 text-white"
              >
                🎉 Event Details
              </Link>
            </li>
            <li>
              <Link
                to="/next-exam"
                className="flex items-center gap-3 text-white"
              >
                📘 Next Exam Details
              </Link>
            </li>
            <li>
              <Link
                to="/participant"
                className="flex items-center gap-3 text-white"
              >
                🧑‍🎓 Participant
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <Link
                to="/features"
                className="flex items-center gap-3 text-white w-full"
              >
                🧩 Features
              </Link>
              <span className="text-xs bg-white text-blue-600 px-2 py-1 rounded-lg font-bold">
                NEW
              </span>
            </li>
          </ul>
        </Drawer>
      )}

      {/* ================================
            ADMIN SIDEBAR (UNCHANGED)
      ================================= */}
      {user.userType === "ADMIN" && (
        <Drawer
          title="Admin Menu"
          placement="left"
          closable={true}
          onClose={() => setSidebarOpen(false)}
          open={sidebarOpen}
        >
          <ul className="space-y-4">
            <li>
              <Link to="/CompetitorsManagement" className="text-lg font-medium">
                Competitors Management
              </Link>
            </li>
            <li>
              <Link to="/questionsEntry" className="text-lg font-medium">
                Questions Entry
              </Link>
            </li>
            <li>
              <Link to="/studentsDetails" className="text-lg font-medium">
                Students Details
              </Link>
            </li>
            <li>
              <Link to="/manage-users" className="text-lg font-medium">
                Manage Users
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-lg font-medium">
                Settings
              </Link>
            </li>
          </ul>
        </Drawer>
      )}

      {/* =================================
        SUPER ADMIN SIDEBAR (UNCHANGED)
      ================================== */}
      {user.userType === "SUPER_ADMIN" && (
        <Drawer
          title={
            <div className="flex items-center gap-2 text-xl font-bold">
              ⚡ Super Admin Panel
            </div>
          }
          placement="left"
          closable={true}
          onClose={() => setSidebarOpen(false)}
          open={sidebarOpen}
        >
          <ul className="space-y-4">
            <li className="text-gray-500 text-sm font-semibold mt-4">
              ADMIN MANAGEMENT
            </li>
            <li>
              <Link
                to="/super-admin"
                className="text-lg flex items-center gap-2"
              >
                👨‍💼 Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/create-admin"
                className="text-lg flex items-center gap-2"
              >
                ➕ Create New Admin
              </Link>
            </li>
            {/* <li>
              <Link
                to="/create-super-admin"
                className="text-lg flex items-center gap-2"
              >
                🛡️ Admin Permission
              </Link>
            </li> */}
            {/* Admin Permission Dropdown */}
            <li className="bg-transparent">
              <button
                onClick={() => setOpenPermissionMenu(!openPermissionMenu)}
                className="w-full flex items-center justify-between text-lg py-2 
               bg-transparent hover:bg-transparent active:bg-transparent 
               focus:bg-transparent"
              >
                <span className="flex items-center gap-2">
                  🛡️ Super Admin Permission
                </span>

                {/* Arrow rotation */}
                <span
                  className={`transition-transform duration-300 ${
                    openPermissionMenu ? "rotate-90" : ""
                  }`}
                >
                  ►
                </span>
              </button>

              {/* Sub-menu */}
              {openPermissionMenu && (
                <ul className="ml-6 mt-2 space-y-2 text-base">
                  <li>
                    <Link
                      to="/manage-admins"
                      className="text-lg flex items-center gap-2"
                    >
                      👨‍💼 Manage Admins
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/system-settings"
                      className="text-lg flex items-center gap-2"
                    >
                      ⚙️ Admin Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manage-admins"
                      className="text-lg flex items-center gap-2"
                    >
                      👨‍💼 Students Admin
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/questionsEntry"
                      className="text-lg flex items-center gap-2"
                    >
                      ❓ Question Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ExamDashboardManagement"
                      className="text-lg flex items-center gap-2"
                    >
                      📝 Exam Dashboard Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/PaymentManagement"
                      className="text-lg flex items-center gap-2"
                    >
                      💳 Payment Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manage-admins"
                      className="text-lg flex items-center gap-2"
                    >
                      📅 Event Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manage-admins"
                      className="text-lg flex items-center gap-2"
                    >
                      📢 Advertisement Management{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manage-admins"
                      className="text-lg flex items-center gap-2"
                    >
                      🏆 Top Winner List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manage-admins"
                      className="text-lg flex items-center gap-2"
                    >
                      🎓 Top School List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manage-admins"
                      className="text-lg flex items-center gap-2"
                    >
                      🎓 Sponsor and Supporter List
                    </Link>
                  </li>
                  <li>
                    <Link to="/permissions" className="flex gap-2">
                      🔐 Permission Controls
                    </Link>
                  </li>
                  <li>
                    <Link to="/roles" className="flex gap-2">
                      🧩 Role Management
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="text-gray-500 text-sm font-semibold mt-4">
              USER MANAGEMENT
            </li>
            <li>
              <Link to="/all-users" className="text-lg flex items-center gap-2">
                👥 All Registered Users
              </Link>
            </li>
          </ul>
        </Drawer>
      )}

      {/* USER PROFILE DRAWER */}
      <DrawerComponent
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        user={user}
      />
    </>
  );
};

export default NavigationDashboard;
