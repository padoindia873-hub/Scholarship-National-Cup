import React, { useState } from "react";
import phonePayQR from "../../assets/phonePay.jpg";
import gpayQR from "../../assets/gpay.jpg";
import creditCardImg from "../../assets/creditCard.png";
import debitCardImg from "../../assets/debitCard.jpg";
import bankAccountImg from "../../assets/bank_acc.jpg";

const paymentMethods = [
  { id: 1, name: "PhonePe", img: phonePayQR },
  { id: 2, name: "GPay", img: gpayQR },
  { id: 3, name: "Credit Card", img: creditCardImg },
  { id: 4, name: "Debit Card", img: debitCardImg },
  { id: 5, name: "Bank Account", img: bankAccountImg },
];

const PaymentManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [rollNumber, setRollNumber] = useState(null);

  // All user payment records
  const [paymentList, setPaymentList] = useState([]);

  // Dummy logged-in user (you can replace from API)
  const currentUser = {
    name: "Subhasish",
    email: "subhasish@gmail.com"
  };

  const handleMakePayment = () => {
    setShowModal(true);
  };

  const handlePayment = (methodId) => {
    setSelectedMethod(methodId);

    // Generate roll number
    const generatedRollNo = Math.floor(100000000 + Math.random() * 900000000);
    setRollNumber(generatedRollNo);

    // Generate Transaction ID
    const txnId =
      "TXN" + Math.floor(100000000000 + Math.random() * 900000000000);

    // Save user payment into list
    const newPayment = {
      name: currentUser.name,
      email: currentUser.email,
      rollNumber: generatedRollNo,
      transactionId: txnId,
      method: paymentMethods.find((m) => m.id === methodId)?.name,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    setPaymentList([...paymentList, newPayment]);

    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="space-y-8 w-full max-w-5xl text-center">

        {/* Header */}
        <h1 className="text-3xl font-bold">Payment Management</h1>

        {/* Buy Button */}
        <button
          onClick={handleMakePayment}
          className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition text-lg"
        >
          Buy Roll Number 121 Rupees
        </button>

        {/* All User Payment List */}
        {paymentList.length > 0 && (
          <div className="bg-white p-5 shadow rounded-xl mt-8">
            <h2 className="text-2xl font-bold mb-4 text-left">All Users Payment List</h2>

            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Roll Number</th>
                  <th className="border p-2">Payment Method</th>
                  <th className="border p-2">Transaction ID</th>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {paymentList.map((payment, index) => (
                  <tr key={index} className="text-sm">
                    <td className="border p-2">{payment.name}</td>
                    <td className="border p-2">{payment.email}</td>
                    <td className="border p-2">{payment.rollNumber}</td>
                    <td className="border p-2">{payment.method}</td>
                    <td className="border p-2">{payment.transactionId}</td>
                    <td className="border p-2">{payment.date}</td>
                    <td className="border p-2">{payment.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full space-y-6 relative">
              <h2 className="text-2xl font-bold text-center">Select Payment Method</h2>

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
                    <p className="mt-2 font-medium text-gray-600">{method.name}</p>
                  </div>
                ))}
              </div>

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                onClick={() => setShowModal(false)}
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

export default PaymentManagement;
