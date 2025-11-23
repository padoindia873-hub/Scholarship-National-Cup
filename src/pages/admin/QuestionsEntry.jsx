import React, { useState } from "react";
import { Link } from "react-router-dom";
const QuestionsEntry = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      topic,
      question,
      options,
      answer,
    };

    try {
      setLoading(true);

      const response = await fetch(
        "https://quiz-backend-aixd.onrender.com/api/questions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      alert("Question Added Successfully ✅");

      // Reset form
      setTopic("");
      setQuestion("");
      setOptions(["", "", "", ""]);
      setAnswer("");
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Failed to add question ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-5 text-center">Add New Question</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium">Topic</label>
          <select
            className="w-full border p-2 rounded-lg"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          >
            <option value="">Select Topic</option>
            <option value="GK">GK</option>
            <option value="Academic">Academic</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Question</label>
          <input
            type="text"
            className="w-full border p-2 rounded-lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="font-medium">Options</label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {options.map((opt, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Option ${i + 1}`}
                className="border p-2 rounded-lg"
                value={opt}
                onChange={(e) => handleOptionChange(i, e.target.value)}
                required
              />
            ))}
          </div>
        </div>

        <div>
          <label className="font-medium">Correct Answer</label>
          <input
            type="text"
            className="w-full border p-2 rounded-lg"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Adding..." : "Add Question"}
        </button>

        <Link
          to="/ShowAllQuestion"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-center block"
        >
          Show All Question
        </Link>
        <Link
          to="/BulkQuestionUploader"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-center block"
        >
          All Question Add
        </Link>
      </form>
    </div>
  );
};

export default QuestionsEntry;
