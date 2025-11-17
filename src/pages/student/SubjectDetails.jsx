import React from "react";
import { Card, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";

const subjects = [
  { title: "General Knowledge", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "History", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Mathematics", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Hindi", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Indian Culture", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Mathematics", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
];

const SubjectDetails = () => {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-center text-xl font-semibold mb-8">Subject Details</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((item, index) => (
          <Card
            key={index}
            bordered
            className="relative shadow-sm hover:shadow-md transition-all"
            style={{ borderRadius: "12px" }}
          >
            {/* Demo Badge */}
            <span
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                background: "#fff",
                padding: "5px 12px",
                fontSize: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              Demo
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{item.desc}</p>

            {/* People Passed */}
            <Tag color="gold" className="mt-3 mb-3">
              People Passed
            </Tag>

            {/* Footer */}
            <div className="flex justify-between items-center text-gray-500 text-xs mt-2">
              <span>Last Updated</span>
              <span className="flex items-center gap-1">
                15 Nov 2025
              </span>
            </div>

            {/* People Icons */}
            <div className="flex mt-3 -space-x-2">
              <UserOutlined className="text-xl" />
              <UserOutlined className="text-xl" />
              <UserOutlined className="text-xl" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubjectDetails;
