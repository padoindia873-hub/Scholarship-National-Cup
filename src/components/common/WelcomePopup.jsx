import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TermsAndConditionsPage from "../../pages/TermsAndConditionsPage";
import AllStudentsList from "../../pages/AllStudentsList";

const WelcomePopup = () => {
  const [showStudents, setShowStudents] = useState(false);

  useEffect(() => {
    Swal.fire({
      title: "Welcome To Scholarship National Cup Competition!",
      text: "BEST OF LUCK 🎉",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#22c55e",
    }).then((result) => {
      if (result.isConfirmed) {
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
            } else if (pin !== "1234567890") {
              Swal.showValidationMessage("Incorrect PIN. Try again!");
            }
            return pin;
          },
        }).then((pinResult) => {
          if (pinResult.isConfirmed && pinResult.value === "1234567890") {
            setShowStudents(true); // ← SHOW STUDENT LIST
          }
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {showStudents ? (
        <AllStudentsList />   // ← DISPLAY STUDENT LIST PAGE
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg text-gray-600 animate-pulse">
            Verifying access...
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePopup;
