import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const Questions = ({ user }) => {
  const [activeTab, setActiveTab] = useState("GK");
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  const [time, setTime] = useState(0);

  // ✅ NEW STATES TO STORE SCORES
  const [gkScore, setGkScore] = useState(null);
  const [academicScore, setAcademicScore] = useState(null);

  const BASE_URL = "https://quiz-backend-aixd.onrender.com/api/questions";

  // Fetch all questions (GK + Academic)
  useEffect(() => {
    const fetchQuestions = async (topic, retry = true) => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(`${BASE_URL}?topic=${topic}`, {
          signal: controller.signal,
        });
        clearTimeout(timeout);
        return await res.json();
      } catch (err) {
        if (retry) return fetchQuestions(topic, false);
        return [];
      }
    };

    const loadAll = async () => {
      setLoading(true);
      const gk = await fetchQuestions("GK");
      const academic = await fetchQuestions("Academic");
      setQuestions([...gk, ...academic]);
      setLoading(false);
    };

    loadAll();
  }, []);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredQuestions = questions.filter((q) => q.topic === activeTab);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleSelect = (opt) => {
    setSelected(opt);
    setAnswers((prev) => ({
      ...prev,
      [current]: opt,
    }));
  };

  // ✅ Score calculation for section
  const calculateScore = () => {
    let total = 0;
    filteredQuestions.forEach((q, index) => {
      if (answers[index] === q.answer) total++;
    });

    if (activeTab === "GK") setGkScore(total);
    else setAcademicScore(total);
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
      calculateScore();

      if (activeTab === "GK") {
        Swal.fire({
          icon: "success",
          title: "GK Completed!",
          text: "Click OK to start Academic section.",
          confirmButtonColor: "#22c55e",
        }).then(() => handleTabChange("Academic"));
      } else {
        Swal.fire({
          icon: "success",
          title: "Exam Completed!",
          text: "Final Result Ready",
          confirmButtonColor: "#22c55e",
        }).then(() => setShowResult(true));
      }
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setSelected(answers[current - 1] || null);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setTime(0);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    handleRestart();
  };

  // ✅ PDF includes BOTH results
const downloadResultPDF = () => {
  const doc = new jsPDF();

  // Determine which score to use
  const finalScore = activeTab === "GK" ? gkScore : academicScore;

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
  const totalQs = filteredQuestions.length;
  const correctCount = finalScore;
  const missedCount = Object.values(answers).filter(a => !a).length;
  const wrongCount = totalQs - correctCount - missedCount;
  const percentage = Math.round((correctCount / totalQs) * 100);

  doc.text(`Topic: ${activeTab}`, 10, y); y += 7;
  doc.text(`Total Questions: ${totalQs}`, 10, y); y += 7;
  doc.text(`Correct Answers: ${correctCount}`, 10, y); y += 7;
  doc.text(`Wrong Answers: ${wrongCount}`, 10, y); y += 7;
  doc.setTextColor(255, 140, 0);
  doc.text(`Missed / Not Attempted: ${missedCount}`, 10, y); y += 7;
  doc.setTextColor(0, 0, 0);
  doc.text(`Percentage: ${percentage}%`, 10, y); y += 7;
  doc.text(`Time Spent: ${minutes}:${seconds.toString().padStart(2, "0")}`, 10, y);
  y += 12;

  doc.setFont("Helvetica", "normal");

  // Question List
  filteredQuestions.forEach((q, index) => {
    if (y > 270) { doc.addPage(); y = 10; }

    doc.setTextColor(0, 0, 0);
    doc.text(`${index + 1}. ${q.question}`, 10, y);
    y += 6;

    const userAnswer = answers[index];

    if (!userAnswer) {
      doc.setTextColor(255, 140, 0); // Orange - Missed
      doc.text(`Not Attempted`, 10, y);
      y += 6;
      doc.setTextColor(0, 150, 0); // Green
      doc.text(`Correct Ans: ${q.answer}`, 10, y);
      y += 10;
      return;
    }

    if (userAnswer === q.answer) {
      doc.setTextColor(0, 150, 0);
      doc.text(`Correct ✔  Your Ans: ${userAnswer}`, 10, y);
    } else {
      doc.setTextColor(200, 0, 0);
      doc.text(`Wrong ✘  Your Ans: ${userAnswer}`, 10, y);
      y += 6;
      doc.setTextColor(0, 150, 0);
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      {/* ✅ Tabs Added Back */}
      <div className="flex space-x-4 mb-6 border-b-2 border-green-200">
        <button
          onClick={() => handleTabChange("GK")}
          disabled={gkScore !== null}
          className={`px-6 py-2 font-semibold rounded-t-lg transition-all duration-300 ${
            activeTab === "GK" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          General Knowledge (40 Marks)
        </button>

        <button
          onClick={() => handleTabChange("Academic")}
          disabled={gkScore === null}
          className={`px-6 py-2 font-semibold rounded-t-lg transition-all duration-300 ${
            activeTab === "Academic" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Math, History & English (60 Marks)
        </button>
      </div>

      {/* QUIZ SCREEN */}
      {!showResult ? (
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold mb-4">
            Question {current + 1} of {filteredQuestions.length}
          </h2>

          <p className="text-gray-700 mb-6">{filteredQuestions[current].question}</p>

          <div className="space-y-3">
            {filteredQuestions[current].options.map((opt, index) => (
              <label
                key={index}
                className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                  selected === opt ? "border-green-500 bg-green-50" : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="option"
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
        // ✅ FINAL COMBINED RESULT SCREEN
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">Final Result</h1>

          <div className="border rounded-lg p-4 bg-gray-100 mb-4">
            <h2 className="font-semibold text-xl">General Knowledge</h2>
            <p>Score: {gkScore} / 40</p>
            <p className="text-green-600 font-bold">
              {Math.round((gkScore / 40) * 100)}%
            </p>
          </div>

          <div className="border rounded-lg p-4 bg-gray-100 mb-6">
            <h2 className="font-semibold text-xl">Math, History & English</h2>
            <p>Score: {academicScore} / 60</p>
            <p className="text-green-600 font-bold">
              {Math.round((academicScore / 60) * 100)}%
            </p>
          </div>

          <button
            onClick={downloadResultPDF}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Download Result PDF
          </button>

          <Link
            to="/GetCompetitionExam"
            className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Exit
          </Link>
        </div>
      )}
    </div>
  );
};

export default Questions;
