import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [transactionId, setTransactionId] = useState("");

  const token = localStorage.getItem("token");

  // Fetch Student List
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://quiz-backend-aixd.onrender.com/api/auth/users",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setStudents(res.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const openBankPopup = (student) => {
    setSelectedStudent(student);
    setTransactionId(student.bankTransaction || "");
    setOpenPopup(true);
  };

  const submitBankTransaction = async () => {
    try {
      const res = await axios.put(
        `https://quiz-backend-aixd.onrender.com/api/auth/users/${selectedStudent._id}/bank-transaction`,
        { transactionId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Transaction Updated!");
      setOpenPopup(false);
      fetchStudents();
    } catch (error) {
      console.log(error);
      alert("Failed to update");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-3">Student List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Class</th>
              <th>Transaction</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu) => (
              <tr key={stu._id}>
                <td>{stu.firstName} {stu.lastName}</td>
                <td>{stu.phone}</td>
                <td>{stu.studentClass}</td>
                <td>{stu.bankTransaction || "—"}</td>
                <td>
                  <button onClick={() => openBankPopup(stu)}>
                    Update Transaction
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Popup */}
      {openPopup && (
        <div style={popupStyles}>
          <div style={modalStyles}>
            <h3>Update Bank Transaction</h3>
            <p>
              Student: <b>{selectedStudent.firstName}</b>
            </p>

            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter Transaction ID"
              style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
            />

            <button onClick={submitBankTransaction}>Save</button>
            <button onClick={() => setOpenPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

// Popup styles
const popupStyles = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyles = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
};

export default StudentList;
