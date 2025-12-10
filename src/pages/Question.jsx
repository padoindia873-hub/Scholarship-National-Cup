import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import axios from "axios";
const Questions = ({ user, transactionId }) => {
  console.log("Transaction ID5:", transactionId);
  const [activeTab, setActiveTab] = useState("GK");
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  // NEW STATES TO STORE SCORES
  const [gkScore, setGkScore] = useState(null);
  const [academicScore, setAcademicScore] = useState(null);
  const [results, setResults] = useState([]);
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

  // Score calculation for section
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

  await fetch("https://quiz-backend-aixd.onrender.com/api/result/save-result", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(resultPayload),
  });

  // FIXED STATE UPDATE FLOW
  if (activeTab === "GK") {
    setGkScore(total);
  } else {
    setAcademicScore(total);
    setTimeout(() => {
      updateUserFinal();
    }, 400);
  }
};

  const calculateScore1 = async () => {
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
      updateUser();
    } catch (err) {
      console.error(" Failed to save result", err);
    }

    filteredQuestions.forEach((q, index) => {
      if (answers[index] === q.answer) total++;
    });

    if (activeTab === "GK") {
      setGkScore(total);
    } else {
      setAcademicScore(total);
      setTimeout(() => {
        updateUserFinal(); // call ONLY after academic score saved
      }, 300);
    }
  };

  const updateUserFinal = async () => {
    const now = new Date();
    const endDate = new Date(now.getTime() + 48 * 60 * 60 * 1000);

    const formatDate = (date) =>
      date.toISOString().replace("T", " ").split(".")[0];
    console.log("GKSCORE:", gkScore);
    console.log("GKSCORE1:", academicScore);

    const payload = {
      endTime: formatDate(endDate),
      rollActive: "0",
      rollInactive: "1",

      //  real scores
      gkMarks: gkScore,
      academyMarks: academicScore,
      fistLevel: "2",
      secLevel: "0",
      thirdLevel: "0",
      rank: "",
      winnerDetails: "",
    };

    try {
      const res = await axios.put(
        `https://quiz-backend-aixd.onrender.com/api/auth/update-user-after-exam/${transactionId}`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data.success) {
        console.log("User updated successfully", res.data.data);
      }
    } catch (error) {
      console.error(
        "Failed to update user:",
        error?.response?.data?.message || error.message
      );
    }
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
        // FINAL EXAM COMPLETED → UPDATE USER HERE
        Swal.fire({
          icon: "success",
          title: "Exam Completed!",
          text: "Final Result Ready",
          confirmButtonColor: "#22c55e",
        }).then(() => {
          updateUserFinal(); // CALL API
          setShowResult(true);
          deleteTransaction(transactionId);
        });
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
  useEffect(() => {
    if (user?.roll) {
      fetchResult();
    }
  }, [user]);

  const fetchResult = async () => {
    try {
      const res = await axios.get(
        `https://quiz-backend-aixd.onrender.com/api/result/result/${user.roll}`
      );

      const resultsData = res.data.results; // ✅ array

      console.log("FULL RESULTS:", resultsData);

      //  Print scores clearly
      resultsData.forEach((item) => {
        console.log(
          `TOPIC: ${item.topic}, SCORE: ${item.score}/${item.total}, PERCENTAGE: ${item.percentage}%`
        );
      });

      //  SET FULL RESULT LIST
      setResults(resultsData);

      // EXTRACT GK & ACADEMIC
      const gk = resultsData.find((r) => r.topic === "GK");
      const academic = resultsData.find((r) => r.topic === "Academic");

      //  SET STATES
      setGkScore(gk?.score || 0);
      setAcademicScore(academic?.score || 0);

      //  Call once after results are fetched
      updateUserFinal();
      downloadResultPDF(resultsData);
    } catch (err) {
      console.log(" API Error", err);
    }
  };

  const deleteTransaction = async (transactionId) => {
    try {
      const payload = { transactionId };

      const res = await axios.post(
        `https://quiz-backend-aixd.onrender.com/api/auth/delete-transaction`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Success:", res.data);
      return res.data;
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      return null;
    }
  };
  const downloadResultPDF = () => {
    if (!results || results.length === 0) {
      return alert("No result data found!");
    }

    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Quiz Result", 80, 15);

    let y = 30;

    results.forEach((result, idx) => {
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);

      doc.text(`-----------------------------------------`, 10, y);
      y += 6;
      doc.text(`Result #${idx + 1}`, 10, y);
      y += 6;
      doc.text(`Name: ${result.name || "N/A"}`, 10, y);
      y += 6;
      doc.text(`Roll: ${result.roll || "N/A"}`, 10, y);
      y += 6;
      doc.text(`Topic: ${result.topic || "N/A"}`, 10, y);
      y += 6;
      doc.text(`Score: ${result.score ?? 0}`, 10, y);
      y += 6;
      doc.text(`Total: ${result.total ?? 0}`, 10, y);
      y += 6;
      doc.text(`Percentage: ${result.percentage ?? 0}%`, 10, y);
      y += 6;
      doc.text(`Time Spent: ${result.timeSpent || "0"}`, 10, y);
      y += 10;

      const ans = Array.isArray(result.answers) ? result.answers : [];

      if (ans.length === 0) {
        doc.setTextColor(255, 0, 0);
        doc.text("No answers available in database", 10, y);
        y += 8;
      } else {
        ans.forEach((q, i) => {
          if (y > 280) {
            doc.addPage();
            y = 10;
          }
          doc.setTextColor(0, 0, 0);
          doc.text(`${i + 1}. ${q.question}`, 10, y);
          y += 5;

          doc.setTextColor(q.isCorrect ? 0 : 200, q.isCorrect ? 150 : 0, 0);
          doc.text(`Your Ans: ${q.selected}`, 14, y);
          y += 5;

          doc.setTextColor(0, 0, 255);
          doc.text(`Correct Ans: ${q.correct}`, 14, y);
          y += 7;
        });
      }

      y += 5;
    });

    doc.save(`${user.roll}_Quiz_Result.pdf`);
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
      {/*  Tabs Added Back */}
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

          <p className="text-gray-700 mb-6">
            {filteredQuestions[current].question}
          </p>

          <div className="space-y-3">
            {filteredQuestions[current].options.map((opt, index) => (
              <label
                key={index}
                className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                  selected === opt
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200"
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
        //  FINAL COMBINED RESULT SCREEN
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
            onClick={fetchResult}
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
