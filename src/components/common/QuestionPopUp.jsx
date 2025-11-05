import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Questions from "../../pages/Question";

const QuestionPopUp = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [userData, setUserData] = useState({ name: "", roll: "" });

  useEffect(() => {
    // Step 1: Enter Name and Roll Number
    Swal.fire({
      title: "Enter Your Details",
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Enter your name" />
        <input id="swal-roll" class="swal2-input" placeholder="Enter your roll number" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Next",
      confirmButtonColor: "#22c55e",
      preConfirm: () => {
        const name = document.getElementById("swal-name").value.trim();
        const roll = document.getElementById("swal-roll").value.trim();
        if (!name) {
          Swal.showValidationMessage("Please enter your name");
        } else if (!roll) {
          Swal.showValidationMessage("Please enter your roll number");
        } else {
          return { name, roll };
        }
      },
    }).then((infoResult) => {
      if (infoResult.isConfirmed) {
        setUserData(infoResult.value);

        // Step 2: Enter 10-digit PIN
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
            } else if (pin !== "1234567890") { // Replace with real PIN if needed
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
        <Questions user={userData} />
      ) : (
        <div className="text-lg text-gray-600 animate-pulse">
          Verifying access...
        </div>
      )}
    </div>
  );
};

export default QuestionPopUp;
