import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TermsAndConditionsPage from "../../pages/TermsAndConditionsPage";

const WelcomePopup = () => {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    // Step 1: Welcome message
    Swal.fire({
      title: "Welcome To Scholarship National Cup Competition!",
      text: "BEST OF LUCK 🎉",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#22c55e",
    }).then((result) => {
      if (result.isConfirmed) {
        // Step 2: 10-digit PIN entry
        Swal.fire({
          title: "Enter Your 10-Digit PIN",
          input: "password",
          inputPlaceholder: "Enter your 10-digit PIN",
          inputAttributes: {
            maxlength: 10,
            autocapitalize: "off",
            autocorrect: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Submit",
          confirmButtonColor: "#22c55e",
          cancelButtonText: "Cancel",
          preConfirm: (pin) => {
            if (!pin) {
              Swal.showValidationMessage("Please enter your PIN");
            } else if (pin.length !== 10) {
              Swal.showValidationMessage("PIN must be exactly 10 digits");
            } else if (pin !== "1234567890") { // ✅ Replace with your actual PIN
              Swal.showValidationMessage("Incorrect PIN. Try again!");
            }
            return pin;
          },
        }).then((pinResult) => {
          if (pinResult.isConfirmed && pinResult.value === "1234567890") {
            setShowTerms(true);
          }
        });
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showTerms ? (
        <TermsAndConditionsPage />
      ) : (
        <div className="text-lg text-gray-600 animate-pulse">
          Verifying access...
        </div>
      )}
    </div>
  );
};

export default WelcomePopup;
