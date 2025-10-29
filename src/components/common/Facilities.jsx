import React from "react";
import { Row, Col, Card, ConfigProvider } from "antd";
import {
  FaGraduationCap,
  FaUserTie,
  FaMedal,
  FaChalkboardTeacher,
  FaBriefcase,
  FaStethoscope,
  FaBookReader,
  FaLanguage,
  FaLaptopCode,
  FaUserCheck,
  FaGavel,
  FaLightbulb
} from "react-icons/fa";
import "antd/dist/reset.css";

// Import images
import img1 from "../../assets/f1.jpg";
import img2 from "../../assets/f2.jpg";
import img3 from "../../assets/f3.jpg";
import img4 from "../../assets/f4.jpg";
import img5 from "../../assets/f5.jpg";
import img6 from "../../assets/f6.jpg";
import img7 from "../../assets/f8.png";
import img8 from "../../assets/f7.png";
import img9 from "../../assets/f9.png";
import img10 from "../../assets/f10.png";
import img11 from "../../assets/f11.png";
import img12 from "../../assets/f12.png";
import { Link } from "react-router-dom";

const facilities = [
  {
    id: 1,
    title: "Top Candidate List",
    description:
      "This section features the top-performing students from West Bengal in the scholarship competition.",
    icon: <FaGraduationCap />,
    img: img1,
    iconColor: "text-red-500",
    ls:"topcandidatelist",
  },
  {
    id: 2,
    title: "State Level Top School List",
    description:
      "State Level Top School List....State Level Top School List..State Level State Level Top School List",
    icon: <FaLightbulb />,
    img: img12,
    iconColor: "text-amber-600",
    ls:"motivationalandinspiringclasses",
  },
  // {
  //   id: 2,
  //   title: "Elite Mentorship",
  //   description:
  //     "Learn from top-tier mentors with industry expertise and years of experience across diverse domains.",
  //   icon: <FaUserTie />,
  //   img: img2,
  //   iconColor: "text-green-500",
  //    ls:"elitementorship",
  // },
  {
    id: 3,
    title: "Exclusive Scholarships",
    description:
      "Secure scholarships that recognize and support exceptional talent, fostering academic excellence.",
    icon: <FaMedal />,
    img: img3,
    iconColor: "text-yellow-500",
     ls:"exclusivescholarships",

  },
  {
    id: 4,
    title: "National Level Top School",
    description:
      "Personalized coaching sessions tailored to accelerate individual growth and academic performance.",
    icon: <FaChalkboardTeacher />,
    img: img4,
    iconColor: "text-blue-500",
     ls:"onebyonecoaching",
  },
  {
    id: 5,
    title: "Free Medical Treatment",
    description:
      "Get access to essential medical care services without any financial burden for families in need.",
    icon: <FaStethoscope />,
    img: img5,
    iconColor: "text-pink-500",
     ls:"freemedicaltreatment",
  },
  {
    id: 6,
    title: "Job Facilities & Vacancy",
    description:
      "We provide job support and vacancy connections to empower youth with employment opportunities.",
    icon: <FaBriefcase />,
    img: img6,
    iconColor: "text-indigo-500",
     ls:"jobfacilities",
  },
  {
    id: 7,
    title: "Free Online Tuition (5 to 12)",
    description:
      "Interactive, curriculum-based online classes for students from classes 5 to 12 absolutely free.",
    icon: <FaBookReader />,
    img: img7,
    iconColor: "text-orange-500",
     ls:"freeonlinetuition",
  },
  {
    id: 8,
    title: "Free Spoken English",
    description:
      "Improve your English communication skills and confidence with our expert-led spoken English classes.",
    icon: <FaLanguage />,
    img: img8,
    iconColor: "text-purple-500",
    ls:"freespokenenglish",
  },
  {
    id: 9,
    title: "Free Online IT Classes",
    description:
      "Join virtual IT courses and upskill yourself with trending tech skills like coding, web, and more.",
    icon: <FaLaptopCode />,
    img: img9,
    iconColor: "text-cyan-500",
    ls:"freeonlineitclasses",
  },
  {
    id: 10,
    title: "Free Career Counseling",
    description:
      "One-on-one and group counseling sessions to help students choose the right career path for their future.",
    icon: <FaUserCheck />,
    img: img10,
    iconColor: "text-lime-600",
    ls:"freecareercounseling",
  },
  {
    id: 11,
    title: "Legal Support (Advocate)",
    description:
      "Receive guidance and legal support from certified advocates for justice and protection of rights.",
    icon: <FaGavel />,
    img: img11,
    iconColor: "text-rose-500",
    ls:"legalsupport",
  },
  {
    id: 12,
    title: "Live Streaming",
    description:
      "Get inspired through regular sessions that boost confidence and mindset.",
    icon: <FaLightbulb />,
    img: img12,
    iconColor: "text-amber-600",
    ls:"motivationalandinspiringclasses",
  },
  
  {
    id: 14,
    title: "KK Raksh Kavach",
    description:
      "Beti Bachao Beta Bachao",
    icon: <FaLightbulb />,
    img: img12,
    iconColor: "text-amber-600",
    ls:"motivationalandinspiringclasses",
  },
  {
    id: 15,
    title: "QAR",
    description:
      "Quick Afforadble Rides",
    icon: <FaLightbulb />,
    img: img12,
    iconColor: "text-amber-600",
    ls:"motivationalandinspiringclasses",
  },
  {
    id: 16,
    title: "Free Acting Chances",
    description:
      "Free Acting Chances Free...",
    icon: <FaLightbulb />,
    img: img12,
    iconColor: "text-amber-600",
    ls:"motivationalandinspiringclasses",
  },
  {
    id: 17,
    title: "QCM India's Medicine",
    description:
      "Upto 70% discount",
    icon: <FaLightbulb />,
    img: img12,
    iconColor: "text-amber-600",
    ls:"motivationalandinspiringclasses",
  },

];

const Facilities = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyPadding: 0,
          },
        },
      }}
    >
     
      <div className="py-10 bg-gray-50">
        {/* Cards */}
        <Row gutter={[24, 24]} justify="center" className="px-6 md:px-10">
          {facilities.map((facility) => (
           
            <Col key={facility.id} xs={24} sm={12} md={8} lg={6}>
                <Link to={facility.ls}>
              <div className="relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                  <span className={`text-4xl ${facility.iconColor}`}>{facility.icon}</span>
                </div>
                <Card
                  hoverable
                  className="rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-0 mt-12"
                  bodyStyle={{ padding: 0 }}
                >
                  <div
                    className="h-36 bg-cover bg-center"
                    style={{ backgroundImage: `url(${facility.img})` }}
                  ></div>
                  <div className="text-center mt-6 p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{facility.title}</h3>
                    <p className="text-gray-600 mt-3 leading-relaxed">{facility.description}</p>
                  </div>
                </Card>
              </div>
              </Link>
            </Col>
              
          ))}
        </Row>
      </div>
    
    </ConfigProvider>
  );
};

export default Facilities;
