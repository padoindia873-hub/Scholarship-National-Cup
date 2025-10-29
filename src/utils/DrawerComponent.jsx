import { Drawer, Avatar } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FlagOutlined,
  CalendarOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
  BookOutlined,
  UserOutlined,
  WhatsAppOutlined,
  NumberOutlined
} from "@ant-design/icons";

const DrawerComponent = ({ open, onClose, user }) => {
  return (
    <Drawer
      title={
        <div className="flex items-center space-x-3">
          <Avatar size={64} className="bg-blue-500 text-white text-xl">
            {user.firstName?.[0]}
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-500">{user.userType}</p>
          </div>
        </div>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width={400}
    >
      <div className="p-4 space-y-4 text-gray-700">
        {user.email && (
          <p className="flex items-center space-x-2">
            <MailOutlined className="text-blue-500 text-lg" />
            <span>{user.email}</span>
          </p>
        )}
        {user.phone && (
          <p className="flex items-center space-x-2">
            <PhoneOutlined className="text-green-500 text-lg" />
            <span>{user.phone}</span>
          </p>
        )}
        {user.whatsappNumber && (
          <p className="flex items-center space-x-2">
            <WhatsAppOutlined className="text-green-600 text-lg" />
            <span>{user.whatsappNumber}</span>
          </p>
        )}
        {user.country && (
          <p className="flex items-center space-x-2">
            <FlagOutlined className="text-red-500 text-lg" />
            <span>{user.country}</span>
          </p>
        )}
        {user.dateOfBirth && (
          <p className="flex items-center space-x-2">
            <CalendarOutlined className="text-purple-500 text-lg" />
            <span>
              Date of Birth:{" "}
              {new Date(user.dateOfBirth).toLocaleDateString()}
            </span>
          </p>
        )}
        {user.address && (
          <p className="flex items-center space-x-2">
            <HomeOutlined className="text-yellow-600 text-lg" />
            <span>{user.address}</span>
          </p>
        )}
        {user.district && (
          <p className="flex items-center space-x-2">
            <EnvironmentOutlined className="text-blue-600 text-lg" />
            <span>District: {user.district}</span>
          </p>
        )}
        {user.state && (
          <p className="flex items-center space-x-2">
            <EnvironmentOutlined className="text-blue-400 text-lg" />
            <span>State: {user.state}</span>
          </p>
        )}
        {user.pin && (
          <p className="flex items-center space-x-2">
            <NumberOutlined className="text-gray-500 text-lg" />
            <span>Pin: {user.pin}</span>
          </p>
        )}
        {user.schoolName && (
          <p className="flex items-center space-x-2">
            <BookOutlined className="text-indigo-500 text-lg" />
            <span>School: {user.schoolName}</span>
          </p>
        )}
        {user.studentClass && (
          <p className="flex items-center space-x-2">
            <UserOutlined className="text-indigo-400 text-lg" />
            <span>Class: {user.studentClass}</span>
          </p>
        )}
        {user.schoolAddress && (
          <p className="flex items-center space-x-2">
            <HomeOutlined className="text-teal-500 text-lg" />
            <span>School Address: {user.schoolAddress}</span>
          </p>
        )}
        {user.aadharCardNumber && (
          <p className="flex items-center space-x-2">
            <IdcardOutlined className="text-gray-700 text-lg" />
            <span>Aadhar No: {user.aadharCardNumber}</span>
          </p>
        )}
        {user.registrationNumber && (
          <p className="flex items-center space-x-2">
            <IdcardOutlined className="text-gray-500 text-lg" />
            <span>Reg. No: {user.registrationNumber}</span>
          </p>
        )}
        <p className="flex items-center space-x-2">
          <CalendarOutlined className="text-gray-500 text-lg" />
          <span>Joined: {new Date(user.createdAt).toLocaleDateString()}</span>
        </p>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
