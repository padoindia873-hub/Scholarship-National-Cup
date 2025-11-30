import React, { useState } from "react";
import OpenAI from "openai";
// BulkQuestionUploader
// Single-file React component to preview + upload a bulk questions JSON
// - Uses Tailwind classes for styling (no extra deps required)
// - Paste JSON, load a .json file, preview parsed questions and POST to API
// - Endpoint: https://quiz-backend-aixd.onrender.com/api/questions/bulk

export default function BulkQuestionUploader() {
  const apiUrl = "/api/questions/bulk"; // <<< Using proxy (NO CORS ISSUES)

  const sample = {
    questions: [
      {
        topic: "Academic",
        question: "What is 12 × 8?",
        options: ["86", "88", "94", "96"],
        answer: "96",
      },
      {
        topic: "Academic",
        question: "Who is known as the father of History?",
        options: ["Plato", "Herodotus", "Aristotle", "Socrates"],
        answer: "Herodotus",
      },
    ],
  };

  const [text, setText] = useState(JSON.stringify(sample, null, 2));
  const [parsed, setParsed] = useState(sample);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
   const [questionData, setQuestionData] = useState(null);
  const [topic, setTopic] = useState("GK"); // GK / Academic
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  // OpenAI client
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  // Generate Question
  const generateQuestion = async () => {
    setLoading(true);
    setQuestionData(null);
    setUploadMessage("");

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `
Generate a ${topic} quiz question in strict JSON format:

{
  "topic": "${topic}",
  "question": "",
  "options": ["", "", "", ""],
  "answer": ""
}

Do NOT add any extra text before or after JSON.
`,
          },
        ],
      });

      const aiText = response.choices[0].message.content.trim();

      // Extract JSON
      const jsonStart = aiText.indexOf("{");
      const jsonEnd = aiText.lastIndexOf("}") + 1;
      const cleanedJson = aiText.substring(jsonStart, jsonEnd);

      setQuestionData(JSON.parse(cleanedJson));
    } catch (err) {
      console.error("AI Response Error:", err);
      alert("Error generating question");
    }

    setLoading(false);
  };

  // Upload Question to Backend
  const uploadQuestion = async () => {
    if (!questionData) return;

    setUploading(true);
    setUploadMessage("");

    try {
      const res = await fetch(
        "https://quiz-backend-aixd.onrender.com/api/questions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(questionData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setUploadMessage("✅ Question uploaded successfully!");
      } else {
        setUploadMessage("❌ Upload failed: " + data.message);
      }
    } catch (err) {
      setUploadMessage("❌ Error uploading question");
      console.error(err);
    }

    setUploading(false);
  };

  const generateDemoQuestions = () => {
    const demo = {
      questions: [
        {
          topic: "GK",
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Venus", "Jupiter"],
          answer: "Mars",
        },
        {
          topic: "Science",
          question: "What gas do plants absorb?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          answer: "Carbon Dioxide",
        },
      ],
    };

    const json = JSON.stringify(demo, null, 2);
    setText(json);
    tryParse(json);
  };

  const tryParse = (value) => {
    try {
      const p = JSON.parse(value);
      if (!p || !Array.isArray(p.questions)) {
        setError("JSON must contain a 'questions' array.");
        setParsed(null);
        return;
      }
      setError(null);
      setParsed(p);
    } catch (e) {
      setError("Invalid JSON: " + e.message);
      setParsed(null);
    }
  };

  const onTextChange = (e) => {
    setText(e.target.value);
    tryParse(e.target.value);
  };

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const content = ev.target.result;
      setText(content);
      tryParse(content);
    };
    reader.readAsText(f);
  };

  const handleUpload = async () => {
    setError(null);
    setResponse(null);

    let body;
    try {
      body = JSON.parse(text);
    } catch (e) {
      setError("Invalid JSON: " + e.message);
      return;
    }

    if (!Array.isArray(body.questions)) {
      setError("JSON must contain a 'questions' array.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      setResponse({
        ok: res.ok,
        status: res.status,
        body: data,
      });

      if (!res.ok) setError(`Upload failed: HTTP ${res.status}`);
    } catch (e) {
      setError("Network or CORS error: " + e.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Bulk Questions Uploader</h1>

      <p className="mb-4 text-gray-600 text-sm">
        Paste your JSON, load a .json file, preview, and upload to API.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side */}
        <div>
          <label className="font-medium text-sm mb-1 block">JSON Input</label>

          <textarea
            value={text}
            onChange={onTextChange}
            rows={18}
            className="w-full p-3 border rounded font-mono text-sm"
          />

          <div className="flex flex-wrap gap-2 mt-3">
            <input type="file" accept="application/json" onChange={onFile} />

            <button
              className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
              onClick={() => {
                const sampleStr = JSON.stringify(sample, null, 2);
                setText(sampleStr);
                tryParse(sampleStr);
              }}
            >
              Load Example
            </button>

            <button
              className="px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700"
              onClick={generateDemoQuestions}
            >
              Generate Demo
            </button>

            <button
              className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 disabled:opacity-50"
              onClick={handleUpload}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>

          {error && (
            <div className="mt-3 p-2 bg-red-100 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

          {response && (
            <div className="mt-3 p-3 border rounded bg-gray-50">
              <div className="font-medium text-sm">API Response</div>
              <pre className="text-xs font-mono mt-2">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Preview</h2>
            <span className="text-sm text-gray-500">
              {parsed?.questions?.length ?? 0} questions
            </span>
          </div>

          <div className="max-h-[65vh] overflow-y-auto space-y-3 pr-2">
            {parsed?.questions?.map((q, idx) => (
              <div key={idx} className="p-3 border rounded bg-white shadow-sm">
                <div className="font-semibold text-sm">
                  {idx + 1}. {q.question}
                </div>

                <div className="text-xs text-gray-500 mb-1">
                  Topic: {q.topic}
                </div>

                <ul className="list-disc list-inside text-sm">
                  {q.options.map((o, i) => (
                    <li
                      key={i}
                      className={
                        o === q.answer ? "font-semibold text-green-700" : ""
                      }
                    >
                      {o} {o === q.answer ? "(answer)" : ""}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
  <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>Auto Question Generator</h2>

      {/* Topic Dropdown */}
      <label><strong>Select Topic:</strong></label>
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="GK">GK</option>
        <option value="Academic">Academic</option>
      </select>

      <br /><br />

      {/* Generate Button */}
      <button
        onClick={generateQuestion}
        disabled={loading}
        style={{
          padding: "10px 15px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        {loading ? "Generating..." : "Generate Question"}
      </button>

      {/* Show Generated Question */}
      {questionData && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h3>Topic: {questionData.topic}</h3>
          <p><strong>Question:</strong> {questionData.question}</p>

          <strong>Options:</strong>
          <ul>
            {questionData.options.map((op, i) => (
              <li key={i}>{op}</li>
            ))}
          </ul>

          <p>
            <strong>Answer:</strong> {questionData.answer}
          </p>

          {/* Upload Button */}
          <button
            onClick={uploadQuestion}
            disabled={uploading}
            style={{
              padding: "10px 15px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            {uploading ? "Uploading..." : "Upload Question"}
          </button>

          {/* Upload Message */}
          {uploadMessage && (
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              {uploadMessage}
            </p>
          )}
        </div>
      )}
    </div>
    </div>
  );
}
