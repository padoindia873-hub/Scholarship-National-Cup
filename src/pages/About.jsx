import React from "react";
import { Typography, Avatar, Row, Col, Divider, Image } from "antd";
import { FaLinkedin, FaTwitter, FaEnvelope, FaEye, FaBullseye } from "react-icons/fa";

import m1 from "../assets/board1.jpg";
import m2 from "../assets/board2.jpg";
import m3 from "../assets/board3.jpg";
import m4 from "../assets/board4.jpg";
import m5 from "../assets/board5.jpg";
import m6 from "../assets/board6.jpg";
import m7 from "../assets/board7.jpg"

import gallery1 from "../assets/g1.jpg";
import gallery2 from "../assets/g4.jpg";
import gallery3 from "../assets/g2.jpg";
import gallery4 from "../assets/g3.jpg";
import gallery5 from "../assets/g1.jpg";
import gallery6 from "../assets/g4.jpg";

const { Title, Paragraph } = Typography;

const boardMembers = [
    {
        name: "Bholanath De",
        position: "Director",
        image: m1,
    },
    {
        name: "Bipul Mondal",
        position: "Director",
        image: m2,
    },
    {
        name: "Afsasur Rahaman Sardar",
        position: "Director",
        image: m3,
    },
    {
        name: "Anirban Saha",
        position: "Director",
        image: m4,
    },
    {
        name: "Pradip Kumar Goswami",
        position: "Director",
        image: m5,
    },
    {
        name: "Jaggu Sahani",
        position: "Director",
        image: m6,
    },
    {
        name: "Kiran Mondal",
        position: "Director",
        image: m7,
    },
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen p-4">

            {/* Main Layout */}
            <Row gutter={[24, 24]}>

                {/* Left Section */}
                <Col xs={24} md={12}>
                    <div className="bg-gradient-to-r from-blue-100 to-blue-300 text-center p-10 rounded-lg">
                        <Title level={2} className="text-3xl md:text-2xl sm:text-xl font-semibold text-blue-700">
                            About Padho India
                        </Title>
                        <Paragraph className="mt-4 text-lg md:text-base sm:text-sm leading-relaxed text-gray-800">
                            Padho India is a revolutionary educational initiative committed to making quality education accessible to every child, regardless of their financial background. Our mission is to empower students with free online tuition, ensuring that financial constraints do not hinder their learning journey.
                        </Paragraph>
                        <Paragraph className="mt-4 text-lg md:text-base sm:text-sm leading-relaxed text-gray-800">
                            We believe that education is the key to unlocking a brighter future. Through Padho India, we offer free online classes covering all subjects for students from Class 5 to 12. Our platform provides comprehensive learning resources, including live interactive sessions, practical classes, and expert guidance to help students excel academically.
                        </Paragraph>
                        <Paragraph className="mt-4 text-lg md:text-base sm:text-sm leading-relaxed text-gray-800">
                            At Padho India, we understand the aspirations of parents who dream of seeing their children become successful professionals in fields like IT, engineering, and medicine. To support these dreams, we provide free training programs in engineering, software development, and other in-demand sectors. Our goal is to bridge the gap between talent and opportunity by offering accessible and high-quality education.
                        </Paragraph>
                        <Paragraph className="mt-4 text-lg md:text-base sm:text-sm leading-relaxed text-gray-800">
                            In addition to empowering students, Padho India also supports junior advocates by arranging financial assistance. This helps them remain dedicated to their legal profession without being burdened by financial struggles.
                        </Paragraph>
                        <Paragraph className="mt-4 text-lg md:text-base sm:text-sm leading-relaxed text-gray-800">
                            Padho India is not just an educational platform—it is a movement dedicated to building a stronger, smarter, and brighter nation by ensuring that every child has the opportunity to learn, grow, and succeed.
                        </Paragraph>
                        <Paragraph className="mt-4 text-lg md:text-base sm:text-sm leading-relaxed text-gray-800">
                            চলুন আমরা এবং আপনারা মিলে সেই সমস্ত ফুটফুটে বাচ্চাদের ভবিষ্যৎ গড়ে তুলি, যারা আমাদের দেশের সম্পদ. আমাদের দেশের স্তম্ভ এবং আমাদের দেশের ভবিষ্যৎ.
                        </Paragraph>
                    </div>
                </Col>

                {/* Right Section with Vision and Mission */}
                <Col xs={24} md={12}>
                    <div className="space-y-8">

                        {/* Vision */}
                        <div className="bg-white p-8 rounded-lg transition hover">
                            <div className="flex items-center">
                                <FaEye className="text-blue-500 text-5xl mr-4" />
                                <Title level={3} className="text-blue-600 text-2xl md:text-xl sm:text-lg">Our Vision</Title>
                            </div>
                            <Divider />
                            <Paragraph className="text-lg md:text-base sm:text-sm text-gray-700 leading-relaxed">
                                Equal education for all: We envision a future where every child, regardless of their
                                socioeconomic background, has access to quality education that empowers them to build a brighter future.
                            </Paragraph>
                            <Paragraph className="text-lg md:text-base sm:text-sm text-gray-700 leading-relaxed">
                                Bridging the digital divide: By integrating technology into learning, we aim to
                                connect students in rural and underserved areas with global educational resources.
                            </Paragraph>
                            <Paragraph className="text-lg md:text-base sm:text-sm text-gray-700 leading-relaxed">
                                Promoting lifelong learning: Our goal is to cultivate a culture of continuous
                                learning, equipping students with the skills needed to thrive in a rapidly evolving world.
                            </Paragraph>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-8 rounded-lg transition hover">
                            <div className="flex items-center">
                                <FaBullseye className="text-green-500 text-5xl mr-4" />
                                <Title level={3} className="text-blue-600 text-2xl md:text-xl sm:text-lg">Our Mission</Title>
                            </div>
                            <Divider />
                            <Paragraph className="text-lg md:text-base sm:text-sm text-gray-700 leading-relaxed">
                                Providing scholarships: We offer fully-funded scholarships to students from economically
                                disadvantaged backgrounds, ensuring they have the resources to pursue their education without barriers.
                            </Paragraph>
                            <Paragraph className="text-lg md:text-base sm:text-sm text-gray-700 leading-relaxed">
                                Empowering through mentorship: Our mentorship programs connect students with industry
                                experts, guiding them through career planning and skill development.
                            </Paragraph>
                            <Paragraph className="text-lg md:text-base sm:text-sm text-gray-700 leading-relaxed">
                                Enhancing digital literacy: We equip students with essential digital skills to thrive in
                                the modern workforce, closing the gap between education and employment.
                            </Paragraph>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* Chairman's Desk */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
  <Title level={3} className="text-blue-700 mb-2">From the Chairman's Desk</Title>
  <Paragraph className="text-lg text-gray-700">
    Our Honourable Founder, Chairman, CEO Cum Managing Director <strong>Mr. Md. K. Khan Sir</strong> is the proud recipient of the <strong>Bharat Gaurav Award</strong> and <strong>Rashtriya Vikas Ratan Award</strong>, achieved on <strong>23rd August 2012</strong> from the Indian Achievers Forum, New Delhi.
  </Paragraph>
  <Paragraph className="text-lg text-gray-700">
    He is a great achiever and a relentless force working towards propelling India into the forefront of the 21st Century. An <strong>ICON</strong>, a <strong>visionary</strong>, and a true leader, Mr. Khan has the unique capability to think out of the box.
  </Paragraph>
  <Paragraph className="text-lg text-gray-700">
    With immense knowledge and experience across almost every field of life, he consistently delivers outstanding results. His brilliant mind and high IQ empower him to complete any project efficiently within a remarkably short span of time.
  </Paragraph>
  <Paragraph className="text-xl font-semibold text-blue-600">— Md. K. Khan</Paragraph>
</div>


            {/* Board of Directors */}
            <div className="bg-white py-12">
                <div className="max-w-6xl mx-auto">
                    <Title level={3} className="text-center text-blue-600 mb-8">Board of Directors</Title>
                    <Row gutter={[24, 24]} justify="center">
                        {boardMembers.map((member, index) => (
                            <Col xs={24} sm={12} md={6} key={index} className="text-center">
                                <Avatar size={140} src={member.image} className="mb-4" />
                                <Title level={5} className="text-md">{member.name}</Title>
                                <Paragraph className="text-gray-500 text-sm">{member.position}</Paragraph>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

            {/* Gallery */}
            <div className="bg-white py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <Title level={3} className="text-center text-blue-600 mb-8">Gallery</Title>
                    <Row gutter={[16, 16]} justify="center">
                        {galleryImages.map((src, index) => (
                            <Col xs={12} md={8} key={index}>
                                <div className="overflow-hidden rounded-lg hover transition">
                                    <Image src={src} alt={`Gallery ${index + 1}`} className="rounded-lg" />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
