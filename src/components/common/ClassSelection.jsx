import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, message, notification } from "antd";

const ClassSelection = () => {
    const [selectedClass, setSelectedClass] = useState(null);
    const navigate = useNavigate();

    const handleSelectClass = (classNumber) => {
        setSelectedClass(classNumber);
        message.success(`Class ${classNumber} selected!`);
    };

    const handleEnroll = () => {
        if (selectedClass) {
            notification.success({
                message: "Enrollment Successful",
                description: `You have successfully enrolled in Class ${selectedClass}.`,
                placement: "topRight",
                duration: 2,
            });

            setTimeout(() => {
                navigate(`/register?class=${selectedClass}`);
            }, 2000);
        } else {
            notification.error({
                message: "Enrollment Failed",
                description: "Please select a class before enrolling.",
                placement: "topRight",
                duration: 3,
            });
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-10 bg-gray-50">

            {/* Motivational Message */}
            <div className="text-center max-w-4xl mb-6">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                    চলুন আমরা এবং আপনারা মিলে সেই সমস্ত ফুটফুটে বাচ্চাদের ভবিষ্যৎ গড়ে তুলি, যারা আমাদের দেশের সম্পদ. আমাদের দেশের স্তম্ভ এবং আমাদের দেশের ভবিষ্যৎ।
                    <br />
                    Let us and you together build the future of our children who are the resources of our country, the pillars of our country, and the future of our country.
                </p>
            </div>

            {/* Header and Tagline */}
            <div className="text-center max-w-3xl mb-6">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 whitespace-nowrap">
                    <span className="block sm:inline">Padho India Free Tuition</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mt-2 italic">
                    Achieve your dreams with <span className="font-semibold text-yellow-400">100% free education</span>. <br />
                    Enroll now for the <span className="text-blue-500 font-semibold">2025-2026 session!</span>
                </p>
            </div>

            {/* Class Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 w-full max-w-4xl">
                {[...Array(8)].map((_, index) => (
                    <Button
                        key={index + 1}
                        onClick={() => handleSelectClass(index + 1)}
                        type={selectedClass === index + 1 ? "primary" : "default"}
                        className="h-10 sm:h-12 w-full rounded-md transition-all duration-300 shadow-md text-xs sm:text-sm font-medium"
                    >
                        Class {index + 5}
                    </Button>
                ))}
            </div>

            {/* Fee Display */}
            <div className="text-center mt-10">
                <p className="text-sm sm:text-base font-medium text-gray-700 inline relative">
                    <span className="line-through">₹9999</span>
                </p>
                <span className="text-2xl sm:text-3xl font-bold text-red-500 ml-2">Free</span>
                <p className="text-gray-500 text-sm">Includes all taxes & charges</p>

                <p className="text-gray-700 text-xs sm:text-sm mt-2 font-semibold">
                    Limited seats available. Enroll now and secure your future.
                </p>
            </div>

            {/* Enroll Button */}
            <div className="text-center mt-4 mb-6">
                <Button
                    onClick={handleEnroll}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-md text-sm sm:text-base 
                    shadow-lg transition-transform duration-300 transform hover:scale-105 border-none"
                >
                    Enroll Now
                </Button>
            </div>
        </div>
    );
};

export default ClassSelection;
