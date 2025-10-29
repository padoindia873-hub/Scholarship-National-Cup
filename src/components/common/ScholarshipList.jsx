import React, { useState } from "react";
import { Card, Button, Tag, Input } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const scholarships = [
    {
        id: 1,
        title: "STEM Excellence Scholarship",
        amount: "$5,000",
        eligibility: "Class 10, 11, 12",
        deadline: "April 15, 2025",
        exam: ["General Knowledge", "Mathematics", "Science"],
        description: `The STEM Excellence Scholarship is aimed at supporting students 
    excelling in science, technology, engineering, and mathematics. It provides financial 
    assistance to cover tuition fees, living expenses, and includes mentorship programs 
    with industry experts.`,
        documents: ["Transcripts", "Resume", "Recommendation Letter"],
        process: "Apply online through the official website and submit the required documents.",
        terms: "Recipients must maintain a GPA of 3.0 or higher.",
        contact: "support@scholarships.com",
    },
    {
        id: 2,
        title: "Future Leaders Grant",
        amount: "$3,000",
        eligibility: "Class 8, 9, 10",
        deadline: "May 10, 2025",
        exam: ["English", "Reasoning", "Current Affairs"],
        description: `The Future Leaders Grant aims to identify and support students with 
    outstanding leadership potential. It offers financial aid and access to leadership 
    workshops, mentorship, and networking opportunities with industry leaders.`,
        documents: ["Resume", "Leadership Essay"],
        process: "Submit your application with supporting documents online.",
        terms: "Only students with verified leadership activities are eligible.",
        contact: "leaders@scholarships.com",
    },
];

const ScholarshipList = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [isFolded, setIsFolded] = useState(true);

    const classes = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`);

    const filteredScholarships = scholarships.filter((scholarship) => {
        const matchesSearch = scholarship.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
            scholarship.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

        const matchesClass =
            !selectedClass || scholarship.eligibility.includes(selectedClass);

        return matchesSearch && matchesClass;
    });

    return (
        <div className=" bg-gray-50">

            {/* Mobile-friendly Filter Section */}
            <div className="bg-white p-4 sticky top-0 z-10 md:hidden">
                <h2 className="text-lg font-bold mb-2">Filters</h2>

                {/* Search */}
                <Search
                    placeholder="Search scholarships..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-3"
                    allowClear
                />

                {/* Class Filter */}
                <div className="mb-3">
                    <h3
                        className={`text-sm font-medium cursor-pointer mb-2 ${isFolded ? "text-blue-500" : "text-red-500"
                            }`}
                        onClick={() => setIsFolded(!isFolded)}
                    >
                        {isFolded ? "Show Classes" : "Hide Classes"}
                    </h3>

                    <div className={`${isFolded ? "hidden" : "grid grid-cols-3 gap-2"}`}>
                        {classes.map((cls) => (
                            <Button
                                key={cls}
                                onClick={() =>
                                    setSelectedClass(selectedClass === cls ? "" : cls)
                                }
                                className={`text-sm border w-full ${selectedClass === cls
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-black hover:bg-gray-100"
                                    }`}
                            >
                                {cls}
                            </Button>
                        ))}
                    </div>
                </div>

                <Button onClick={() => setSelectedClass("")} className="w-full">
                    Clear Filters
                </Button>
            </div>

            <div className="flex flex-col md:flex-row">

                {/* Sidebar for Larger Screens */}
                <div className="hidden md:block w-1/4 bg-white p-6 border-r">
                    <h2 className="text-xl font-bold mb-4">Filters</h2>

                    {/* Search Bar */}
                    <Search
                        placeholder="Search scholarships..."
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="mb-4"
                        allowClear
                    />

                    {/* Class Filter */}
                    <div className="mb-4">
                        <h3
                            className={`text-sm font-medium cursor-pointer mb-2 ${isFolded ? "text-blue-500" : "text-red-500"
                                }`}
                            onClick={() => setIsFolded(!isFolded)}
                        >
                            {isFolded ? "Show Classes" : "Hide Classes"}
                        </h3>
                        <div
                            className={`${isFolded ? "hidden" : "grid grid-cols-3 gap-2"}`}
                        >
                            {classes.map((cls) => (
                                <Button
                                    key={cls}
                                    onClick={() =>
                                        setSelectedClass(selectedClass === cls ? "" : cls)
                                    }
                                    className={`text-sm border w-full ${selectedClass === cls
                                            ? "bg-blue-500 text-white"
                                            : "bg-white text-black hover:bg-gray-100"
                                        }`}
                                >
                                    {cls}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Button onClick={() => setSelectedClass("")} className="w-full mt-2">
                        Clear Filters
                    </Button>
                </div>

                {/* Scholarship Cards */}
                <div className="flex-1 p-4 md:p-8 bg-white">
                    {filteredScholarships.length > 0 ? (
                        filteredScholarships.map((scholarship) => (
                            <Card
                                key={scholarship.id}
                                className="mb-6 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
                                bodyStyle={{ display: "flex", flexDirection: "column" }}
                            >
                                <div className="md:flex md:items-center justify-between">
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold mb-2">
                                            {scholarship.title}
                                        </h2>
                                        <p className="text-gray-600">
                                            {scholarship.description.slice(0, 200)}...
                                        </p>

                                        <div className="flex items-center gap-4 my-4 flex-wrap">
                                            <Tag color="blue">{scholarship.amount}</Tag>
                                            <Tag color="green">{scholarship.eligibility}</Tag>
                                            <Tag color="red">Deadline: {scholarship.deadline}</Tag>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {scholarship.exam.map((subject, index) => (
                                                <Tag color="purple" key={index}>
                                                    {subject}
                                                </Tag>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 mt-4 md:mt-0">
                                        <Button
                                            type="primary"
                                            onClick={() => navigate(`/scholarship/${scholarship.id}`)}
                                        >
                                            View Details
                                        </Button>
                                        <Button type="default">Apply Now</Button>
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">No scholarships found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScholarshipList;
