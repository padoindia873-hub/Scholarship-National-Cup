import React, { useState } from "react";
import { Radio, Button, Card } from "antd";

const PaymentDetails = () => {
  const [paymentType, setPaymentType] = useState("account");

  return (
    <div className="p-8">
      {/* Page Title */}
      <h2 className="text-center text-xl font-semibold mb-10">Payment</h2>

      {/* Card Container */}
      <Card className="p-6" style={{ borderRadius: "12px" }}>
        <h3 className="text-lg font-semibold mb-6">Payment Option</h3>

        {/* Radio Group */}
        <Radio.Group
          onChange={(e) => setPaymentType(e.target.value)}
          value={paymentType}
        >
          <div className="flex items-center gap-10 mb-8">
            <Radio value="account">Account Payee</Radio>
            <Radio value="upi">UPI</Radio>
            <Radio value="gpay">GPAY</Radio>
            <Radio value="phonepe">Phone Pay</Radio>
          </div>
        </Radio.Group>

        {/* Proceed Button */}
        <div className="flex justify-end">
          <Button
            type="primary"
            size="large"
            style={{
              background: "#0A1A5C",
              padding: "8px 30px",
              borderRadius: "8px",
              fontSize: "15px",
            }}
          >
            Proceed for payment
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PaymentDetails;
