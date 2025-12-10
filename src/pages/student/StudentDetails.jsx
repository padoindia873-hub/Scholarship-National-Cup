import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  HomeOutlined,
  BankOutlined,
  IdcardOutlined,
  TrophyOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../../context/AuthContext";

const StudentDetails = () => {
  const { user } = useContext(AuthContext);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(
        `https://quiz-backend-aixd.onrender.com/api/auth/student-by-email/${user.email}`
      )
      .then((res) => setStudent(res.data.data))
      .catch((err) =>
        setError(err.response?.data?.message || "Failed to fetch student data")
      )
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!student) return null;

  const show = (v) => v || "—";

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* HEADER */}
      <div className="flex items-center gap-5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-6 rounded-lg shadow">
        <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full overflow-hidden">
          {student.profileImage ? (
            <img
              src={student.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <UserOutlined className="text-4xl text-indigo-600" />
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            {student.firstName} {student.lastName}
          </h2>
          <p className="opacity-90">{student.email}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {/* BASIC INFO */}
        <Section title="Basic Information" color="blue">
          <Item icon={<MailOutlined />} label="Email" value={student.email} />
          <Item icon={<PhoneOutlined />} label="Phone" value={student.phone} />
          <Item
            icon={<WhatsAppOutlined className="text-green-500" />}
            label="WhatsApp"
            value={show(student.whatsappNumber)}
          />
        </Section>

        {/* ADDRESS */}
        <Section title="Address" color="emerald">
          <Item icon={<HomeOutlined />} label="Address" value={show(student.address)} />
          <Item label="District" value={show(student.district)} />
          <Item label="State" value={show(student.state)} />
          <Item label="PIN" value={show(student.pin)} />
        </Section>

        {/* SCHOOL */}
        <Section title="School Details" color="purple">
          <Item icon={<BankOutlined />} label="School" value={show(student.schoolName)} />
          <Item label="Class" value={show(student.studentClass)} />
          <Item label="Section" value={show(student.section)} />
        </Section>

        {/* EXAM & RESULT */}
        {/* EXAM & RESULT */}
<Section title="Exam & Result" color="orange">
  <Item
    icon={<IdcardOutlined />}
    label="Buy Roll"
    value={show(student.buyRoll)}
  />

  <Item
    icon={<IdcardOutlined />}
    label="Bank Transaction (Admin)"
    value={show(student.bankTransaction)}
  />

  <Item
    icon={<IdcardOutlined />}
    label="Bank Transaction (Student)"
    value={show(student.bankTransactionStudent)}
  />

  <Item label="Academy Marks" value={show(student.academyMarks)} />
  <Item label="GK Marks" value={show(student.gkMarks)} />

  <Item
    icon={<TrophyOutlined className="text-yellow-500" />}
    label="Rank"
    value={show(student.rank)}
  />
</Section>

      </div>
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const Section = ({ title, children, color }) => (
  <div className="bg-white rounded-lg shadow border">
    <div
      className={`px-4 py-2 font-semibold text-white bg-${color}-500 rounded-t-lg`}
    >
      {title}
    </div>
    <div className="p-4 space-y-3">{children}</div>
  </div>
);

const Item = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    {icon && <span className="text-lg text-gray-600">{icon}</span>}
    <span className="font-semibold text-gray-700">{label}:</span>
    <span className="text-gray-900">{value}</span>
  </div>
);

export default StudentDetails;
