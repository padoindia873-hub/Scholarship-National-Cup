import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
const Questions = ({ user }) => {
  const [activeTab, setActiveTab] = useState("GK");
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(0);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://quiz-backend-aixd.onrender.com/api/questions";

  //  Fetch questions from API
  useEffect(() => {
    const fetchQuestions = async (topic, retry = true) => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10 sec timeout

        const res = await fetch(`${BASE_URL}?topic=${topic}`, {
          signal: controller.signal,
        });
        clearTimeout(timeout);

        return await res.json();
      } catch (err) {
        if (retry) {
          console.warn(`Retrying load for ${topic}...`);
          return fetchQuestions(topic, false);
        }
        console.error(`Failed to fetch ${topic} questions`);
        return [];
      }
    };

    const loadAll = async () => {
      setLoading(true);
      const gk = await fetchQuestions("GK");
      const academic = await fetchQuestions("Academic");
      setQuestions([...gk, ...academic]); // GK first, then Academic
      setLoading(false);
    };

    loadAll();
  }, []);

  //  Timer
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredQuestions = questions.filter((q) => q.topic === activeTab);

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

    if (current + 1 < filteredQuestions.length) {
      setCurrent((prev) => prev + 1);
      setSelected(answers[current + 1] || null);
    } else {
      //  When questions finish
      calculateScore();

      if (activeTab === "GK") {
        Swal.fire({
          icon: "success",
          title: " GK Completed",
          text: "Click OK to start Academic section",
          confirmButtonColor: "#22c55e",
          allowOutsideClick: false,
        }).then(() => {
          handleTabChange("Academic"); // go to Academic
        });
      } else {
        Swal.fire({
          icon: "success",
          title: " Exam Completed!",
          text: "Your result has been saved successfully.",
          confirmButtonColor: "#22c55e",
          allowOutsideClick: false,
        }).then(() => {
          setShowResult(true); // show final result screen
        });
      }
    }
  };
  // const handleNext = () => {
  //   if (!selected && answers[current] == null) {
  //     alert("Please select an answer before continuing!");
  //     return;
  //   }

  //   if (current + 1 < filteredQuestions.length) {
  //     setCurrent((prev) => prev + 1);
  //     setSelected(answers[current + 1] || null);
  //   } else {
  //     calculateScore();
  //     setShowResult(true);
  //   }
  // };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setSelected(answers[current - 1] || null);
    }
  };

  const calculateScore = async () => {
    let total = 0;
    const answerRecords = [];

    filteredQuestions.forEach((q, index) => {
      const userAns = answers[index];
      const correct = userAns === q.answer;
      if (correct) total += 1;

      answerRecords.push({
        question: q.question,
        selected: userAns,
        correct: q.answer,
        isCorrect: correct,
      });
    });

    setScore(total);

    const resultPayload = {
      name: user.name,
      roll: user.roll,
      topic: activeTab,
      score: total,
      total: filteredQuestions.length,
      percentage: Math.round((total / filteredQuestions.length) * 100),
      timeSpent: `${minutes}:${seconds.toString().padStart(2, "0")}`,
      answers: answerRecords,
    };

    try {
      await fetch(
        "https://quiz-backend-aixd.onrender.com/api/result/save-result",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(resultPayload),
        }
      );
      console.log("Result saved");
    } catch (err) {
      console.error(" Failed to save result", err);
    }
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
  const downloadResultPDF = () => {
  const doc = new jsPDF();

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Quiz Result", 80, 15);

  doc.setFontSize(12);
  let y = 30;

  // User Details
  doc.setTextColor(0, 0, 0);
  doc.text(`Name: ${user.name}`, 10, y); y += 7;
  doc.text(`Roll: ${user.roll}`, 10, y); y += 10;

  // Score Details
  doc.text(`Topic: ${activeTab}`, 10, y); y += 7;
  doc.text(`Total Questions: ${filteredQuestions.length}`, 10, y); y += 7;
  doc.text(`Correct Answers: ${score}`, 10, y); y += 7;
  doc.text(`Wrong Answers: ${filteredQuestions.length - score}`, 10, y); y += 7;
  doc.text(`Percentage: ${Math.round((score / filteredQuestions.length) * 100)}%`, 10, y); 
  y += 7;
  doc.text(`Time Spent: ${minutes}:${seconds.toString().padStart(2, "0")}`, 10, y);
  y += 12;

  doc.setFont("Helvetica", "normal");

  // Questions List
  filteredQuestions.forEach((q, index) => {
    if (y > 270) {
      doc.addPage();
      y = 10;
    }

    // Question text (black)
    doc.setTextColor(0, 0, 0);
    doc.text(`${index + 1}. ${q.question}`, 10, y);
    y += 6;

    // Get user answer
    const userAnswer = answers[index];

    // If correct → GREEN, else → RED
    if (userAnswer === q.answer) {
      doc.setTextColor(0, 150, 0); // ✅ Green
      doc.text(`Correct Ans: ${q.answer}`, 10, y);
    } else {
      doc.setTextColor(200, 0, 0); // ❌ Red
      doc.text(`Your Ans: ${userAnswer || "Not Answered"}`, 10, y);
      y += 6;
      doc.setTextColor(0, 150, 0); // ✅ Show correct answer also in Green
      doc.text(`Correct Ans: ${q.answer}`, 10, y);
    }

    y += 10;
  });

  doc.save(`${user.name}_Result.pdf`);
};


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        Loading questions...
      </div>
    );
  }

  if (!filteredQuestions.length) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        No questions available for {activeTab}.
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold text-center mb-8">
            Welcome {user.name} (Roll: {user.roll})
          </h1>
          <h1 className="text-3xl font-bold text-center mb-6">
            {activeTab === "GK" ? "Qualifying Exam" : "Qualifying Exam"}
          </h1>
          <h2 className="text-lg font-semibold mb-4">
            Question {current + 1} of {filteredQuestions.length}
          </h2>
          <p className="text-gray-700 mb-6">
            {filteredQuestions[current].question}
          </p>

          <div className="space-y-3">
            {filteredQuestions[current].options.map((opt, index) => (
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
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition mr-6"
              >
                <span className="text-lg font-semibold">
                  {current + 1 === filteredQuestions.length ? "Finish" : "Next"}
                </span>
                {current + 1 !== filteredQuestions.length && (
                  <ArrowRight size={20} />
                )}
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
            Score: {score} / {filteredQuestions.length}
          </p>
          <p className="text-2xl font-bold text-green-600 mb-4">
            {Math.round((score / filteredQuestions.length) * 100)}%
          </p>
          <p className="text-gray-400 mb-6">
            Time Spent: {minutes}:{seconds.toString().padStart(2, "0")}
          </p>
          <div className="flex justify-center gap-3">
            {/* <button
              onClick={handleRestart}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Try Again
            </button> */}
            <button
              onClick={downloadResultPDF}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Download Result PDF
            </button>
            <Link
              to="/GetCompetitionExam"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Exit
            </Link>

            {/* <button
              onClick={() =>
                handleTabChange(activeTab === "GK" ? "Academic" : "GK")
              }
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Exit
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
