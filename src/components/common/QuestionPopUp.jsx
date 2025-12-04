import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Questions from "../../pages/Question";
import axios from "axios";

const QuestionPopUp = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [userData, setUserData] = useState({ name: "", roll: "" });

  useEffect(() => {
    // STEP 1 → Enter Name + Roll
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
    }).then(async (infoResult) => {
      if (infoResult.isConfirmed) {
        const { name, roll } = infoResult.value;

        // 🔥 STEP 1 API → check-details
        try {
          const response = await axios.post(
            "https://quiz-backend-aixd.onrender.com/api/auth/check-details",
            { name: name, buyRoll: roll }
          );

          // API SUCCESS
          console.log("CHECK-DETAILS API:", response.data);

          setUserData({ name, roll });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Invalid Details",
            text: error?.response?.data?.message || "Something went wrong",
          });
          return;
        }

        // STEP 2 → PIN + District + State
        Swal.fire({
          title: "Enter Verification Details",
          html: `
            <input id="swal-pin" class="swal2-input" placeholder="Enter 6-digit PIN" maxlength="6" />
            <input id="swal-district" class="swal2-input" placeholder="Enter District" />
            <input id="swal-state" class="swal2-input" placeholder="Enter State" />
          `,
          showCancelButton: true,
          confirmButtonText: "Verify",
          confirmButtonColor: "#22c55e",
          preConfirm: async () => {
            const pin = document.getElementById("swal-pin").value.trim();
            const district = document.getElementById("swal-district").value.trim();
            const state = document.getElementById("swal-state").value.trim();

            if (!pin || !district || !state) {
              Swal.showValidationMessage("All fields are required!");
              return false;
            }
            if (pin.length !== 6) {
              Swal.showValidationMessage("PIN must be exactly 6 digits!");
              return false;
            }

            // API CALL
            try {
              const res = await axios.post(
                "https://quiz-backend-aixd.onrender.com/api/auth/verify-pin-details",
                { pin, district, state }
              );

              return res.data; 
            } catch (error) {
              Swal.showValidationMessage(
                error?.response?.data?.message || "Verification failed!"
              );
            }
          },
        }).then((verifyResult) => {
          if (verifyResult.isConfirmed) {
            Swal.fire({
              icon: "success",
              title: "Verification Successful!",
              text: "Access granted ✔",
            }).then(() => {
              setShowTerms(true);
            });
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
