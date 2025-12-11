import React, { useState } from "react";
import phonePayQR from "../assets/phonePay.jpg";
import gpayQR from "../assets/gpay.jpg";
import creditCardImg from "../assets/creditCard.png";
import debitCardImg from "../assets/debitCard.jpg";
import bankAccountImg from "../assets/bank_acc.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StudentPayments = () => {
  const location = useLocation();
  const email = location.state?.email;
  console.log("email:", email);
  const [openBankPopup, setOpenBankPopup] = useState(false);
  const [openCheckPopup, setOpenCheckPopup] = useState(false);
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState({
    email:"",
    password: "",
    bankName: "",
    accountNumber: "",
    transactionId: "",
    IfScCode: "",
    MiCrCode: "",
    CifId: "",
    amount: "",
  });

  const [transactionId, setTransactionId] = useState("");

 const handleChange = (e) => {
  const { name, value } = e.target;

  setPaymentData({
    ...paymentData,
    [name]: name === "IfScCode" ? value.toUpperCase() : value
  });
};


const submitBankPayment = async () => {

  // Email Validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paymentData.email)) {
    alert("Enter a valid Email ID");
    return;
  }

  // Password Validation (min 6 chars, no spaces)
  if (!/^[A-Za-z0-9@#$%^&*!]{6,}$/.test(paymentData.password)) {
    alert("Password must be at least 6 characters & contain no spaces");
    return;
  }

  // Bank Name
    if (!paymentData.bankName.trim()) {
      alert("Bank Name is required");
      return;
    }

    // Account Number (10–18 digits recommended)
    if (!/^[0-9]{10,18}$/.test(paymentData.accountNumber)) {
      alert("Enter a valid Account Number (10–18 digits)");
      return;
    }

    // Transaction ID (required)
    if (!paymentData.transactionId.trim()) {
      alert("Transaction ID is required");
      return;
    }

    // IFSC validation (4 letters + 7 digits)
    if (!/^[A-Z]{4}[0-9]{7}$/i.test(paymentData.IfScCode)) {
      alert("Enter a valid IFSC code (Example: SBIN0001234)");
      return;
    }

    // MICR validation (9 digits)
    if (!/^[0-9]{9}$/.test(paymentData.MiCrCode)) {
      alert("Enter a valid MICR Code (9 digits)");
      return;
    }

    // CIF ID validation (numeric)
    if (!/^[0-9]{4,15}$/.test(paymentData.CifId)) {
      alert("Enter a valid CIF ID (only numbers)");
      return;
    }

    // Amount validation
    if (
      !/^[0-9]+(\.[0-9]{1,2})?$/.test(paymentData.amount) ||
      Number(paymentData.amount) <= 0
    ) {
      alert("Enter a valid Amount");
      return;
    }
  try {
    const res = await fetch("https://quiz-backend-aixd.onrender.com/api/auth/bank-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentData)
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Bank Payment Submitted:", paymentData);
     alert("Bank Payment Saved Successfully!");
     setOpenBankPopup(false);
    } else {
      alert(data.message);
    }

  } catch (err) {
    console.log(err);
    alert("Server Error");
  }
    console.log("Bank Payment Submitted:", paymentData);
    alert("Bank Payment Saved Successfully!");
    setOpenBankPopup(false);
};


  const generate10DigitNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000);
  };
  const checkPayment = async () => {
    if (!transactionId.trim()) {
      alert("Please enter a valid Transaction ID");
      return;
    }

    try {
      const res = await fetch(
        `https://quiz-backend-aixd.onrender.com/api/auth/transaction/${transactionId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        // alert(data.message || "Transaction not found");
        // setTimeout(() => {
        //   navigate("/BuyRoll");
        // }, 1000);
        alert("Transaction Not Found — Updating manually…");
        setOpenCheckPopup(true); // popup open
        // Call update-by-transaction API
        await updateByEmail(email, transactionId);
      } else {
        const randomRoll = generate10DigitNumber();
        console.log("Generated Roll:", randomRoll);
        const now = new Date();
        const currentDateTime =
          now.getFullYear() +
          "-" +
          String(now.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(now.getDate()).padStart(2, "0") +
          " " +
          String(now.getHours()).padStart(2, "0") +
          ":" +
          String(now.getMinutes()).padStart(2, "0") +
          ":" +
          String(now.getSeconds()).padStart(2, "0");

        console.log(currentDateTime);
        alert(
          `Payment Found for: Name ${data.user.firstName} ${data.user.lastName} | Start Date Time: ${currentDateTime}`
        );

        //  Corrected function call
        await updateBuyRoll(transactionId, randomRoll, currentDateTime);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }

    setOpenCheckPopup(false);
  };
  const updateByEmail = async (email, transactionId) => {
    try {
      const res = await fetch(
        `https://quiz-backend-aixd.onrender.com/api/auth/update-by-email/${email}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bankTransaction: transactionId,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Update Failed");
        return;
      }

      alert("User Updated Successfully Using Email!");
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  //  Correct API call
  const updateBuyRoll = async (
    transactionId,
    buyRollValue,
    currentDateTime
  ) => {
    try {
      const response = await fetch(
        `https://quiz-backend-aixd.onrender.com/api/auth/update-start-buyroll/${transactionId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            buyRoll: buyRollValue,
            startTime: currentDateTime,
          }),
        }
      );

      const data = await response.json();
      console.log("Updated:", data.user.buyRoll);
      alert(`BuyRoll Number: BuyRoll ${data.user.buyRoll}`);
      setTimeout(() => {
        // navigate("/WelcomePopup");
        navigate("/WelcomePopup", { state: { transactionId } });
      }, 1000);
      return data;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="p-6 grid gap-6 max-w-xl mx-auto">
      <div className="shadow-md rounded-2xl p-4 border bg-white">
        <div className="grid gap-4">
          <h2 className="text-xl font-semibold text-center">Student Payment</h2>

          {/* QR Section */}
          <div className="flex flex-row items-center gap-4">
            <img
              src={phonePayQR}
              alt="QR Code"
              className="w-80 h-80 border rounded-xl"
            />
            <img
              src={gpayQR}
              alt="QR Code"
              className="w-80 h-80 border rounded-xl"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4">
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-xl"
              onClick={() => setOpenCheckPopup(true)}
            >
              Check Payment
            </button>

            <button
              className="w-full border py-2 rounded-xl"
              onClick={() => setOpenBankPopup(true)}
            >
              Bank Payment Entry
            </button>
          </div>
        </div>
      </div>

      {/* Check Payment Popup */}
      {openCheckPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Check Payment Status</h3>

            <input
              className="border p-2 rounded w-full"
              placeholder="Enter Transaction ID"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => setOpenCheckPopup(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded"
                onClick={checkPayment}
              >
                Check
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bank Payment Popup */}
  {openBankPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg 
                    max-h-[80vh] overflow-y-auto">

      <h3 className="text-lg font-semibold mb-4">Bank Payment Entry</h3>

      {/* Bank Details Section */}
      <div className="mt-5 p-4 bg-blue-50 rounded-xl border border-blue-300">
        <h4 className="font-semibold text-blue-700 mb-2">Bank Details</h4>
        <p className="text-sm"><strong>Bank Name:</strong>UJJIVAN SMALL FINANCE BANK</p>
        <p className="text-sm"><strong>Name:</strong>MD KALIM KHAN</p>
        <p className="text-sm"><strong>A/C:</strong> 3306110190053806</p>
        <p className="text-sm"><strong>IFSC Code:</strong> UJVN0003306</p>
        <p className="text-sm"><strong>MICR Code:</strong> 000000000</p>
        <p className="text-sm"><strong>CIF ID:</strong> 000000000</p>
      </div>

      <div className="grid gap-3 mt-4">
        <input className="border p-2 rounded" placeholder="Email ID" name="email" value={paymentData.email} onChange={handleChange}/>
        <input className="border p-2 rounded" placeholder="Password" name="password" value={paymentData.password} onChange={handleChange}/>
        <input className="border p-2 rounded" placeholder="Bank Name" name="bankName" value={paymentData.bankName} onChange={handleChange}/>
        <input className="border p-2 rounded" placeholder="Account Number" name="accountNumber" value={paymentData.accountNumber} onChange={handleChange}/>
        <input className="border p-2 rounded" placeholder="Transaction Id" name="transactionId" value={paymentData.transactionId} onChange={handleChange}/>
        <input className="border p-2 rounded" placeholder="IFSC CODE" name="IfScCode" value={paymentData.IfScCode} onChange={handleChange}/>
        <input className="border p-2 rounded" placeholder="MICR CODE" name="MiCrCode" value={paymentData.MiCrCode} onChange={handleChange}/>
        <input className="border p-2 rounded" placeholder="CIF ID" name="CifId" value={paymentData.CifId} onChange={handleChange}/>
        <input className="border p-2 rounded" placeholder="Amount" name="amount" value={paymentData.amount} onChange={handleChange}/>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button className="px-4 py-2 border rounded" onClick={() => setOpenBankPopup(false)}>Cancel</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={submitBankPayment}>Submit</button>
      </div>

    </div>
  </div>
)}


    </div>
  );
};

export default StudentPayments;
