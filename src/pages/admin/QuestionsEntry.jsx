import React, { useState } from "react";

const QuestionsEntry = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ topic, question, options, answer });
    alert("Question Added ✅");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-5 text-center">Add New Question</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Topic */}
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

        {/* Question */}
        <div>
          <label className="font-medium">Question</label>
          <input
            type="text"
            placeholder="Enter question..."
            className="w-full border p-2 rounded-lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        {/* Options */}
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

        {/* Correct Answer Input */}
        <div>
          <label className="font-medium">Correct Answer</label>
          <input
            type="text"
            placeholder="Enter correct answer..."
            className="w-full border p-2 rounded-lg"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Question
        </button>

      </form>
    </div>
  ); 
};

export default QuestionsEntry;
