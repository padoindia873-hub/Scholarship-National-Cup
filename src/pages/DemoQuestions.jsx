import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// -------------------------
// 🧠 General Knowledge Questions
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
// 📚 Academic Questions
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
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(0);

  const questions = activeTab === "GK" ? gkQuestions : academicQuestions;

  // Timer
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (opt) => {
    setSelected(opt);
    setAnswers((prev) => ({
      ...prev,
      [current]: opt,
    }));
  };

  const handleNext = () => {
    if (!selected && answers[current] == null) {
      alert("Please select an answer before continuing!");
      return;
    }

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setSelected(answers[current + 1] || null);
    } else {
      calculateScore();
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setSelected(answers[current - 1] || null);
    }
  };

  const calculateScore = () => {
    let total = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) total += 1;
    });
    setScore(total);
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setAnswers({});
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
      <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-black-300 mb-2 sm:mb-3">
        KK PADHO INDIA PRESENTS
      </h1>

    

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b-2 border-green-200">
        <button
          onClick={() => handleTabChange("GK")}
          className={`px-6 py-2 font-semibold rounded-t-lg transition-all duration-300 ${
            activeTab === "GK"
              ? "border-b-4 border-green-500 text-white bg-green-500 shadow-md"
              : "border-b-4 border-green-500 text-white bg-green-500 shadow-md"
          }`}
        >
          General Knowledge 40 Marks
        </button>

        <button
          onClick={() => handleTabChange("Academic")}
          className={`px-6 py-2 font-semibold rounded-t-lg transition-all duration-300 ${
            activeTab === "Academic"
              ? "border-b-4 border-green-500 text-white bg-green-500 shadow-md"
              : "border-b-4 border-green-500 text-white bg-green-500 shadow-md"
          }`}
        >
          Math, History & English 60 Marks
        </button>
      </div>

      {/* Quiz Section */}
      {!showResult ? (
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            {activeTab === "GK"
              ? "Qualifying Exam "
              : "Qualifying Exam"}
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
                  onChange={() => handleSelect(opt)}
                  className="mr-3 accent-green-500"
                />
                {opt}
              </label>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrevious}
              disabled={current === 0}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg transition ${
                current === 0
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              <ArrowLeft size={20} />
              <span className="text-lg font-semibold">Back</span>
            </button>

            <div className="flex items-center gap-15">
              {"   "}
              {/* Adds space between Next and Timer */}
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition mr-6" // 👈 added mr-6
              >
                <span className="text-lg font-semibold">
                  {current + 1 === questions.length ? "Finish" : "Next"}
                </span>
                {current + 1 !== questions.length && <ArrowRight size={20} />}
              </button>
              <p className="text-sm text-gray-500">
                ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">
            {activeTab === "GK"
              ? "General Knowledge Result"
              : "Math, History & English Result"}
          </h1>
          <p className="text-lg mb-2">
            Score: {score} / {questions.length}
          </p>
          <p className="text-2xl font-bold text-green-600 mb-4">
            {Math.round((score / questions.length) * 100)}%
          </p>
          <p className="text-gray-400 mb-6">
            Time Spent: {minutes}:{seconds.toString().padStart(2, "0")}
          </p>
          <div className="flex justify-center gap-3">
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
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
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
