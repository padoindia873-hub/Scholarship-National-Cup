import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Tag, Divider } from "antd";

const scholarships = [
    {
        id: 1,
        title: "STEM Excellence Scholarship",
        amount: "$5,000",
        eligibility: "Class 10, 11, 12",
        deadline: "April 15, 2025",
        description: `
        The STEM Excellence Scholarship aims to support students excelling 
        in science, technology, engineering, and mathematics. It covers tuition fees, 
        living expenses, and offers mentorship programs with industry leaders.
  
        This scholarship is designed for students who demonstrate exceptional 
        academic performance, innovative thinking, and a passion for STEM fields.
  
        Additionally, selected candidates will gain access to exclusive STEM 
        workshops, networking events, and internship opportunities with leading companies.
      `,
        exam: ["General Knowledge", "Mathematics", "Science"],
        documents: [
            "Transcripts",
            "Resume",
            "Recommendation Letter",
            "Proof of Enrollment",
            "Personal Statement",
        ],
        process: [
            "Submit your application online through the official website.",
            "Upload the required documents in PDF format.",
            "Applications will be reviewed by the scholarship committee.",
            "Selected candidates will be invited for an online interview.",
        ],
        terms: [
            "Recipients must maintain a GPA of 3.0 or higher throughout the program.",
            "The scholarship is non-transferable.",
            "Funds are disbursed directly to the recipient’s educational institution.",
        ],
        contact: "support@scholarships.com",
    },
    {
        id: 2,
        title: "Future Leaders Grant",
        amount: "$3,000",
        eligibility: "Class 8, 9, 10",
        deadline: "May 10, 2025",
        description: `
        The Future Leaders Grant identifies and supports students with 
        outstanding leadership potential. It offers financial aid, 
        access to leadership workshops, mentorship programs, and 
        networking opportunities with industry experts.
  
        Recipients will participate in exclusive leadership bootcamps, 
        attend seminars led by industry experts, and gain access to 
        career counseling services.
  
        The grant is aimed at nurturing young leaders who are committed 
        to making a positive impact in their communities through 
        innovation, service, and advocacy.
      `,
        exam: ["English", "Reasoning", "Current Affairs"],
        documents: [
            "Resume",
            "Leadership Essay",
            "Reference Letter",
            "Portfolio (if applicable)",
        ],
        process: [
            "Complete the online application form.",
            "Upload the required documents in PDF format.",
            "Submit a short video introducing yourself and your leadership journey.",
            "Shortlisted candidates will be invited for an interview.",
        ],
        terms: [
            "Only students with verified leadership activities are eligible.",
            "Grant recipients must participate in at least two leadership events.",
            "The grant is valid for the academic year 2025-2026.",
        ],
        contact: "leaders@scholarships.com",
    },
];

const ScholarshipDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const scholarship = scholarships.find((s) => s.id === parseInt(id));

    if (!scholarship) {
        return <div>Scholarship not found!</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6 md:p-12">
            <Card bordered={false} className="bg-white shadow-none border-none">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6">{scholarship.title}</h1>

                {/* Colored Box Section with Hover Effect */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-blue-100 p-3 rounded-md hover:scale-105 transition-transform duration-300 shadow-none border-none">
                        <h2 className="text-md font-semibold">Amount</h2>
                        <p className="text-blue-700">{scholarship.amount}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-md hover:scale-105 transition-transform duration-300 shadow-none border-none">
                        <h2 className="text-md font-semibold">Eligibility</h2>
                        <p className="text-green-700">{scholarship.eligibility}</p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded-md hover:scale-105 transition-transform duration-300 shadow-none border-none">
                        <h2 className="text-md font-semibold">Deadline</h2>
                        <p className="text-yellow-700">{scholarship.deadline}</p>
                    </div>
                </div>

                <Divider />

                {/* Exam Subjects */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Exam Subjects</h2>
                    <div className="flex flex-wrap gap-2">
                        {scholarship.exam.map((subject, index) => (
                            <Tag color="blue" key={index}>{subject}</Tag>
                        ))}
                    </div>
                </div>

                <Divider />

                {/* Description */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="leading-relaxed text-gray-700">
                        {scholarship.description}
                    </p>
                </div>

                <Divider />

                {/* Documents */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Required Documents</h2>
                    <ol className="list-decimal list-inside text-gray-700 mt-2">
                        {scholarship.documents.map((doc, index) => (
                            <li key={index} className="mb-1">{doc}</li>
                        ))}
                    </ol>
                </div>

                <Divider />

                {/* Application Process */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Application Process</h2>
                    <ol className="list-decimal list-inside text-gray-700 mt-2">
                        {scholarship.process.map((step, index) => (
                            <li key={index} className="mb-1">{step}</li>
                        ))}
                    </ol>
                </div>

                <Divider />

                {/* Terms & Conditions */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Terms & Conditions</h2>
                    <ol className="list-decimal list-inside text-gray-700 mt-2">
                        {scholarship.terms.map((term, index) => (
                            <li key={index} className="mb-1">{term}</li>
                        ))}
                    </ol>
                </div>

                <Divider />

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                    <p className="text-gray-700">{scholarship.contact}</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <Button onClick={() => navigate("/scholarship")} type="primary">
                        Back to List
                    </Button>
                    <Button type="default">Apply Now</Button>
                </div>
            </Card>
        </div>
    );
};

export default ScholarshipDetails;
