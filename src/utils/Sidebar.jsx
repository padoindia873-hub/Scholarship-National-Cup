import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const Sidebar = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`bg-gray-900 text-white w-${collapsed ? '16' : '64'} transition-all duration-300 p-5`}> 
                <button 
                    className="text-white mb-5 focus:outline-none" 
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </button>
                <ul className="space-y-4">
                    <li>
                        <Link to="/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/manage-users" className="block p-2 hover:bg-gray-700 rounded">Manage Users</Link>
                    </li>
                    <li>
                        <Link to="/settings" className="block p-2 hover:bg-gray-700 rounded">Settings</Link>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-5">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
