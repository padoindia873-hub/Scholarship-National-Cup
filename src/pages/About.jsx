import React, { useState, useEffect, useRef } from "react";
import { Typography, Row, Col, Modal } from "antd";
import { FaLinkedin, FaTwitter, FaEnvelope, FaEye, FaBullseye, FaTrophy, FaGraduationCap, FaGlobe, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { GiBookshelf, GiAchievement } from "react-icons/gi";
import { MdOutlineEmojiEvents } from "react-icons/md";

import m1 from "../assets/board1.jpg";
import m2 from "../assets/board2.jpg";
import m3 from "../assets/board3.jpg";
import m4 from "../assets/board4.jpg";
import m5 from "../assets/board5.jpg";
import m6 from "../assets/board6.jpg";
import m7 from "../assets/board7.jpg";

import gallery2 from "../assets/g4.jpg";
import gallery3 from "../assets/g2.jpg";
import gallery4 from "../assets/g3.jpg";
 
const { Title, Paragraph } = Typography;

const boardMembers = [
    { name: "Bholanath De", position: "Director", image: m1, linkedin: "#", twitter: "#", email: "#" },
    { name: "Bipul Mondal", position: "Director", image: m2, linkedin: "#", twitter: "#", email: "#" },
    { name: "Afsasur Rahaman Sardar", position: "Director", image: m3, linkedin: "#", twitter: "#", email: "#" },
    { name: "Anirban Saha", position: "Director", image: m4, linkedin: "#", twitter: "#", email: "#" },
    { name: "Pradip Kumar Goswami", position: "Director", image: m5, linkedin: "#", twitter: "#", email: "#" },
    { name: "Jaggu Sahani", position: "Director", image: m6, linkedin: "#", twitter: "#", email: "#" },
    { name: "Kiran Mondal", position: "Director", image: m7, linkedin: "#", twitter: "#", email: "#" },
];

// Updated gallery images - removed g1.jpg (gallery1 and gallery5 which both used g1.jpg)
const galleryImages = [
    { src: gallery2, alt: "Award Ceremony" },
    { src: gallery3, alt: "Students Celebration" },
    { src: gallery4, alt: "Teaching Session" },
     
];

// Flip Card Component for Board Members
const FlipCard = ({ member }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="flip-card-member w-full cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`flip-card-member-inner ${isFlipped ? 'flipped' : ''}`}>
                {/* Front Side */}
                <div className="flip-card-member-front">
                    <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-yellow-400 shadow-lg" />
                    <h3 className="text-white text-xl font-bold">{member.name}</h3>
                    <p className="text-yellow-200 text-sm">{member.position}</p>
                    <div className="mt-2 text-white/60 text-xs">👆 Hover to know more</div>
                </div>
                
                {/* Back Side */}
                <div className="flip-card-member-back">
                    <h3 className="text-white text-lg font-bold mb-2">{member.name}</h3>
                    <p className="text-yellow-200 text-sm mb-3">{member.position}</p>
                    <div className="flex gap-3 mt-2">
                        <a href={member.linkedin} className="text-white hover:text-yellow-300 transition">🔗</a>
                        <a href={member.twitter} className="text-white hover:text-yellow-300 transition">🐦</a>
                        <a href={member.email} className="text-white hover:text-yellow-300 transition">📧</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutPage = () => {
    const [galleryVisible, setGalleryVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(1); // Changed from 2 to 1 since we have 4 images
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const openGallery = (img) => {
        setSelectedImage(img);
        setGalleryVisible(true);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const handlePre = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    // Auto slide
    useEffect(() => {
        const slider = setInterval(() => {
            if (!isDragging) {
                handleNext();
            }
        }, 3000);
        return () => clearInterval(slider);
    }, [isDragging, currentIndex]);

    // Get card size based on position
    const getCardStyle = (index) => {
        let diff = (index - currentIndex + galleryImages.length) % galleryImages.length;
        if (diff > galleryImages.length / 2) diff = diff - galleryImages.length;
        
        const absDiff = Math.abs(diff);
        
        let scale = 1;
        let opacity = 1;
        let zIndex = 10;
        let translateX = 0;
        let translateY = 0;
        let blur = "blur(0px)";
        
        if (absDiff === 0) {
            // Center card - Biggest
            scale = 1.2;
            zIndex = 30;
            opacity = 1;
            translateX = 0;
            translateY = 0;
            blur = "blur(0px)";
        } else if (absDiff === 1) {
            // Adjacent cards - Medium
            scale = 0.85;
            zIndex = 20;
            opacity = 0.7;
            translateX = diff > 0 ? 180 : -180;
            translateY = 20;
            blur = "blur(1px)";
        } else {
            // Far cards - Small
            scale = 0.6;
            zIndex = 10;
            opacity = 0.4;
            translateX = diff > 0 ? 320 : -320;
            translateY = 50;
            blur = "blur(2px)";
        }
        
        return {
            transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
            opacity,
            zIndex,
            transition: "all 0.5s cubic-bezier(0.4, 0.2, 0.2, 1)",
            filter: blur,
            cursor: absDiff === 0 ? "default" : "pointer",
        };
    };

    // Swipe handlers
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const diff = e.touches[0].clientX - startX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                handlePre();
            } else {
                handleNext();
            }
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const diff = e.clientX - startX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                handlePre();
            } else {
                handleNext();
            }
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="about-page min-h-screen" style={{ background: "linear-gradient(135deg, rgb(122 126 245 / 68%) 0%, rgb(195, 207, 226) 100%)" }}>
            
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-800 to-purple-800 text-white py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slideDown">Padho India</h1>
                    <p className="text-xl md:text-2xl text-yellow-300 mb-6 animate-slideDown animation-delay-200">Empowering Education, Transforming Lives</p>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <Row gutter={[32, 32]}>
                    {/* Left Section - About */}
                    <Col xs={24} lg={12}>
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <GiBookshelf className="text-blue-600 text-2xl" />
                                </div>
                                <Title level={2} className="text-3xl font-bold text-blue-800 m-0">About Padho India</Title>
                            </div>
                            <Paragraph className="text-gray-700 leading-relaxed mb-4">
                                Padho India is a revolutionary educational initiative committed to making quality education accessible to every child, regardless of their financial background. Our mission is to empower students with free online tuition, ensuring that financial constraints do not hinder their learning journey.
                            </Paragraph>
                            <Paragraph className="text-gray-700 leading-relaxed mb-4">
                                We believe that education is the key to unlocking a brighter future. Through Padho India, we offer free online classes covering all subjects for students from Class 5 to 12. Our platform provides comprehensive learning resources, including live interactive sessions, practical classes, and expert guidance to help students excel academically.
                            </Paragraph>
                            <Paragraph className="text-gray-700 leading-relaxed mb-4">
                                At Padho India, we understand the aspirations of parents who dream of seeing their children become successful professionals in fields like IT, engineering, and medicine. To support these dreams, we provide free training programs in engineering, software development, and other in-demand sectors.Our goal is to bridge the gap between talent and opportunity by offering accessible and high-quality education.
                            </Paragraph>
                            <Paragraph className="text-gray-700 leading-relaxed mb-4">
                            In addition to empowering students, Padho India also supports junior advocates by arranging financial assistance. This helps them remain dedicated to their legal profession without being burdened by financial struggles.
                        </Paragraph>
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mt-4">
                                <p className="text-gray-800 italic">"চলুন আমরা এবং আপনারা মিলে সেই সমস্ত ফুটফুটে বাচ্চাদের ভবিষ্যৎ গড়ে তুলি, যারা আমাদের দেশের সম্পদ. আমাদের দেশের স্তম্ভ এবং আমাদের দেশের ভবিষ্যৎ."</p>
                            </div>
                        </div>
                    </Col>

                    {/* Right Section - Vision & Mission */}
                    <Col xs={24} lg={12}>
                        <div className="space-y-6">
                            {/* Vision Card */}
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                        <FaEye className="text-white text-2xl" />
                                    </div>
                                    <Title level={3} className="text-2xl font-bold text-blue-800 m-0">Our Vision</Title>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-gray-700"><span className="font-semibold text-blue-600">✨ Equal education for all:</span> We envision a future where every child, regardless of their
                                socioeconomic background, has access to quality education that empowers them to build a brighter future.</p>
                                    <p className="text-gray-700"><span className="font-semibold text-blue-600">🌐 Bridging the digital divide:</span> By integrating technology into learning, we aim to
                                connect students in rural and underserved areas with global educational resources.</p>
                                    <p className="text-gray-700"><span className="font-semibold text-blue-600">📚 Promoting lifelong learning:</span> Our goal is to cultivate a culture of continuous
                                learning, equipping students with the skills needed to thrive in a rapidly evolving world.</p>
                                </div>
                            </div>

                            {/* Mission Card */}
                            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                        <FaBullseye className="text-white text-2xl" />
                                    </div>
                                    <Title level={3} className="text-2xl font-bold text-green-800 m-0">Our Mission</Title>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-gray-700"><span className="font-semibold text-green-600">🎓 Providing scholarships:</span>We offer fully-funded scholarships to students from economically
                                disadvantaged backgrounds, ensuring they have the resources to pursue their education without barriers.</p>
                                    <p className="text-gray-700"><span className="font-semibold text-green-600">🤝 Empowering through mentorship:</span>Our mentorship programs connect students with industry
                                experts, guiding them through career planning and skill development.</p>
                                    <p className="text-gray-700"><span className="font-semibold text-green-600">💻 Enhancing digital literacy:</span>We equip students with essential digital skills to thrive in
                                the modern workforce, closing the gap between education and employment.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Chairman's Desk - Enhanced */}
                <div className="mt-16 relative">
                    {/* Premium Background with Parallax */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-8 md:p-12 text-white">
                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            {/* Left - Image with Glow */}
                            <div className="lg:w-1/3 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-50"></div>
    <div className="relative">
        <div className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
            <img src="https://via.placeholder.com/300" alt="Md. K. Khan" className="w-full h-full object-cover" />
        </div>
        
        {/* Badge 1 - Bharat Gaurav Award */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-green-500 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
            🏆 Bharat Gaurav Award
        </div>
        
        {/* Badge 2 - Rashtriya Vikas Ratan Award - Positioned below */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
            🏆 Rashtriya Vikas Ratan Award
        </div>
    </div>
    
    <div className="text-center mt-16">
        <h3 className="text-2xl font-bold">MD. K. KHAN</h3>
        <p className="text-yellow-300">FOUNDER & CHAIRMAN CUM CMD</p>
    </div>
</div>
                            
                            {/* Right - Content */}
                            <div className="lg:w-2/3">
                                <div className="mb-6">
                                    <h2 className="text-3xl md:text-4xl font-bold">Chairman's Message</h2>
                                    <div className="w-20 h-1 bg-yellow-400 mt-2 rounded-full"></div>
                                </div>
                                
                                <div className="space-y-4 text-white/90">
                                    <p className="leading-relaxed">
                                        Our Honourable Founder, Chairman, CMD Cum Managing Director <strong className="text-yellow-300">Mr. Md. K. Khan Sir</strong> 
                                        is the proud recipient of the <span className="bg-yellow-500/30 px-2 py-1 rounded">Bharat Gaurav Award</span> 
                                        and <span className="bg-green-500/30 px-2 py-1 rounded">Rashtriya Vikas Ratan Award</span>, 
                                        achieved on <strong className="text-yellow-300">23rd August 2012</strong> from the Indian Achievers Forum, New Delhi.
                                    </p>
                                    <p className="leading-relaxed">
                                        He is a great achiever and a relentless force working towards propelling India into the forefront of the 21st Century. 
                                        An <strong className="text-yellow-300">ICON</strong>, a <strong className="text-yellow-300">visionary</strong>, 
                                        and a true leader, Mr. Khan has the unique capability to think out of the box.
                                    </p>
                                    <p className="leading-relaxed italic border-l-4 border-yellow-400 pl-4">
                                        With immense knowledge and experience across almost every field of life, he consistently delivers outstanding results. 
                                        His brilliant mind and high IQ empower him to complete any project efficiently within a remarkably short span of time.
                                    </p>
                                </div>
                                
                                <div className="mt-6 flex justify-end">
                                    <div className="text-right">
                                        <p className="text-xl font-serif">MD. K. KHAN</p>
                                        <p className="text-sm text-white/70">FOUNDER & CHAIRMAN CUM CMD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Board of Directors with Flip Cards */}
                <div className="mt-16">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-blue-800 mb-3">Board of Directors</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-3">Meet our visionary leaders guiding Padho India towards excellence</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {boardMembers.map((member, index) => (
                            <FlipCard key={index} member={member} />
                        ))}
                    </div>
                </div>

                {/* Gallery Section - Coverflow Carousel Style */}
                <div className="mt-16">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-blue-800 mb-3">Our Gallery</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-3">Moments that define our journey</p>
                    </div>

                    <div 
                        className="w-full flex flex-col justify-center items-center py-8 overflow-hidden"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Coverflow Carousel */}
                        <div className="relative flex items-center justify-center w-full min-h-[500px]">
                            
                            {/* Prev Button */}
                            <button
                                onClick={handlePre}
                                className="absolute left-4 z-40 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                            >
                                {"<"}
                            </button>

                            {/* Cards Container */}
                            <div className="relative flex items-center justify-center w-full h-[450px]">
                                {galleryImages.map((image, index) => {
                                    const style = getCardStyle(index);
                                    const isCenter = Math.abs((index - currentIndex + galleryImages.length) % galleryImages.length) === 0;
                                    
                                    return (
                                        <div
                                            key={index}
                                            className="absolute transition-all duration-500"
                                            style={style}
                                            onClick={() => {
                                                if (!isCenter) {
                                                    setCurrentIndex(index);
                                                } else {
                                                    openGallery(image.src);
                                                }
                                            }}
                                        >
                                            <div className={`bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl ${
                                                isCenter ? 'ring-4 ring-yellow-400' : ''
                                            }`}>
                                                <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
                                                    <img
                                                        src={image.src}
                                                        alt={image.alt}
                                                        className={`w-80 h-64 object-cover rounded-xl transition-all duration-300 cursor-pointer ${
                                                            isCenter ? 'scale-100' : ''
                                                        }`}
                                                    />
                                                    <div className="p-3 text-center">
                                                        <p className="text-white font-semibold text-sm">
                                                            {image.alt}
                                                        </p>
                                                        {isCenter && (
                                                            <p className="text-yellow-300 text-xs mt-1 cursor-pointer" onClick={() => openGallery(image.src)}>
                                                                ✨ Click to view ✨
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={handleNext}
                                className="absolute right-4 z-40 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                            >
                                {">"}
                            </button>
                        </div>

                        {/* Bottom Dots */}
                        <div className="flex space-x-2 mt-8">
                            {galleryImages.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                                        currentIndex === index ? "bg-yellow-400 w-8" : "bg-white/50 w-2 hover:bg-white/80"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Swipe Instruction */}
                        <p className="text-gray-600 text-sm mt-2">
                            ← Swipe or use arrows → | Click center image to view full size
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl py-12 px-6 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">10,000+</div>
                            <div className="text-sm opacity-80">Students Enrolled</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-sm opacity-80">Expert Teachers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">100+</div>
                            <div className="text-sm opacity-80">Free Courses</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">20+</div>
                            <div className="text-sm opacity-80">Partner Schools</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Modal */}
            <Modal open={galleryVisible} footer={null} onCancel={() => setGalleryVisible(false)} width="80%" centered>
                <img src={selectedImage} alt="Gallery" className="w-full rounded-lg" />
            </Modal>

            {/* Flip Card Styles */}
            <style jsx>{`
                .flip-card-member {
                    background-color: transparent;
                    height: 280px;
                    perspective: 1000px;
                }
                .flip-card-member-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                    border-radius: 1rem;
                }
                .flip-card-member-inner.flipped {
                    transform: rotateY(180deg);
                }
                .flip-card-member-front, .flip-card-member-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 1rem;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .flip-card-member-front {
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                }
                .flip-card-member-back {
                    background: linear-gradient(135deg, #8b5cf6, #3b82f6);
                    transform: rotateY(180deg);
                }
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slideDown {
                    animation: slideDown 0.6s ease-out;
                }
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default AboutPage;