import React from "react";

const StateLevelCandidatesBenefits = () => {
  const benefits = [
    {
      title: "Guaranteed Crorepati Assurance",
      desc: "Whether the state level exam candidate passes or fails, he will definitely become a Crorepati.",
    },
    {
      title: "₹5 Lakhs for School Development",
      desc: "Five lakhs cash will be given to develop 10 primary schools of the block from which you will participate in this competition and your own school gets 20 lakhs.",
    },
    {
      title: "₹2 Lakhs Scholarship",
      desc: "Two lakhs rupees scholarship will be given to 10 higher secondary pass poor and brilliant students from your school among state level examinees.",
    },
    {
      title: "Ceremony Hall Access",
      desc: "Four guardians or guests can enter the final examination ceremony hall with every state level candidate.",
    },
  ];

  return (
    <div className="w-full py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        State Level Candidates Benefits
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600 text-center">
              {item.title}
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateLevelCandidatesBenefits;