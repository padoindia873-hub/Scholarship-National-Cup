import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TermsAndConditionsPage from "../../pages/TermsAndConditionsPage";
import axios from "axios";

const WelcomePopup = () => {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    Swal.fire({
      title: "Welcome To Scholarship National Cup Competition!",
      text: "BEST OF LUCK 🎉",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#22c55e",
    }).then((result) => {
      if (result.isConfirmed) {
        openPinDistrictStateForm();
      }
    });
  }, []);

  // 🔥 Step 2 → Show Form for PIN + District + State
  const openPinDistrictStateForm = () => {
    Swal.fire({
      title: "Enter Details",
      html: `
        <input id="pin" class="swal2-input" placeholder="Enter 6-digit PIN" maxlength="6" />
        <input id="district" class="swal2-input" placeholder="Enter District" />
        <input id="state" class="swal2-input" placeholder="Enter State" />
      `,
      showCancelButton: true,
      confirmButtonText: "Verify",
      confirmButtonColor: "#22c55e",
      preConfirm: async () => {
        const pin = document.getElementById("pin").value;
        const district = document.getElementById("district").value;
        const state = document.getElementById("state").value;

        if (!pin || !district || !state) {
          Swal.showValidationMessage("All fields are required!");
          return;
        }
        if (pin.length !== 6) {
          Swal.showValidationMessage("PIN must be exactly 6 digits!");
          return;
        }

        // 🔥 API CALL
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
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Verification Successful!",
          text: "Access granted ✔",
        }).then(() => {
          setShowTerms(true);
        });
      }
    });
  };

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
