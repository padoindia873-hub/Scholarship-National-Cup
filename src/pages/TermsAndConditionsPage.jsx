import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate from React Router

export default function TermsAndConditionsPage() {
  const [accepted, setAccepted] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate(); // Navigation hook

  // Checkbox toggle
  function handleAcceptChange(e) {
    setAccepted(e.target.checked);
  }

  // Print terms
  function handlePrint() {
    window.print();
  }

  // Continue button action
  function handleContinue() {
    if (!accepted) {
      alert("Please accept the Terms & Conditions first.");
      return;
    }
//AllStudentsList
    //  Navigate to your next page after accepting
    navigate("/AllStudentsList"); // <-- change this to your desired route
  }
//QuestionPopUp
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
        <header className="px-6 py-6 border-b">
          <h1 className="text-2xl sm:text-3xl font-bold">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mt-1">
            Please read these terms and conditions carefully before using our service.
          </p>
        </header>

        <main className="p-6">
          <div className="flex gap-6 flex-col lg:flex-row">
            {/* Sidebar / table of contents */}
            <nav className="w-full lg:w-1/4 sticky top-6 self-start">
              <h2 className="font-semibold mb-3">Contents</h2>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#introduction" className="hover:underline">1. Introduction</a></li>
                <li><a href="#use-of-service" className="hover:underline">2. Use of Service</a></li>
                <li><a href="#user-responsibilities" className="hover:underline">3. User Responsibilities</a></li>
                <li><a href="#limitations" className="hover:underline">4. Limitations of Liability</a></li>
                <li><a href="#termination" className="hover:underline">5. Termination</a></li>
                <li><a href="#contact" className="hover:underline">6. Contact</a></li>
              </ul>
            </nav>

            {/* Main content */}
            <section
              ref={contentRef}
              className="prose max-w-none w-full lg:w-3/4 text-gray-800 prose-a:text-blue-600 prose-a:underline hover:prose-a:no-underline"
            >
              <article id="introduction">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to our website/app. By using our service, you agree to be bound by these
                  Terms & Conditions. If you do not agree with any part of these terms, you must not
                  use our service.
                </p>
              </article>

              <article id="use-of-service">
                <h2>2. Use of Service</h2>
                <p>
                  You must be at least 13 years old (or the minimum legal age in your jurisdiction)
                  to use this service. You agree not to use the service for unlawful activities or in
                  a way that violates any applicable laws or regulations.
                </p>
                <h3>Acceptable Use</h3>
                <ul>
                  <li>Don't reverse-engineer or tamper with the service.</li>
                  <li>Don't upload malware or harmful content.</li>
                  <li>Respect intellectual property rights.</li>
                </ul>
              </article>

              <article id="user-responsibilities">
                <h2>3. User Responsibilities</h2>
                <p>
                  You are responsible for any activity that occurs under your account. Keep your
                  password secure and notify us immediately of any unauthorized use.
                </p>
                <h3>Content you provide</h3>
                <p>
                  You grant us a non-exclusive license to use the content you upload to provide and
                  improve the service. You represent that you have the right to upload that content.
                </p>
              </article>

              <article id="limitations">
                <h2>4. Limitations of Liability</h2>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF
                  THE SERVICE.
                </p>
                <h3>Warranty disclaimer</h3>
                <p>
                  The service is provided "as is" and we disclaim all warranties, express or
                  implied. We do not guarantee uninterrupted or error-free operation.
                </p>
              </article>

              <article id="termination">
                <h2>5. Termination</h2>
                <p>
                  We may suspend or terminate your access if you breach these terms. Upon
                  termination, your right to use the service ends immediately.
                </p>
              </article>

              <article id="contact">
                <h2>6. Contact</h2>
                <p>
                  For questions about these Terms & Conditions, contact us at
                  <a href="mailto:support@example.com"> support@example.com</a>.
                </p>
              </article>

              <hr />
              <p className="text-sm text-gray-600">Last updated: November 4, 2025</p>
            </section>
          </div>

          {/* Accept & Continue Section */}
          <div className="mt-6 border-t pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={accepted}
                onChange={handleAcceptChange}
                className="w-5 h-5 rounded border-gray-300"
                aria-label="I accept the Terms and Conditions"
              />
              <span className="text-sm text-gray-700">
                I have read and accept the Terms &amp; Conditions
              </span>
            </label>

            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-lg border hover:shadow-sm text-sm"
              >
                Print
              </button>

              {/* Navigate to /quiz when accepted */}
              <button
                onClick={handleContinue}
                disabled={!accepted}
                className={`px-4 py-2 rounded-lg text-white text-sm shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed ${
                  accepted ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
                }`}
              >
                Accept & Continue
              </button>
            </div>
          </div>
        </main>

        <footer className="px-6 py-4 border-t text-xs text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
