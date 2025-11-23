import React, { useEffect, useState } from 'react';

const ShowAllQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://quiz-backend-aixd.onrender.com/api/questions'; // adjust if needed

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

  // Delete question
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this question?')) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      fetchQuestions();
    } catch (err) {
      alert('Delete failed');
    }
  };

  // Update question (simple example)
  const handleUpdate = (question) => {
    // You can navigate to edit page or open modal
    alert(`Update clicked for: ${question.question}`);
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
            <div
              key={q._id}
              className="border rounded-lg p-4 shadow-sm flex flex-col gap-2"
            >
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
    </div>
  );
};

export default ShowAllQuestion;
