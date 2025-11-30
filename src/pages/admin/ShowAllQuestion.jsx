import React, { useEffect, useState } from 'react';

const ShowAllQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For Update Popup
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({
    _id: '',
    topic: '',
    question: '',
    options: ['', '', '', ''],
    answer: ''
  });

  const API_URL = 'https://quiz-backend-aixd.onrender.com/api/questions';

  // Fetch all questions
  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuestions(data);
    } catch (err) {
      setError('Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // OPEN UPDATE POPUP
  const handleUpdate = (q) => {
    setEditData({
      _id: q._id,
      topic: q.topic,
      question: q.question,
      options: q.options,
      answer: q.answer,
    });
    setShowModal(true);
  };

  // HANDLE UPDATE SUBMIT
  const handleUpdateSubmit = async () => {
    try {
      await fetch(`${API_URL}/${editData._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData)
      });

      setShowModal(false);
      fetchQuestions();
      alert('Question Updated Successfully!');
    } catch (err) {
      alert('Update failed');
    }
  };

  // DELETE QUESTION
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this question?')) return;

    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchQuestions();
    } catch (err) {
      alert('Delete failed');
    }
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">All Questions</h2>
      <p className="text-sm text-gray-600 mb-4">Total Questions: {questions.length}</p>

      {questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        <div className="space-y-4">
          {questions.map((q, i) => (
            <div key={q._id} className="border rounded-lg p-4 shadow-sm flex flex-col gap-2">
              <p className="font-medium">#{i + 1} Topic: {q.topic}</p>
              <p className="text-gray-700">{q.question}</p>

              <ul className="list-disc pl-5 text-sm">
                {q.options.map((opt, index) => (
                  <li key={index}>{opt}</li>
                ))}
              </ul>

              <p className="text-green-600 text-sm">Answer: {q.answer}</p>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleUpdate(q)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(q._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* -------------------- UPDATE MODAL -------------------- */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-3">Update Question</h2>

            {/* Topic */}
            <input
              className="border p-2 w-full mb-2"
              placeholder="Topic"
              value={editData.topic}
              onChange={(e) => setEditData({ ...editData, topic: e.target.value })}
            />

            {/* Question */}
            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Question"
              value={editData.question}
              onChange={(e) => setEditData({ ...editData, question: e.target.value })}
            />

            {/* Options */}
            {editData.options.map((opt, i) => (
              <input
                key={i}
                className="border p-2 w-full mb-2"
                placeholder={`Option ${i + 1}`}
                value={opt}
                onChange={(e) => {
                  const newOptions = [...editData.options];
                  newOptions[i] = e.target.value;
                  setEditData({ ...editData, options: newOptions });
                }}
              />
            ))}

            {/* Answer */}
            <input
              className="border p-2 w-full mb-3"
              placeholder="Answer"
              value={editData.answer}
              onChange={(e) => setEditData({ ...editData, answer: e.target.value })}
            />

            {/* Buttons */}
            <div className="flex justify-between mt-3">
              <button
                className="bg-gray-500 text-white px-3 py-1 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="bg-green-600 text-white px-3 py-1 rounded"
                onClick={handleUpdateSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowAllQuestion;
