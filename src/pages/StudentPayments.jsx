import React, { useState } from "react";
import phonePayQR from "../assets/phonePay.jpg";
import gpayQR from "../assets/gpay.jpg";
import creditCardImg from "../assets/creditCard.png";
import debitCardImg from "../assets/debitCard.jpg";
import bankAccountImg from "../assets/bank_acc.jpg";
const StudentPayments = () => {
  const [openBankPopup, setOpenBankPopup] = useState(false);
  const [openCheckPopup, setOpenCheckPopup] = useState(false);

  const [paymentData, setPaymentData] = useState({
    bankName: "",
    accountNumber: "",
    amount: "",
  });

  const [transactionId, setTransactionId] = useState("");

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const submitBankPayment = () => {
    console.log("Bank Payment Submitted:", paymentData);
    setOpenBankPopup(false);
  };

  const checkPayment = () => {
    console.log("Checking Payment for Transaction:", transactionId);
    setOpenCheckPopup(false);
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
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Bank Payment Entry</h3>

            <div className="grid gap-3">
              <input
                className="border p-2 rounded"
                placeholder="Bank Name"
                name="bankName"
                value={paymentData.bankName}
                onChange={handleChange}
              />

              <input
                className="border p-2 rounded"
                placeholder="Account Number"
                name="accountNumber"
                value={paymentData.accountNumber}
                onChange={handleChange}
              />

              <input
                className="border p-2 rounded"
                placeholder="Amount"
                name="amount"
                value={paymentData.amount}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => setOpenBankPopup(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={submitBankPayment}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentPayments;
