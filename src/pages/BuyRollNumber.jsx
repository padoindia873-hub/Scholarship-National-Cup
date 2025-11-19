import React, { useState } from "react";
import phonePayQR from "../assets/phonePay.jpg";
import gpayQR from "../assets/gpay.jpg";
import creditCardImg from "../assets/creditCard.png";
import debitCardImg from "../assets/debitCard.jpg";
import bankAccountImg from "../assets/bank_acc.jpg";

const paymentMethods = [
  { id: 1, name: "PhonePe", img: phonePayQR },
  { id: 2, name: "GPay", img: gpayQR },
  { id: 3, name: "Credit Card", img: creditCardImg },
  { id: 4, name: "Debit Card", img: debitCardImg },
  { id: 5, name: "Bank Account", img: bankAccountImg },
];

const BuyRollNumber = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSendPaymentModal, setShowSendPaymentModal] = useState(false);

  const [selectedMethod, setSelectedMethod] = useState(null);
  const [rollNumber, setRollNumber] = useState(null);

  // User details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Send Payment Details
  const [sendEmail, setSendEmail] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handleBuyClick = () => {
    setShowUserModal(true);
  };

  const handleSendPaymentDetailsClick = () => {
    setShowSendPaymentModal(true);
  };

  const handleUserSubmit = () => {
    if (!name || !email || !phone || !password) {
      alert("Please fill all fields");
      return;
    }
    setShowUserModal(false);
    setShowPaymentModal(true);
  };

  const handlePayment = (methodId) => {
    setSelectedMethod(methodId);
    const generatedRollNo = Math.floor(100000000 + Math.random() * 900000000);
    setRollNumber(generatedRollNo);
    setShowPaymentModal(false);
  };

  const handleSendPaymentSubmit = () => {
    if (!sendEmail || !transactionId) {
      alert("Please enter Email and Transaction ID");
      return;
    }

    setShowSendPaymentModal(false);
    setPaymentSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="space-y-8 w-full max-w-4xl text-center">
        <h1 className="text-3xl font-bold">Payment Management</h1>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleBuyClick}
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition text-lg"
          >
            Buy Roll Number 121 Rupees
          </button>

          <button
            onClick={handleSendPaymentDetailsClick}
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition text-lg"
          >
            Send Your Payment Details
          </button>
        </div>

        {/* Payment Successful (BUY FLOW) */}
        {/* {paymentSubmitted && rollNumber && (
          <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg max-w-md mx-auto mt-4">
            <h3 className="text-lg font-bold">Payment Successful!</h3>

            <p className="mt-2">
              Roll Number: <b>{rollNumber}</b>
            </p>

            <p className="mt-1">
              Paid via:{" "}
              <b>{paymentMethods.find((m) => m.id === selectedMethod)?.name}</b>
            </p>

            <p className="mt-1">
              Name: <b>{name}</b>, Email: <b>{email}</b>, Phone: <b>{phone}</b>
             
            </p>
          </div>
        )} */}

        {/* Payment Submitted (SEND PAYMENT DETAILS FLOW) */}
        {paymentSubmitted && (
          <div className="bg-blue-100 border border-blue-300 text-blue-700 p-4 rounded-lg max-w-md mx-auto mt-4">
            <h3 className="text-lg font-bold">Payment Submitted Successfully!</h3>

            <p className="mt-2">
              Email: <b>{sendEmail}</b>
            </p>

            <p className="mt-1">
              Transaction ID: <b>{transactionId}</b>
            </p>

            <p className="mt-2 text-sm">
              Your payment details have been received. Verification will be completed within 
              <b> 30 minutes.</b>
            </p>
          </div>
        )}

        {/* User Details Modal */}
        {showUserModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full space-y-4 relative">
              <h2 className="text-2xl font-bold text-center">
                Enter Your Details
              </h2>

              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Id Number"
                className="w-full px-4 py-2 border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                onClick={handleUserSubmit}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Continue to Payment
              </button>

              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                onClick={() => setShowUserModal(false)}
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Send Payment Details Modal */}
        {showSendPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full space-y-4 relative">
              <h2 className="text-2xl font-bold text-center">
                Submit Payment Details
              </h2>

              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 border rounded-lg"
                value={sendEmail}
                onChange={(e) => setSendEmail(e.target.value)}
              />

              <input
                type="text"
                placeholder="Transaction ID"
                className="w-full px-4 py-2 border rounded-lg"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />

              <button
                onClick={handleSendPaymentSubmit}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Submit
              </button>

              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                onClick={() => setShowSendPaymentModal(false)}
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Payment Option Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full space-y-6 relative">
              <h2 className="text-2xl font-bold text-center">
                Select Payment Method
              </h2>

              <div className="flex flex-wrap justify-center gap-5">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="cursor-pointer text-center p-3 border rounded-lg transition-transform hover:scale-105 border-gray-200"
                    onClick={() => handlePayment(method.id)}
                  >
                    <img
                      src={method.img}
                      alt={method.name}
                      className="w-28 h-28 object-contain rounded-lg"
                    />
                    <p className="mt-2 font-medium text-gray-600">
                      {method.name}
                    </p>
                  </div>
                ))}
              </div>

              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                onClick={() => setShowPaymentModal(false)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyRollNumber;
