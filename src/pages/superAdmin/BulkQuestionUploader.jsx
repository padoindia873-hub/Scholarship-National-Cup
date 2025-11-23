import React, { useState } from "react";

// BulkQuestionUploader
// Single-file React component to preview + upload a bulk questions JSON
// - Uses Tailwind classes for styling (no extra deps required)
// - Paste JSON, load a .json file, preview parsed questions and POST to API
// - Endpoint: https://quiz-backend-aixd.onrender.com/api/questions/bulk

export default function BulkQuestionUploader() {
  const apiUrl = "https://quiz-backend-aixd.onrender.com/api/questions/bulk";

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
    {
      topic: "Academic",
      question: "Identify the correct spelling:",
      options: [
        "Enviroment",
        "Envirnment",
        "Environment",
        "Environmant",
      ],
      answer: "Environment",
    },
  ],
};

  // ChatGPT-style demo generator (mocked locally)
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
          question: "What gas do plants absorb from the atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          answer: "Carbon Dioxide",
        },
        {
          topic: "Math",
          question: "What is the square root of 144?",
          options: ["10", "11", "12", "13"],
          answer: "12",
        },
        {
          topic: "History",
          question: "In which year did India gain independence?",
          options: ["1945", "1946", "1947", "1950"],
          answer: "1947",
        }
      ]
    };

    const json = JSON.stringify(demo, null, 2);
    setText(json);
    tryParse(json);
  };

  const [text, setText] = useState(JSON.stringify(sample, null, 2));
  const [parsed, setParsed] = useState(sample);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Try parse text and update parsed preview
  const tryParse = (value) => {
    setError(null);
    try {
      const p = JSON.parse(value);
      if (!p || !Array.isArray(p.questions)) {
        setError("JSON must be an object with a 'questions' array.");
        setParsed(null);
        return;
      }
      setParsed(p);
    } catch (e) {
      setError(e.message);
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
    try {
      const body = JSON.parse(text);
      if (!body || !Array.isArray(body.questions)) {
        setError("JSON must be an object with a 'questions' array.");
        return;
      }
    } catch (e) {
      setError("Invalid JSON: " + e.message);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: text,
      });
      const data = await res.json();
      setResponse({ ok: res.ok, status: res.status, body: data });
      if (!res.ok) setError(`Upload failed: HTTP ${res.status}`);
    } catch (e) {
      setError("Network or CORS error: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bulk Questions Uploader</h1>

      <p className="mb-2 text-sm text-gray-600">
        Paste your bulk questions JSON (object with a <code>questions</code> array),
        or load a .json file, preview and upload to the API.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">JSON input</label>
          <textarea
            value={text}
            onChange={onTextChange}
            rows={18}
            className="w-full p-2 border rounded font-mono text-sm"
          />

          <div className="flex items-center gap-2 mt-2">
            <input type="file" accept="application/json" onChange={onFile} />
            <button
              className="px-4 py-2 rounded shadow bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              onClick={() => {
                setText(JSON.stringify(sample, null, 2));
                tryParse(JSON.stringify(sample));
              }}
            >
              Load Example
            </button>

            <button
              className="px-4 py-2 rounded shadow bg-purple-600 text-white hover:bg-purple-700"
              onClick={generateDemoQuestions}
            >
              Generate Demo Questions (ChatGPT Style)
            </button>
            <button
              className="px-4 py-2 rounded shadow bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
              onClick={handleUpload}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload to API"}
            </button>
          </div>

          {error && (
            <div className="mt-3 text-red-700 bg-red-100 p-2 rounded">{error}</div>
          )}

          {response && (
            <div className="mt-3 p-3 rounded border">
              <div className="text-sm font-medium">Response</div>
              <pre className="text-xs mt-1 font-mono">{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}

          <div className="mt-3 text-xs text-gray-500">
            Note: If you see a CORS or network error in the browser, the API server
            must allow your origin. To test quickly, run this from a server or
            use a local dev server (create-react-app / Vite) and ensure the
            backend accepts requests from your origin.
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Preview</h2>
            <div className="text-sm text-gray-500">{parsed?.questions?.length ?? 0} questions</div>
          </div>

          <div className="space-y-3 max-h-[60vh] overflow-auto pr-2">
            {parsed && Array.isArray(parsed.questions) ? (
              parsed.questions.map((q, idx) => (
                <div key={idx} className="p-3 border rounded">
                  <div className="text-sm font-semibold">{idx + 1}. {q.question}</div>
                  <div className="text-xs text-gray-500">Topic: {q.topic}</div>
                  <ul className="mt-2 list-disc list-inside text-sm">
                    {Array.isArray(q.options) && q.options.map((o, i) => (
                      <li key={i} className={`text-sm ${o === q.answer ? 'font-semibold' : ''}`}>
                        {o} {o === q.answer ? ' (answer)' : ''}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-500">No valid preview available.</div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        Usage: copy/paste your JSON or drop a .json file then click <strong>Upload to API</strong>.
      </div>
    </div>
  );
}
