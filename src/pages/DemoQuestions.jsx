import React, { useState, useEffect } from "react";

// -------------------------
// 🧠 General Knowledge Questions (50 max)
// -------------------------
const gkQuestions = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    id: 2,
    question: "Which is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    id: 3,
    question: "Who wrote the National Anthem of India?",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chatterjee",
      "Mahatma Gandhi",
      "Subhash Chandra Bose",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    id: 4,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    id: 5,
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen",
  },
];

// -------------------------
// 📚 Academic (Math + History + English) Questions (50 max)
// -------------------------
const academicQuestions = [
  {
    id: 1,
    question: "What is 12 × 8?",
    options: ["86", "88", "94", "96"],
    answer: "96",
  },
  {
    id: 2,
    question: "Who is known as the father of History?",
    options: ["Plato", "Herodotus", "Aristotle", "Socrates"],
    answer: "Herodotus",
  },
  {
    id: 3,
    question: "Identify the correct spelling:",
    options: ["Enviroment", "Envirnment", "Environment", "Environmant"],
    answer: "Environment",
  },
  {
    id: 4,
    question: "Solve: 15 + 9 ÷ 3 × 2 = ?",
    options: ["28", "21", "27", "20"],
    answer: "21",
  },
  {
    id: 5,
    question: "Which year did World War II end?",
    options: ["1942", "1945", "1939", "1950"],
    answer: "1945",
  },
];

// -------------------------
// ⚡ Quiz Component
// -------------------------
const DemoQuestions = () => {
  const [activeTab, setActiveTab] = useState("GK");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(0);

  const questions = activeTab === "GK" ? gkQuestions : academicQuestions;

  // Timer
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (selected) {
      if (selected === questions[current].answer) {
        setScore((prev) => prev + 1);
      }
      setSelected(null);
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
    } else {
      alert("Please select an answer before continuing!");
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setTime(0);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    handleRestart();
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
      {/* Header Tabs */}
      <div className="flex space-x-4 mb-6 border-b-2 border-green-200">
        {/* GK Tab */}
        <button
          onClick={() => handleTabChange("GK")}
          className={`px-6 py-2 font-semibold rounded-t-lg transition-all duration-300 ${
            activeTab === "GK"
              ? "border-b-4 border-green-500 text-white bg-green-500 shadow-md"
              : "text-blue-500 hover:text-blue-600 hover:bg-blue-50 border-b-4 border-transparent"
          }`}
        >
          General Knowledge (50 Marks)
        </button>

        {/* Academic Tab */}
        <button
          onClick={() => handleTabChange("Academic")}
          className={`px-6 py-2 font-semibold rounded-t-lg transition-all duration-300 ${
            activeTab === "Academic"
              ? "border-b-4 border-green-500 text-white bg-green-500 shadow-md"
              : "text-blue-500 hover:text-blue-600 hover:bg-blue-50 border-b-4 border-transparent"
          }`}
        >
          Math, History & English (50 Marks)
        </button>
      </div>

      {/* Quiz Section */}
      {!showResult ? (
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            {activeTab === "GK"
              ? "General Knowledge Quiz"
              : "Math, History & English Quiz"}
          </h1>
          <h2 className="text-lg font-semibold mb-4">
            Question {current + 1} of {questions.length}
          </h2>
          <p className="text-gray-700 mb-6">{questions[current].question}</p>

          <div className="space-y-3">
            {questions[current].options.map((opt, index) => (
              <label
                key={index}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                  selected === opt
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  className="mr-3 accent-green-500"
                />
                {opt}
              </label>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handleNext}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              {current + 1 === questions.length ? "Finish" : "Next →"}
            </button>
            <p className="text-sm text-gray-500">
              ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">
            {activeTab === "GK"
              ? "General Knowledge Result"
              : "Math, History & English Result"}
          </h1>
          <h2 className="text-xl font-semibold mb-2">Result:</h2>
          <p className="text-lg mb-2">
            {score} of {questions.length}
          </p>
          <p className="text-2xl font-bold text-green-600 mb-4">
            {Math.round((score / questions.length) * 100)}%
          </p>
          <p className="text-gray-500 mb-6">
            {score < questions.length / 2
              ? "You must study much harder!"
              : "Excellent work!"}
          </p>
          <p className="text-gray-400 mb-6">
            Time Spent: {minutes}:{seconds.toString().padStart(2, "0")}
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => alert("Feature coming soon!")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Check Answers
            </button>
            <button
              onClick={handleRestart}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Try Again
            </button>
            <button
              onClick={() =>
                handleTabChange(activeTab === "GK" ? "Academic" : "GK")
              }
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Back to Tabs
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoQuestions;
