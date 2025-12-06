import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://quiz-backend-aixd.onrender.com/api/auth/students";

const AllStudentsList = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  const itemsPerPage = 27;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Check stored timer in localStorage
  useEffect(() => {
    const storedTime = localStorage.getItem("examStartTime");

    if (storedTime) {
      const endTime = parseInt(storedTime) + 48 * 60 * 60 * 1000;
      updateCountdown(endTime);

      const interval = setInterval(() => updateCountdown(endTime), 1000);
      return () => clearInterval(interval);
    }
  }, []);

  // When student count reaches exactly 53 & no timer set => show popup
  useEffect(() => {
    if (students.length === 53 && !localStorage.getItem("examStartTime")) {
      setShowPopup(true);
    }
  }, [students]);

  // Function to calculate countdown
  const updateCountdown = (endTime) => {
    const now = Date.now();
    const distance = endTime - now;

    if (distance <= 0) {
      setTimeLeft(0);
      localStorage.removeItem("examStartTime");
    } else {
      setTimeLeft(distance);
    }
  };

  // Confirm start date -> start timer (48 Hours)
  const startTimer = () => {
    const now = Date.now();
    localStorage.setItem("examStartTime", now.toString());
    setShowPopup(false);
    updateCountdown(now + 48 * 60 * 60 * 1000);
  };

  const totalPages = Math.ceil(students.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = students.slice(startIndex, startIndex + itemsPerPage);

  // Exam button enabled only if student count 53 AND timer completed
  const isStartExamEnabled = students.length === 53 && timeLeft === 0;

  if (loading) {
    return (
      <div className="text-center p-10 text-xl font-semibold">Loading...</div>
    );
  }

  // Format timer text
  const formatTime = () => {
    if (timeLeft === null || timeLeft <= 0) return "00:00:00";

    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 48);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="p-5">

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold mb-3">Confirm Exam Schedule</h2>
            <p className="mb-4">
              Total 53 students registered. Do you want to start the 48-hour countdown?
            </p>
            <button
              onClick={startTimer}
              className="bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3">Sr No</th>
              <th className="px-4 py-3">Candidate Name</th>
              <th className="px-4 py-3">School</th>
              <th className="px-4 py-3">District</th>
              <th className="px-4 py-3">Picture</th>
            </tr>
          </thead>

          <tbody>
            {currentStudents.map((student, index) => (
              <tr key={student._id} className={index % 2 === 0 ? "bg-blue-50" : ""}>
                <td className="px-4 py-3">{startIndex + index + 1}</td>
                <td className="px-4 py-3">
                  {student.firstName} {student.lastName}
                </td>
                <td className="px-4 py-3">{student.schoolName || "N/A"}</td>
                <td className="px-4 py-3">{student.district || "N/A"}</td>
                <td className="px-4 py-3">
                  <img
                    src={student.profileImage || "https://via.placeholder.com/50"}
                    className="w-10 h-10 rounded-full border"
                    alt="pic"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-3">

          <Link to={isStartExamEnabled ? "/QuestionPopUp" : "#"}>
            <button
              disabled={!isStartExamEnabled}
              className={`px-5 py-2 rounded-lg shadow text-white ${
                isStartExamEnabled ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Start Exam
            </button>
          </Link>

          <div className="px-5 py-2 bg-yellow-500 text-white rounded-lg shadow">
            Exam starts in: {formatTime()}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-3">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Prev
          </button>

          <span>
            Page {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>

      <p className="text-center mt-4 font-semibold">
        Total Registered Students: {students.length} / 53
      </p>
    </div>
  );
};

export default AllStudentsList;
