import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Avatar, Dropdown, Menu, Drawer } from "antd";
import { LogoutOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import DrawerComponent from "../../utils/DrawerComponent";
import logo from "../../assets/tp_logo.png";

const NavigationDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-teal-600 via-blue-500 to-indigo-700 text-white py-3 px-6 flex justify-between items-center shadow-md h-14">
        <div className="flex items-center space-x-3">
          {/* Admin Sidebar Toggle */}
          {user.userType === "ADMIN" && (
            <MenuOutlined
              className="text-white text-lg cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            />
          )}

          {/* Super Admin Sidebar Toggle */}
          {user.userType === "SUPER_ADMIN" && (
            <MenuOutlined
              className="text-white text-lg cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            />
          )}

          {/* Student Mobile Menu Toggle */}
          {user.userType === "STUDENT" && (
            <MenuOutlined
            className="text-white text-lg cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
            />
          )}

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-14 w-auto" />
            </Link>
          </div>
        </div>

        {/* Student Navigation (Desktop) */}
        {user.userType === "STUDENT" && (
          <div className="hidden md:flex space-x-6 text-lg font-semibold">
            <Link to="/registration" className="hover:text-gray-300 transition">
              Your Registration
            </Link>
            <Link
              to="/registered-details"
              className="hover:text-gray-300 transition"
            >
              Registered Details
            </Link>
            <Link to="/events" className="hover:text-gray-300 transition">
              Events
            </Link>
          </div>
        )}

        {/* User Avatar */}
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar
            className="cursor-pointer bg-indigo-500 border-2 border-white shadow-lg"
            size={32}
          >
            {user.firstName[0]}
          </Avatar>
        </Dropdown>
      </nav>

      {/* Admin Sidebar */}
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

      {/* Super Admin Sidebar */}
      {/* {user.userType === "SUPER_ADMIN" && (
                <Drawer
                    title="Super Admin Menu"
                    placement="left"
                    closable={true}
                    onClose={() => setSidebarOpen(false)}
                    open={sidebarOpen}
                >
                    <ul className="space-y-4">
                        <li><Link to="/manage-admins" className="text-lg font-medium">Manage Admins</Link></li>
                        <li><Link to="/create-admin" className="text-lg font-medium">Create New Admin</Link></li>
                        <li><Link to="/create-super-admin" className="text-lg font-medium">Create Super Admin</Link></li>
                        <li><Link to="/all-users" className="text-lg font-medium">All Registered Users</Link></li>
                        <li><Link to="/system-settings" className="text-lg font-medium">System Settings</Link></li>
                    </ul>
                </Drawer>
            )} */}
      {user.userType === "SUPER_ADMIN" && (
        <Drawer
          title={
            <div className="flex items-center gap-2 text-xl font-bold">
              <span>⚡ Super Admin Panel</span>
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
                to="/manage-admins"
                className="text-lg flex items-center gap-2"
              >
                👨‍💼 <span>Manage Admins</span>
              </Link>
            </li>
            <li>
              <Link
                to="/create-admin"
                className="text-lg flex items-center gap-2"
              >
                ➕ <span>Create New Admin</span>
              </Link>
            </li>

            <li className="text-gray-500 text-sm font-semibold mt-4">
              SUPER ADMIN CONTROLS
            </li>
            <li>
              <Link
                to="/create-super-admin"
                className="text-lg flex items-center gap-2"
              >
                🛡️ <span>Create Super Admin</span>
              </Link>
            </li>
            <li>
              <Link
                to="/system-settings"
                className="text-lg flex items-center gap-2"
              >
                ⚙️ <span>System Settings</span>
              </Link>
            </li>

            <li className="text-gray-500 text-sm font-semibold mt-4">
              USER MANAGEMENT
            </li>
            <li>
              <Link to="/all-users" className="text-lg flex items-center gap-2">
                👥 <span>All Registered Users</span>
              </Link>
            </li>
          </ul>
        </Drawer>
      )}

      {/* Student Mobile Menu */}
      {user.userType === "STUDENT" && (
        <Drawer
          title="Student Menu"
          placement="left"
          closable={true}
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
        >
          <ul className="space-y-4">
            <li>
              <Link to="/registration" className="text-lg font-medium">
                Your Registration
              </Link>
            </li>
            <li>
              <Link to="/registered-details" className="text-lg font-medium">
                Registered Details
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-lg font-medium">
                Events
              </Link>
            </li>
          </ul>
        </Drawer>
      )}

      {/* Profile Drawer (User Details) */}
      <DrawerComponent
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        user={user}
      />
    </>
  );
};

export default NavigationDashboard;
